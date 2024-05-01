import { MigrationInterface, QueryRunner } from "typeorm";

export class Agent1714480926452 implements MigrationInterface {
    name = 'Agent1714480926452'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "my_local"."agent" DROP COLUMN "address"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "my_local"."agent" ADD "address" character varying`);
    }

}
