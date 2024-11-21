import { extractYouTubeID } from "@/lib/utils";
import ClientYouTubePlayer from "@/components/custom/client-youtube-player";
import prisma from "@/lib/prisma";

export default async function BlogPostSingleRoute({
  params,
  children,
}: {
  readonly params: any;
  readonly children: React.ReactNode;
}) {
  const { videoId } = await params;
  const data = await prisma.posts.findFirst({
    where: {
      videoId: videoId,
    },
  });
  if (data === null) return <p>No Items Found</p>;
  const videoYTId = extractYouTubeID(data.videoId);

  return (
    <div className="flex flex-1 flex-col gap-4 p-8 m-5 min-h-[100vh] rounded-xl bg-muted/50 md:min-h-min">
      <div className="h-full grid gap-4 grid-cols-5 p-4">
        <div className="col-span-3">{children}</div>
        <div className="col-span-2">
          <ClientYouTubePlayer videoId={videoYTId as string} />
        </div>
      </div>
    </div>
  );
}