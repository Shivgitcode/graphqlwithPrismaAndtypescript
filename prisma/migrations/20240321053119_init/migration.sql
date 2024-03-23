-- CreateTable
CREATE TABLE "Cart" (
    "id" SERIAL NOT NULL,
    "item" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);
