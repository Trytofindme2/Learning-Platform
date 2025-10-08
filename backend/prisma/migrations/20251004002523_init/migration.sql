/*
  Warnings:

  - A unique constraint covering the columns `[googleId]` on the table `Student` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `student` ADD COLUMN `birthday` DATETIME(3) NULL,
    ADD COLUMN `googleId` VARCHAR(191) NULL,
    MODIFY `password` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Student_googleId_key` ON `Student`(`googleId`);
