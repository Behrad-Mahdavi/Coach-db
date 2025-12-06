import { PrismaClient, MuscleGroup, UserRole } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting seed...');

    // 1. Seed Movements Catalog (100+ items)
    console.log('🏋️ Seeding movements catalog...');

    const movements = [
        // --- CHEST ---
        { nameFa: 'پرس سینه هالتر', nameEn: 'Barbell Bench Press', muscleGroup: MuscleGroup.CHEST, isCompound: true },
        { nameFa: 'پرس سینه دمبل', nameEn: 'Dumbbell Bench Press', muscleGroup: MuscleGroup.CHEST, isCompound: true },
        { nameFa: 'پرس بالا سینه هالتر', nameEn: 'Incline Barbell Bench Press', muscleGroup: MuscleGroup.CHEST, isCompound: true },
        { nameFa: 'پرس بالا سینه دمبل', nameEn: 'Incline Dumbbell Bench Press', muscleGroup: MuscleGroup.CHEST, isCompound: true },
        { nameFa: 'پرس زیر سینه هالتر', nameEn: 'Decline Barbell Bench Press', muscleGroup: MuscleGroup.CHEST, isCompound: true },
        { nameFa: 'پرس زیر سینه دمبل', nameEn: 'Decline Dumbbell Bench Press', muscleGroup: MuscleGroup.CHEST, isCompound: true },
        { nameFa: 'قفسه سینه دمبل', nameEn: 'Dumbbell Flyes', muscleGroup: MuscleGroup.CHEST, isCompound: false },
        { nameFa: 'قفسه بالا سینه دمبل', nameEn: 'Incline Dumbbell Flyes', muscleGroup: MuscleGroup.CHEST, isCompound: false },
        { nameFa: 'کراس اور سیم‌کش', nameEn: 'Cable Crossover', muscleGroup: MuscleGroup.CHEST, isCompound: false },
        { nameFa: 'پوش آپ (شنا)', nameEn: 'Push Up', muscleGroup: MuscleGroup.CHEST, isCompound: true },
        { nameFa: 'پک دک (پروانه دستگاه)', nameEn: 'Pec Deck Machine', muscleGroup: MuscleGroup.CHEST, isCompound: false },
        { nameFa: 'پرس سینه دستگاه', nameEn: 'Chest Press Machine', muscleGroup: MuscleGroup.CHEST, isCompound: true },
        { nameFa: 'دیپ سینه', nameEn: 'Chest Dips', muscleGroup: MuscleGroup.CHEST, isCompound: true },
        { nameFa: 'پول‌اور دمبل', nameEn: 'Dumbbell Pullover', muscleGroup: MuscleGroup.CHEST, isCompound: false },
        { nameFa: 'فلای سیم‌کش ایستاده', nameEn: 'Standing Cable Fly', muscleGroup: MuscleGroup.CHEST, isCompound: false },

        // --- BACK ---
        { nameFa: 'بارفیکس', nameEn: 'Pull Up', muscleGroup: MuscleGroup.BACK, isCompound: true },
        { nameFa: 'زیربغل هالتر خم', nameEn: 'Barbell Bent Over Row', muscleGroup: MuscleGroup.BACK, isCompound: true },
        { nameFa: 'زیربغل دمبل تک خم', nameEn: 'One Arm Dumbbell Row', muscleGroup: MuscleGroup.BACK, isCompound: false },
        { nameFa: 'زیربغل سیم‌کش از بالا', nameEn: 'Lat Pulldown', muscleGroup: MuscleGroup.BACK, isCompound: true },
        { nameFa: 'زیربغل قایقی', nameEn: 'Seated Cable Row', muscleGroup: MuscleGroup.BACK, isCompound: true },
        { nameFa: 'ددلیفت', nameEn: 'Deadlift', muscleGroup: MuscleGroup.BACK, isCompound: true },
        { nameFa: 'تی بار', nameEn: 'T-Bar Row', muscleGroup: MuscleGroup.BACK, isCompound: true },
        { nameFa: 'زیربغل سیم‌کش دست صاف', nameEn: 'Straight Arm Pulldown', muscleGroup: MuscleGroup.BACK, isCompound: false },
        { nameFa: 'فیس پول', nameEn: 'Face Pull', muscleGroup: MuscleGroup.BACK, isCompound: false },
        { nameFa: 'شراگ هالتر', nameEn: 'Barbell Shrug', muscleGroup: MuscleGroup.BACK, isCompound: false },
        { nameFa: 'شراگ دمبل', nameEn: 'Dumbbell Shrug', muscleGroup: MuscleGroup.BACK, isCompound: false },
        { nameFa: 'هایپر اکستنشن (فیله کمر)', nameEn: 'Hyperextension', muscleGroup: MuscleGroup.BACK, isCompound: false },
        { nameFa: 'زیربغل دستگاه اچ', nameEn: 'Machine High Row', muscleGroup: MuscleGroup.BACK, isCompound: true },
        { nameFa: 'زیربغل سیم‌کش مچ برعکس', nameEn: 'Reverse Grip Lat Pulldown', muscleGroup: MuscleGroup.BACK, isCompound: true },
        { nameFa: 'چین آپ', nameEn: 'Chin Up', muscleGroup: MuscleGroup.BACK, isCompound: true },

        // --- LEGS (QUADS, HAMSTRINGS, GLUTES) ---
        { nameFa: 'اسکات هالتر', nameEn: 'Barbell Squat', muscleGroup: MuscleGroup.LEGS, isCompound: true },
        { nameFa: 'اسکات از جلو', nameEn: 'Front Squat', muscleGroup: MuscleGroup.LEGS, isCompound: true },
        { nameFa: 'پرس پا', nameEn: 'Leg Press', muscleGroup: MuscleGroup.LEGS, isCompound: true },
        { nameFa: 'لانگز دمبل', nameEn: 'Dumbbell Lunges', muscleGroup: MuscleGroup.LEGS, isCompound: true },
        { nameFa: 'لانگز راه رفتنی', nameEn: 'Walking Lunges', muscleGroup: MuscleGroup.LEGS, isCompound: true },
        { nameFa: 'جلو ران دستگاه', nameEn: 'Leg Extension', muscleGroup: MuscleGroup.LEGS, isCompound: false },
        { nameFa: 'پشت ران دستگاه خوابیده', nameEn: 'Lying Leg Curl', muscleGroup: MuscleGroup.LEGS, isCompound: false },
        { nameFa: 'پشت ران دستگاه نشسته', nameEn: 'Seated Leg Curl', muscleGroup: MuscleGroup.LEGS, isCompound: false },
        { nameFa: 'ددلیفت رومانیایی', nameEn: 'Romanian Deadlift', muscleGroup: MuscleGroup.LEGS, isCompound: true },
        { nameFa: 'ددلیفت پا صاف', nameEn: 'Stiff Leg Deadlift', muscleGroup: MuscleGroup.LEGS, isCompound: true },
        { nameFa: 'هاک اسکات', nameEn: 'Hack Squat', muscleGroup: MuscleGroup.LEGS, isCompound: true },
        { nameFa: 'هیپ تراست', nameEn: 'Hip Thrust', muscleGroup: MuscleGroup.GLUTES, isCompound: true },
        { nameFa: 'کیک بک سیم‌کش', nameEn: 'Cable Kickback', muscleGroup: MuscleGroup.GLUTES, isCompound: false },
        { nameFa: 'گابلت اسکات', nameEn: 'Goblet Squat', muscleGroup: MuscleGroup.LEGS, isCompound: true },
        { nameFa: 'اسکات بلغاری', nameEn: 'Bulgarian Split Squat', muscleGroup: MuscleGroup.LEGS, isCompound: true },
        { nameFa: 'استپ آپ', nameEn: 'Step Up', muscleGroup: MuscleGroup.LEGS, isCompound: true },
        { nameFa: 'ساق پا ایستاده', nameEn: 'Standing Calf Raise', muscleGroup: MuscleGroup.CALVES, isCompound: false },
        { nameFa: 'ساق پا نشسته', nameEn: 'Seated Calf Raise', muscleGroup: MuscleGroup.CALVES, isCompound: false },
        { nameFa: 'ساق پا دستگاه پرس', nameEn: 'Leg Press Calf Raise', muscleGroup: MuscleGroup.CALVES, isCompound: false },

        // --- SHOULDERS ---
        { nameFa: 'پرس سرشانه هالتر ایستاده', nameEn: 'Overhead Press', muscleGroup: MuscleGroup.SHOULDERS, isCompound: true },
        { nameFa: 'پرس سرشانه هالتر نشسته', nameEn: 'Seated Barbell Press', muscleGroup: MuscleGroup.SHOULDERS, isCompound: true },
        { nameFa: 'پرس سرشانه دمبل', nameEn: 'Dumbbell Shoulder Press', muscleGroup: MuscleGroup.SHOULDERS, isCompound: true },
        { nameFa: 'نشر جانب دمبل', nameEn: 'Dumbbell Lateral Raise', muscleGroup: MuscleGroup.SHOULDERS, isCompound: false },
        { nameFa: 'نشر جانب سیم‌کش', nameEn: 'Cable Lateral Raise', muscleGroup: MuscleGroup.SHOULDERS, isCompound: false },
        { nameFa: 'نشر جلو دمبل', nameEn: 'Dumbbell Front Raise', muscleGroup: MuscleGroup.SHOULDERS, isCompound: false },
        { nameFa: 'نشر خم دمبل', nameEn: 'Bent Over Lateral Raise', muscleGroup: MuscleGroup.SHOULDERS, isCompound: false },
        { nameFa: 'نشر خم سیم‌کش', nameEn: 'Cable Rear Delt Fly', muscleGroup: MuscleGroup.SHOULDERS, isCompound: false },
        { nameFa: 'پک دک معکوس', nameEn: 'Reverse Pec Deck', muscleGroup: MuscleGroup.SHOULDERS, isCompound: false },
        { nameFa: 'پرس آرنولدی', nameEn: 'Arnold Press', muscleGroup: MuscleGroup.SHOULDERS, isCompound: true },
        { nameFa: 'کول هالتر', nameEn: 'Upright Row', muscleGroup: MuscleGroup.SHOULDERS, isCompound: true },

        // --- BICEPS ---
        { nameFa: 'جلوبازو هالتر ایستاده', nameEn: 'Barbell Curl', muscleGroup: MuscleGroup.BICEPS, isCompound: false },
        { nameFa: 'جلوبازو دمبل ایستاده', nameEn: 'Standing Dumbbell Curl', muscleGroup: MuscleGroup.BICEPS, isCompound: false },
        { nameFa: 'جلوبازو دمبل نشسته', nameEn: 'Seated Dumbbell Curl', muscleGroup: MuscleGroup.BICEPS, isCompound: false },
        { nameFa: 'جلوبازو چکشی', nameEn: 'Hammer Curl', muscleGroup: MuscleGroup.BICEPS, isCompound: false },
        { nameFa: 'جلوبازو لاری', nameEn: 'Preacher Curl', muscleGroup: MuscleGroup.BICEPS, isCompound: false },
        { nameFa: 'جلوبازو سیم‌کش', nameEn: 'Cable Curl', muscleGroup: MuscleGroup.BICEPS, isCompound: false },
        { nameFa: 'جلوبازو دمبل تمرکزی', nameEn: 'Concentration Curl', muscleGroup: MuscleGroup.BICEPS, isCompound: false },
        { nameFa: 'جلوبازو دمبل روی میز شیب‌دار', nameEn: 'Incline Dumbbell Curl', muscleGroup: MuscleGroup.BICEPS, isCompound: false },
        { nameFa: 'جلوبازو طنابی', nameEn: 'Rope Hammer Curl', muscleGroup: MuscleGroup.BICEPS, isCompound: false },

        // --- TRICEPS ---
        { nameFa: 'پشت بازو سیم‌کش', nameEn: 'Tricep Pushdown', muscleGroup: MuscleGroup.TRICEPS, isCompound: false },
        { nameFa: 'پشت بازو طنابی', nameEn: 'Rope Pushdown', muscleGroup: MuscleGroup.TRICEPS, isCompound: false },
        { nameFa: 'پشت بازو هالتر خوابیده', nameEn: 'Skullcrushers', muscleGroup: MuscleGroup.TRICEPS, isCompound: false },
        { nameFa: 'پشت بازو دمبل تک دست', nameEn: 'One Arm Dumbbell Extension', muscleGroup: MuscleGroup.TRICEPS, isCompound: false },
        { nameFa: 'پشت بازو کیک بک', nameEn: 'Tricep Kickback', muscleGroup: MuscleGroup.TRICEPS, isCompound: false },
        { nameFa: 'دیپ نیمکت', nameEn: 'Bench Dips', muscleGroup: MuscleGroup.TRICEPS, isCompound: true },
        { nameFa: 'پرس سینه دست جمع', nameEn: 'Close Grip Bench Press', muscleGroup: MuscleGroup.TRICEPS, isCompound: true },
        { nameFa: 'پشت بازو سیم‌کش از پشت سر', nameEn: 'Overhead Cable Extension', muscleGroup: MuscleGroup.TRICEPS, isCompound: false },

        // --- ABS / CORE ---
        { nameFa: 'کرانچ', nameEn: 'Crunch', muscleGroup: MuscleGroup.ABS, isCompound: false },
        { nameFa: 'کرانچ سیم‌کش', nameEn: 'Cable Crunch', muscleGroup: MuscleGroup.ABS, isCompound: false },
        { nameFa: 'زیرشکم خلبانی', nameEn: 'Hanging Leg Raise', muscleGroup: MuscleGroup.ABS, isCompound: false },
        { nameFa: 'پلانک', nameEn: 'Plank', muscleGroup: MuscleGroup.ABS, isCompound: false },
        { nameFa: 'روسی', nameEn: 'Russian Twist', muscleGroup: MuscleGroup.ABS, isCompound: false },
        { nameFa: 'چرخ شکم', nameEn: 'Ab Wheel Rollout', muscleGroup: MuscleGroup.ABS, isCompound: false },
        { nameFa: 'دراز نشست', nameEn: 'Sit Up', muscleGroup: MuscleGroup.ABS, isCompound: false },

        // --- CARDIO ---
        { nameFa: 'دویدن روی تردمیل', nameEn: 'Treadmill Running', muscleGroup: MuscleGroup.CARDIO, isCompound: true },
        { nameFa: 'دوچرخه ثابت', nameEn: 'Stationary Bike', muscleGroup: MuscleGroup.CARDIO, isCompound: true },
        { nameFa: 'الپتیکال', nameEn: 'Elliptical', muscleGroup: MuscleGroup.CARDIO, isCompound: true },
        { nameFa: 'روئینگ', nameEn: 'Rowing Machine', muscleGroup: MuscleGroup.CARDIO, isCompound: true },
        { nameFa: 'طناب زدن', nameEn: 'Jump Rope', muscleGroup: MuscleGroup.CARDIO, isCompound: true },
    ];

    console.log(`📦 Preparing to seed ${movements.length} movements...`);

    for (const movement of movements) {
        const exists = await prisma.movementCatalog.findFirst({ where: { nameFa: movement.nameFa } });
        if (!exists) {
            await prisma.movementCatalog.create({ data: movement });
        }
    }

    // 2. Seed Users (Coach & Client)
    console.log('👥 Seeding users...');

    const passwordHash = await bcrypt.hash('password123', 10);

    // Create Coach
    const coach = await prisma.user.upsert({
        where: { email: 'coach@example.com' },
        update: {},
        create: {
            email: 'coach@example.com',
            password: passwordHash,
            firstName: 'محمد',
            lastName: 'مربی',
            role: UserRole.COACH,
        },
    });

    // Create Client
    const client = await prisma.user.upsert({
        where: { email: 'client@example.com' },
        update: {},
        create: {
            email: 'client@example.com',
            password: passwordHash,
            firstName: 'علی',
            lastName: 'شاگرد',
            role: UserRole.CLIENT,
            coachId: coach.id,
        },
    });

    // 3. Seed Workout Program
    console.log('📝 Seeding workout program...');

    // Find some movements
    const benchPress = await prisma.movementCatalog.findFirst({ where: { nameEn: 'Barbell Bench Press' } });
    const inclinePress = await prisma.movementCatalog.findFirst({ where: { nameEn: 'Incline Dumbbell Bench Press' } });
    const flyes = await prisma.movementCatalog.findFirst({ where: { nameEn: 'Dumbbell Flyes' } });
    const barbellCurl = await prisma.movementCatalog.findFirst({ where: { nameEn: 'Barbell Curl' } });

    if (benchPress && inclinePress && flyes && barbellCurl) {
        const program = await prisma.program.create({
            data: {
                name: 'برنامه حجمی سینه و جلوبازو',
                coachId: coach.id,
                description: 'برنامه تمرینی برای افزایش حجم عضلات سینه و جلوبازو',
                workouts: {
                    create: [
                        {
                            dayName: 'شنبه - سینه و جلوبازو',
                            orderIndex: 1,
                            exercises: {
                                create: [
                                    {
                                        movementId: benchPress.id,
                                        orderIndex: 1,
                                        suggestedSets: 4,
                                        suggestedReps: 10,
                                        suggestedRestSec: 90,
                                        notes: 'تمرکز روی بخش منفی حرکت',
                                    },
                                    {
                                        movementId: inclinePress.id,
                                        orderIndex: 2,
                                        suggestedSets: 3,
                                        suggestedReps: 12,
                                        suggestedRestSec: 90,
                                    },
                                    {
                                        movementId: flyes.id,
                                        orderIndex: 3,
                                        suggestedSets: 3,
                                        suggestedReps: 15,
                                        suggestedRestSec: 60,
                                    },
                                    {
                                        movementId: barbellCurl.id,
                                        orderIndex: 4,
                                        suggestedSets: 4,
                                        suggestedReps: 10,
                                        suggestedRestSec: 60,
                                    },
                                ],
                            },
                        },
                    ],
                },
            },
        });
        console.log(`✅ Program created: ${program.name}`);
    }

    console.log('✅ Seeding completed!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
