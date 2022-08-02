-- CreateTable
CREATE TABLE "campeonato" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "competicao" TEXT NOT NULL,
    "atleta" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "unidade" TEXT NOT NULL
);
