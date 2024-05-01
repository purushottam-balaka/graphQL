import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstMigration1714025810206 implements MigrationInterface {
    name = 'FirstMigration1714025810206'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS "my_local"`)
        await queryRunner.query(`CREATE TABLE "my_local"."employee" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "gender" character varying NOT NULL, CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "my_local"."user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "my_local"."company" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "address" character varying NOT NULL, CONSTRAINT "PK_056f7854a7afdba7cbd6d45fc20" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "my_local"."company"`);
        await queryRunner.query(`DROP TABLE "my_local"."user"`);
        await queryRunner.query(`DROP TABLE "my_local"."employee"`);
    }

}
