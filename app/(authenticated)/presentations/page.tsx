import prisma from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'
import PresentationsWrapper from './PresentationsWrapper';

const PresentationsPage = async () => {
  const user = await currentUser();

  if (!user || !user?.primaryEmailAddress?.emailAddress) {
    return redirect("/sign-in");
  }

  const userDB = await prisma.user.findFirst({
      where: {
        email: user?.primaryEmailAddress?.emailAddress,
      },
      select: {
        id: true,
        email: false,
      },
  });
  
  if (!userDB) {
    return redirect("/sign-in");
  }

  const presentations = await prisma.generatedPowerpoints.findMany({
    where: {
      ownerId: userDB.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
        <PresentationsWrapper presentations={presentations} />
      </div>
    </div>
  )
}

export default PresentationsPage