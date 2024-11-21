"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function BlogPostCardForm({
    item,
    className,
  }: {
    readonly item: any;
    readonly className?: string;
  }) {

    return (
        <Card className={cn("mb-8 relative h-auto", className)}>
            <CardHeader>
                <CardTitle>Video Blog Post {item} </CardTitle>
            </CardHeader>
        </Card>
    )
  }