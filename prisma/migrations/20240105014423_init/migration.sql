-- CreateTable
CREATE TABLE "Session" (
    "id" STRING NOT NULL,
    "shop" STRING NOT NULL,
    "state" STRING NOT NULL,
    "isOnline" BOOL NOT NULL DEFAULT false,
    "scope" STRING,
    "expires" TIMESTAMP(3),
    "accessToken" STRING NOT NULL,
    "userId" INT8,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);
