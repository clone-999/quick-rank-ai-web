"use server";

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

const getAuthStatus = async () => {
    const user = await currentUser();

    if (!user?.id || !user?.primaryEmailAddress?.emailAddress) {
        return { error: "User not found" };
    }

    let clerkId = user.id;

    const existingUser = await prisma.user.findFirst({
        where: {
            clerkId,
        },
    });

    console.log("existingUser", existingUser);

    if (!existingUser) {
        await prisma.user.create({
            data: {
                clerkId,
                email: user.primaryEmailAddress.emailAddress,
                firstName: `${user.firstName}`,
                lastName: `${user.lastName}`,
                image: user.imageUrl,
                isSubscribed: false,
            },
        });
    }

    return { success: true };
};

export default getAuthStatus;
