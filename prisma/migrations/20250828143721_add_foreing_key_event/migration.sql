/*
  Warnings:

  - You are about to drop the column `event_id` on the `sector` table. All the data in the column will be lost.
  - Added the required column `sector_id` to the `event` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `sector` DROP FOREIGN KEY `sector_event_id_fkey`;

-- DropIndex
DROP INDEX `sector_event_id_fkey` ON `sector`;

-- AlterTable
ALTER TABLE `event` ADD COLUMN `sector_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `sector` DROP COLUMN `event_id`;

-- AddForeignKey
ALTER TABLE `event` ADD CONSTRAINT `event_sector_id_fkey` FOREIGN KEY (`sector_id`) REFERENCES `sector`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
