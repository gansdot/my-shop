
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client.js';

@Injectable()
export class DatabaseService
    extends PrismaClient
    implements OnModuleInit, OnModuleDestroy {

    constructor() {
        const connectionString = process.env.DATABASE_URL!;
        const adapter = new PrismaPg({
            connectionString: connectionString,
        });


        if (!connectionString) {
            throw new Error('DATABASE_URL environment variable is missing');
        }

        super({ adapter });
    }

    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}
