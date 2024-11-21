-- CreateTable
CREATE TABLE "GeneratedPowerpoints" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GeneratedPowerpoints_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GeneratedPowerpoints" ADD CONSTRAINT "GeneratedPowerpoints_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
