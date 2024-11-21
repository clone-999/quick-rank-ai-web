import prisma from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'
import ChaptersWrapper from './ChaptersWrapper';

const Chapterspage = async () => {
  const user = await currentUser();

  if (!user || !user?.primaryEmailAddress?.emailAddress) {
    return redirect("/sign-in");
  }

  const userDB = await prisma.user.findFirst({
      where: {
        email: user?.primaryEmailAddress?.emailAddress,
      },
      select: {
        savedChapters: true,
      },
  });
  
  if (!userDB) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
        <ChaptersWrapper user={userDB && {
          savedChapters: userDB?.savedChapters
        }} />
      </div>
    </div>
  )
}

export default Chapterspage