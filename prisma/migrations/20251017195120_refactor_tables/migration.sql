/*
  Warnings:

  - You are about to drop the column `sector_id` on the `event` table. All the data in the column will be lost.
  - You are about to drop the column `quantity_total` on the `sector` table. All the data in the column will be lost.
  - You are about to drop the column `checkin` on the `ticket` table. All the data in the column will be lost.
  - You are about to drop the column `price_pay` on the `ticket` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `ticket` table. All the data in the column will be lost.
  - Added the required column `date_end` to the `event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `capacity` to the `sector` table without a default value. This is not possible if the table is not empty.
  - Added the required column `event_id` to the `sector` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service_charge` to the `sector` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code_qr` to the `ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sale_id` to the `ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `ticket` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `event` DROP FOREIGN KEY `event_sector_id_fkey`;

-- DropForeignKey
ALTER TABLE `ticket` DROP FOREIGN KEY `ticket_sector_id_fkey`;

-- DropForeignKey
ALTER TABLE `ticket` DROP FOREIGN KEY `ticket_user_id_fkey`;

-- DropIndex
DROP INDEX `event_sector_id_fkey` ON `event`;

-- DropIndex
DROP INDEX `ticket_sector_id_fkey` ON `ticket`;

-- DropIndex
DROP INDEX `ticket_user_id_fkey` ON `ticket`;

-- AlterTable
ALTER TABLE `event` DROP COLUMN `sector_id`,
    ADD COLUMN `date_end` DATETIME(3) NOT NULL,
    MODIFY `status` ENUM('CANCELED', 'EXHAUSTED', 'PUBLISHED', 'FINISHED', 'DRAFT') NOT NULL;

-- AlterTable
ALTER TABLE `sector` DROP COLUMN `quantity_total`,
    ADD COLUMN `capacity` INTEGER NOT NULL,
    ADD COLUMN `event_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `service_charge` DECIMAL(65, 30) NOT NULL;

-- AlterTable
ALTER TABLE `ticket` DROP COLUMN `checkin`,
    DROP COLUMN `price_pay`,
    DROP COLUMN `user_id`,
    ADD COLUMN `code_qr` VARCHAR(191) NOT NULL,
    ADD COLUMN `sale_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `status` ENUM('AVAILABLE', 'SOLD', 'CHECKIN') NOT NULL;

-- CreateTable
CREATE TABLE `artist` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(255) NULL,
    `contact` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `coupons` (
    `id` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `type` ENUM('PERCENTAGE', 'FIXED') NOT NULL,
    `price` DECIMAL(65, 30) NOT NULL,
    `expiration_date` DATETIME(3) NOT NULL,
    `usage_limit` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sale` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `event_id` VARCHAR(191) NOT NULL,
    `coupon_id` VARCHAR(191) NULL,
    `sale_date` DATETIME(3) NOT NULL,
    `price_total` DECIMAL(65, 30) NOT NULL,
    `payment_method` ENUM('CARD', 'PIX') NOT NULL,
    `status_payment` ENUM('PENDENT', 'PAID', 'CANCELED') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `event_artist` (
    `event_id` VARCHAR(191) NOT NULL,
    `artist_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`artist_id`, `event_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `sector` ADD CONSTRAINT `sector_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `event`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ticket` ADD CONSTRAINT `ticket_sector_id_fkey` FOREIGN KEY (`sector_id`) REFERENCES `sector`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ticket` ADD CONSTRAINT `ticket_sale_id_fkey` FOREIGN KEY (`sale_id`) REFERENCES `sale`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sale` ADD CONSTRAINT `sale_coupon_id_fkey` FOREIGN KEY (`coupon_id`) REFERENCES `coupons`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sale` ADD CONSTRAINT `sale_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `event`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sale` ADD CONSTRAINT `sale_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `event_artist` ADD CONSTRAINT `event_artist_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `event`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `event_artist` ADD CONSTRAINT `event_artist_artist_id_fkey` FOREIGN KEY (`artist_id`) REFERENCES `artist`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
