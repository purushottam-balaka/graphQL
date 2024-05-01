import { MigrationInterface, QueryRunner } from "typeorm";

export class Second1714026712531 implements MigrationInterface {
    name = 'Second1714026712531'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "my_local"."employee" ADD "phoneNumber" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "my_local"."employee" DROP COLUMN "phoneNumber"`);
    }

}
