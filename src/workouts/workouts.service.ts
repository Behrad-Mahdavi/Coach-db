import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WorkoutsService {
    constructor(private prisma: PrismaService) { }

    async findAll() {
        return this.prisma.program.findMany({
            include: {
                workouts: {
                    include: {
                        exercises: {
                            include: {
                                movement: true,
                            },
                        },
                    },
                },
            },
        });
    }

    async findOne(id: number) {
        return this.prisma.program.findUnique({
            where: { id },
            include: {
                workouts: {
                    include: {
                        exercises: {
                            include: {
                                movement: true,
                            },
                        },
                    },
                },
            },
        });
    }

    async getCatalog() {
        return this.prisma.movementCatalog.findMany({
            take: 10, // Just return first 10 for health check
            orderBy: { id: 'asc' }
        });
    }
}
