import { MigrationInterface, QueryRunner } from "typeorm";

export class DeletedAColumn1714030923421 implements MigrationInterface {
    name = 'DeletedAColumn1714030923421'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "my_local"."customer" DROP COLUMN "phoneNumber"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "my_local"."customer" ADD "phoneNumber" integer NOT NULL`);
    }

}
