import { PrismaService } from '../prisma/prisma.service';
export declare class WorkoutsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<({
        workouts: ({
            exercises: ({
                movement: {
                    id: number;
                    nameFa: string;
                    nameEn: string | null;
                    muscleGroup: import(".prisma/client").$Enums.MuscleGroup;
                    isCompound: boolean;
                    description: string | null;
                    imageUrl: string | null;
                    videoUrl: string | null;
                    createdAt: Date;
                };
            } & {
                id: number;
                orderIndex: number;
                suggestedSets: number;
                suggestedReps: number;
                suggestedRestSec: number;
                supersetWith: number | null;
                notes: string | null;
                movementId: number;
                workoutId: number;
            })[];
        } & {
            id: number;
            dayName: string;
            orderIndex: number;
            programId: number;
        })[];
    } & {
        id: number;
        description: string | null;
        createdAt: Date;
        name: string;
        coachId: string;
        updatedAt: Date;
        isActive: boolean;
    })[]>;
    findOne(id: number): Promise<({
        workouts: ({
            exercises: ({
                movement: {
                    id: number;
                    nameFa: string;
                    nameEn: string | null;
                    muscleGroup: import(".prisma/client").$Enums.MuscleGroup;
                    isCompound: boolean;
                    description: string | null;
                    imageUrl: string | null;
                    videoUrl: string | null;
                    createdAt: Date;
                };
            } & {
                id: number;
                orderIndex: number;
                suggestedSets: number;
                suggestedReps: number;
                suggestedRestSec: number;
                supersetWith: number | null;
                notes: string | null;
                movementId: number;
                workoutId: number;
            })[];
        } & {
            id: number;
            dayName: string;
            orderIndex: number;
            programId: number;
        })[];
    } & {
        id: number;
        description: string | null;
        createdAt: Date;
        name: string;
        coachId: string;
        updatedAt: Date;
        isActive: boolean;
    }) | null>;
    getCatalog(): Promise<{
        id: number;
        nameFa: string;
        nameEn: string | null;
        muscleGroup: import(".prisma/client").$Enums.MuscleGroup;
        isCompound: boolean;
        description: string | null;
        imageUrl: string | null;
        videoUrl: string | null;
        createdAt: Date;
    }[]>;
}
