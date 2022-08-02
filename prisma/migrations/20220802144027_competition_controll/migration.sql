-- CreateTable
CREATE TABLE "competicao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome_da_competicao" TEXT NOT NULL,
    "em_progresso" BOOLEAN NOT NULL DEFAULT true
);

-- CreateIndex
CREATE UNIQUE INDEX "competicao_nome_da_competicao_key" ON "competicao"("nome_da_competicao");
