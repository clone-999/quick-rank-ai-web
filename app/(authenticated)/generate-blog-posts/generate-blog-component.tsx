"use client"

import { SubmitButton } from "@/components/authenticated/SubmitButton";
import { Input } from "@/components/ui/input";
import { cn, extractYouTubeID } from "@/lib/utils";
import { useState } from "react";
import { toast } from "sonner";
import { generateBlogPosts } from "./actions";
import prisma from "@/lib/prisma";
import { useRouter } from "next/navigation";

interface StrapiErrorsProps {
    message: string | null;
    name: string;
}
  
const INITIAL_STATE = {
    message: null,
    name: "",
};

const GenerateBlogComponent = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<StrapiErrorsProps>(INITIAL_STATE);
    const [value, setValue] = useState<string>("");

    async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);
    
        const formData = new FormData(event.currentTarget);
        const videoId = formData.get("videoId") as string;

        const processedVideoId = extractYouTubeID(videoId);

        if (!processedVideoId) {
            toast.error("Invalid Youtube Video ID");
            setLoading(false);
            setValue("");
            setError({
                ...INITIAL_STATE,
                message: "Invalid Youtube Video ID",
                name: "Invalid Id",
            });
            return;
        }

        toast.success("Generating Blog Post");

        const blogPostResponseData = await generateBlogPosts(processedVideoId);

        if (blogPostResponseData?.success) {
            setValue("");
            toast.error(blogPostResponseData.error);
            setError({
              ...INITIAL_STATE,
              message: blogPostResponseData.error,
              name: "Blog Post Error",
            });
            setLoading(false);
            return;
        }

        try {
            const savePostsToDatabase = await prisma.posts.create({
                data: {
                    title: `Blog post for video: ${processedVideoId}`,
                    videoId: processedVideoId,
                    content: `${blogPostResponseData?.data?.post}`,
                    user_id: `${blogPostResponseData?.data?.user_id}`
                },
            });
            if (savePostsToDatabase.id) {
                toast.success("Blog Post Created");
                // Reset form after successful creation
                setValue("");
                setError(INITIAL_STATE);
                router.push(`/blog-posts/${processedVideoId}`);
            } else{
                router.push(`/error?error=${blogPostResponseData.error}`);
            }
            
        } catch (error) {
            console.log("An unexpected error occurred while creating the blog post", error);
            setLoading(false);
            router.push(`/error?error=${blogPostResponseData.error}`);
        }
        setLoading(false);
    }

    function clearError() {
        setError(INITIAL_STATE);
        if (error.message) setValue("");
    }

    const errorStyles = error.message
    ? "outline-1 outline outline-red-500 placeholder:text-red-700"
    : "";

    return(
        <div className="w-full max-w-[960px]">
            <form
                onSubmit={handleFormSubmit}
                className="flex gap-2 items-center justify-center"
            >
                <Input
                    name="videoId"
                    placeholder={
                        error.message ? error.message : "Youtube Video ID or URL"
                    }
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onMouseDown={clearError}
                    className={cn(
                        "w-full focus:text-amber-600 focus-visible:ring-pink-500",
                        errorStyles
                    )}
                    required
                />

                <SubmitButton
                    text="Create Blog Post"
                    loadingText="Creating Blog Post"
                    loading={loading}
                />
            </form>
        </div>
    )
}

export default GenerateBlogComponent