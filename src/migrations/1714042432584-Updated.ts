import { MigrationInterface, QueryRunner } from "typeorm";

export class Updated1714042432584 implements MigrationInterface {
    name = 'Updated1714042432584'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "my_local"."employee" DROP CONSTRAINT "FK_6cf960618c7c7933aade341c471"`);
        await queryRunner.query(`ALTER TABLE "my_local"."employee" DROP CONSTRAINT "UQ_6cf960618c7c7933aade341c471"`);
        await queryRunner.query(`ALTER TABLE "my_local"."employee" ADD CONSTRAINT "FK_6cf960618c7c7933aade341c471" FOREIGN KEY ("cidId") REFERENCES "my_local"."company"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "my_local"."employee" DROP CONSTRAINT "FK_6cf960618c7c7933aade341c471"`);
        await queryRunner.query(`ALTER TABLE "my_local"."employee" ADD CONSTRAINT "UQ_6cf960618c7c7933aade341c471" UNIQUE ("cidId")`);
        await queryRunner.query(`ALTER TABLE "my_local"."employee" ADD CONSTRAINT "FK_6cf960618c7c7933aade341c471" FOREIGN KEY ("cidId") REFERENCES "my_local"."company"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
