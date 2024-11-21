"use server";

import prisma from "@/lib/prisma";
import { generateChaptersWithOpenAI } from "@/utils/chapters/openai";
import { parseXMLContent } from "@/utils/chapters/parsing";
import { validateYouTubeLink } from "@/utils/chapters/validations";
import { getVideoDetails, getVideoIdFromLink, getVideoTranscript } from "@/utils/chapters/youtube";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

type GenerateChaptersResponse = {
    success: boolean;
    error?: string;
    data?: {
      title: string;
      content: string[];
      userId: string;
      id: string;
      createdAt: Date;
    };
};

export async function generateChapters(
    formData: FormData
): Promise<GenerateChaptersResponse> {
    
    const user = await currentUser();

    const userDB = await prisma.user.findFirst({
        where: {
          email: user?.primaryEmailAddress?.emailAddress,
        },
    });
    
    if (!userDB) {
        return {
          success: false,
          error: "user_not_found",
        };
    }

    const link = formData.get("link") as string;

    if (!link) {
        return { success: false, error: "link_required" };
    }

    if (!(await validateYouTubeLink(link))) {
        return { success: false, error: "invalid_youtube_link" };
    }

    const videoId = await getVideoIdFromLink(link);

    if (!videoId) {
        return {
          success: false,
          error: "failed_to_get_video_id",
        };
    }

    const videoDetails = await getVideoDetails(videoId);
    const videoTranscript = await getVideoTranscript(videoId);

    if (
        !videoDetails ||
        !videoTranscript?.subtitles ||
        videoTranscript.subtitles.length === 0
    ) {
        return {
        success: false,
        error: "video_issue",
        };
    }

    const lengthSeconds =  typeof videoDetails.lengthSeconds === "string" ? parseInt(videoDetails.lengthSeconds, 10) : videoDetails.lengthSeconds;

    if (isNaN(lengthSeconds)) {
        return {
          success: false,
          error: "video_issue",
        };
    }
    
    if (lengthSeconds > 3600) {
        return {
            success: false,
            error: "video_too_long",
        };
    }

    const parsedTranscript = await parseXMLContent(videoTranscript.subtitles[0]);

    if (!parsedTranscript) {
        return {
        success: false,
        error: "subtitles_issue",
        };
    }

    const openAiChapters = await generateChaptersWithOpenAI(
        parsedTranscript,
        lengthSeconds
    );

    if (!openAiChapters) {
        return {
            success: false,
            error: "openai_issue",
        };
    }

    const saveChaptersToDatabase = await prisma.chapterSet.create({
        data: {
          title: videoDetails.title,
          content: openAiChapters,
          userId: userDB.id,
        },
    });
    
    revalidatePath("/blog-posts");
    
    return {
        success: true,
        data: saveChaptersToDatabase,
    };
}