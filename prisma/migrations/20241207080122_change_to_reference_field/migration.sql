/*
  Warnings:

  - You are about to drop the column `book` on the `Devotional` table. All the data in the column will be lost.
  - You are about to drop the column `chapter` on the `Devotional` table. All the data in the column will be lost.
  - You are about to drop the column `verse` on the `Devotional` table. All the data in the column will be lost.
  - Added the required column `reference` to the `Devotional` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Devotional" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "reflection" TEXT,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" DATETIME,
    CONSTRAINT "Devotional_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Devotional" ("completed", "completedAt", "content", "createdAt", "id", "reflection", "userId") SELECT "completed", "completedAt", "content", "createdAt", "id", "reflection", "userId" FROM "Devotional";
DROP TABLE "Devotional";
ALTER TABLE "new_Devotional" RENAME TO "Devotional";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
