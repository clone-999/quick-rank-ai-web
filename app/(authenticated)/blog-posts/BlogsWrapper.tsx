"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Posts } from "@prisma/client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FaSadTear } from "react-icons/fa";

const ITEMS_PER_PAGE = 9;

interface BlogsWrapperProps {
    user: {
      savedPosts: Posts[];
    };
}

const BlogsWrapper = ({ user }: BlogsWrapperProps) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages = Math.ceil(user.savedPosts.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentPosts = user.savedPosts.slice(startIndex, endIndex);

    return (
        <Card className="mx-auto w-full">
            <CardHeader>
                <CardTitle className="text-left text-2xl font-bold">
                    My Generated blog posts for YouTube videos
                </CardTitle>
            </CardHeader>

            <CardContent>
                {user?.savedPosts.length === 0 && (
                    <div className="flex flex-col gap-4 mt-12 text-center h-full pt-10 pb-16">
                        <h1 className="text-2xl font-bold flex items-center justify-center gap-2 text-gray-500">
                            No blog posts found <FaSadTear className="w-10 h-10" />
                        </h1>
                        <p className="text-gray-500">
                            You do not have any blog posts saved. Try generating some blog posts for
                            a YouTube video.
                        </p>
                    </div>
                )}

                {user?.savedPosts && user.savedPosts.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentPosts.map((post: Posts) => (
                            <div key={post.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                    {post.content.split("\n").slice(1).join("\n")}
                                </p>
                                <Link
                                    href={`/posts/${post.id}`}
                                    className="text-purple-600 hover:text-purple-800 font-medium flex gap-1 items-center"
                                >
                                    Read more <ArrowRight className="w-5 h-5 pt-1" />
                                </Link>
                            </div>
                        ))}
                    </div>
                )}

                {user?.savedPosts.length > 0 && (
                    <Pagination className="mt-8">
                        <PaginationContent>
                            <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                                className={
                                currentPage === 1 ? "pointer-events-none opacity-50" : ""
                                }
                            />
                            </PaginationItem>
                            {[...Array(totalPages)].map((_, index) => (
                            <PaginationItem key={index}>
                                <PaginationLink
                                href="#"
                                onClick={() => setCurrentPage(index + 1)}
                                >
                                {index + 1}
                                </PaginationLink>
                            </PaginationItem>
                            ))}
                            <PaginationItem>
                                <PaginationNext
                                    href="#"
                                    onClick={() =>
                                    setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                                    }
                                    className={
                                    currentPage === totalPages
                                        ? "pointer-events-none opacity-50"
                                        : ""
                                    }
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                )}
            </CardContent>
        </Card>
    )
}

export default BlogsWrapper;

