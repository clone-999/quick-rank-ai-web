import prisma from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

const SocialMediapage = async () => {
  const user = await currentUser();

  if (!user || !user?.primaryEmailAddress?.emailAddress) {
    return redirect("/sign-in");
  }

  const userDB = await prisma.user.findFirst({
      where: {
        email: user?.primaryEmailAddress?.emailAddress,
      },
      select: {
        savedPosts: true,
      },
  });
  
  if (!userDB) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
            Social Media Posts
        </div>
    </div>
  )
}

export default SocialMediapage