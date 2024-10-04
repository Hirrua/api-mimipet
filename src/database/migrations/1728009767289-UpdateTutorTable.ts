import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class UpdateTutorTable1728009767289 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns(
      "tutores", [
      new TableColumn({
        name: "celular",
        type: "varchar",
        length: "11",
        isNullable: true
      }),
      new TableColumn({
        name: "senha",
        type: "varchar",
        length: "50",
        isNullable: false
      })
    ])
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns("tutores", ["celular", "senha"])
  }

}
