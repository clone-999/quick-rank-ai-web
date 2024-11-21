"use client"

import RenderLoadingAnimation from "@/components/RenderLoadingAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AnimatePresence } from "framer-motion";
import { VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { generateChapters } from "./actions";
import SubmissionButton from "@/components/SubmissionButton";

const GenerateChapterComponent = () => {
    const router = useRouter();
    const [link, setLink] = useState<string | null>("");
    const [isValid, setIsValid] = useState<boolean>(false);
    // eslint-disable-next-line
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const validateYouTubeUrl = (url: string) => {
        const pattern =
        /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        return pattern.test(url);
    };

    const getVideoId = (link: string) => {
        const match = link.match(
        /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
        );
        return match ? match[1] : null;
    };

    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const link = e.target.value.trim();

        if (!link) {
            setError(null);
            setIsValid(false);
            return;
        }

        setLink(link);

        const videoId = getVideoId(link);

        if (validateYouTubeUrl(link) && videoId) {
            setError(null);
            setIsValid(true);
        } else {
            setError("Invalid YouTube URL");
            setIsValid(false);
        }
    };

    const handleSubmit = async (formData: FormData) => {
        if (!link) {
            setError("Please enter a valid YouTube URL");
            return;
        }

        if (!isValid) {
            setError("Invalid YouTube URL");
            return;
        }

        setError(null);

        const videoId = getVideoId(link || "");

        if (!videoId) {
            setError("Invalid YouTube URL");
            return;
        }

        setIsLoading(true);

        const result = await generateChapters(formData);
        if (result.success) {
            router.push("/chapters");
        } else {
            router.push(`/error?error=${result.error}`);
        }
    }

    return(
        <>
            <Card className="mx-auto w-full">
                <CardHeader>
                    <CardTitle className="text-left text-2xl font-bold">
                        Generate timestamps for your YouTube videos
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="mt-4">
                        <Card className="p-8 shadow-xl bg-zinc-800 backdrop-blur-sm border-0">
                            {isValid ? (
                                <div className="mb-8 aspect-video rounded-xl overflow-hidden shadow-lg">
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${getVideoId(link || "")}`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="YouTube video player"
                                    />
                                </div>
                                ) : (
                                <div className="mb-8 aspect-video bg-gradient-to-br from-slate-100 to-slate-50 rounded-xl flex flex-col items-center justify-center text-slate-500 shadow-inner">
                                    <VideoIcon className="w-16 h-16 mb-4 text-slate-500" />
                                    <p>Enter a YouTube URL to get started.</p>
                                </div>
                            )}
                        
                            <form action={handleSubmit}>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Input
                                        type="url"
                                        placeholder="paste YouTube URL here"
                                        name="link"
                                        value={`${link}`}
                                        onChange={handleUrlChange}
                                        className="flex-1 h-12 px-4 rounded-xl border-slate-200 focus:border-violet-500 focus:ring-violet-500"
                                        disabled={isLoading}
                                        aria-label="YouTube URL"
                                    />
                                    <SubmissionButton text="Generate Timestamps" />
                                </div>
                                
                                <p className="text-left text-sm text-slate-500 mt-4">
                                    Supported formats: YouTube video URLs (e.g,
                                    https://youtube.com/watch?v=...)
                                </p>
                            </form>
                        </Card>
                    </div>
                </CardContent>
            </Card>

            <AnimatePresence>
                {isLoading && <RenderLoadingAnimation />}
          </AnimatePresence>
        </>
    )
}

export default GenerateChapterComponent