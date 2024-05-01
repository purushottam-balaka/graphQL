import { MigrationInterface, QueryRunner } from "typeorm";

export class Third1714030763774 implements MigrationInterface {
    name = 'Third1714030763774'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS "my_local"`)
        await queryRunner.query(`CREATE TABLE "my_local"."customer" ("id" SERIAL NOT NULL, "PrimaryNumber" integer NOT NULL, "name" character varying NOT NULL, "gender" character varying NOT NULL, "address" character varying NOT NULL, "phoneNumber" integer NOT NULL, CONSTRAINT "UQ_0cbb3691edb23899cd08a60058b" UNIQUE ("PrimaryNumber"), CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "my_local"."employee" ADD "cidId" integer`);
        await queryRunner.query(`ALTER TABLE "my_local"."employee" ADD CONSTRAINT "UQ_6cf960618c7c7933aade341c471" UNIQUE ("cidId")`);
        await queryRunner.query(`ALTER TABLE "my_local"."employee" ADD CONSTRAINT "FK_6cf960618c7c7933aade341c471" FOREIGN KEY ("cidId") REFERENCES "my_local"."company"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "my_local"."employee" DROP CONSTRAINT "FK_6cf960618c7c7933aade341c471"`);
        await queryRunner.query(`ALTER TABLE "my_local"."employee" DROP CONSTRAINT "UQ_6cf960618c7c7933aade341c471"`);
        await queryRunner.query(`ALTER TABLE "my_local"."employee" DROP COLUMN "cidId"`);
        await queryRunner.query(`DROP TABLE "my_local"."customer"`);
    }

}
