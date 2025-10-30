/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `coupons` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `coupons_code_key` ON `coupons`(`code`);
