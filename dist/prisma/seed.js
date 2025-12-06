"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt = __importStar(require("bcryptjs"));
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('🌱 Starting seed...');
    console.log('🏋️ Seeding movements catalog...');
    const movements = [
        { nameFa: 'پرس سینه هالتر', nameEn: 'Barbell Bench Press', muscleGroup: client_1.MuscleGroup.CHEST, isCompound: true },
        { nameFa: 'پرس سینه دمبل', nameEn: 'Dumbbell Bench Press', muscleGroup: client_1.MuscleGroup.CHEST, isCompound: true },
        { nameFa: 'پرس بالا سینه هالتر', nameEn: 'Incline Barbell Bench Press', muscleGroup: client_1.MuscleGroup.CHEST, isCompound: true },
        { nameFa: 'پرس بالا سینه دمبل', nameEn: 'Incline Dumbbell Bench Press', muscleGroup: client_1.MuscleGroup.CHEST, isCompound: true },
        { nameFa: 'پرس زیر سینه هالتر', nameEn: 'Decline Barbell Bench Press', muscleGroup: client_1.MuscleGroup.CHEST, isCompound: true },
        { nameFa: 'پرس زیر سینه دمبل', nameEn: 'Decline Dumbbell Bench Press', muscleGroup: client_1.MuscleGroup.CHEST, isCompound: true },
        { nameFa: 'قفسه سینه دمبل', nameEn: 'Dumbbell Flyes', muscleGroup: client_1.MuscleGroup.CHEST, isCompound: false },
        { nameFa: 'قفسه بالا سینه دمبل', nameEn: 'Incline Dumbbell Flyes', muscleGroup: client_1.MuscleGroup.CHEST, isCompound: false },
        { nameFa: 'کراس اور سیم‌کش', nameEn: 'Cable Crossover', muscleGroup: client_1.MuscleGroup.CHEST, isCompound: false },
        { nameFa: 'پوش آپ (شنا)', nameEn: 'Push Up', muscleGroup: client_1.MuscleGroup.CHEST, isCompound: true },
        { nameFa: 'پک دک (پروانه دستگاه)', nameEn: 'Pec Deck Machine', muscleGroup: client_1.MuscleGroup.CHEST, isCompound: false },
        { nameFa: 'پرس سینه دستگاه', nameEn: 'Chest Press Machine', muscleGroup: client_1.MuscleGroup.CHEST, isCompound: true },
        { nameFa: 'دیپ سینه', nameEn: 'Chest Dips', muscleGroup: client_1.MuscleGroup.CHEST, isCompound: true },
        { nameFa: 'پول‌اور دمبل', nameEn: 'Dumbbell Pullover', muscleGroup: client_1.MuscleGroup.CHEST, isCompound: false },
        { nameFa: 'فلای سیم‌کش ایستاده', nameEn: 'Standing Cable Fly', muscleGroup: client_1.MuscleGroup.CHEST, isCompound: false },
        { nameFa: 'بارفیکس', nameEn: 'Pull Up', muscleGroup: client_1.MuscleGroup.BACK, isCompound: true },
        { nameFa: 'زیربغل هالتر خم', nameEn: 'Barbell Bent Over Row', muscleGroup: client_1.MuscleGroup.BACK, isCompound: true },
        { nameFa: 'زیربغل دمبل تک خم', nameEn: 'One Arm Dumbbell Row', muscleGroup: client_1.MuscleGroup.BACK, isCompound: false },
        { nameFa: 'زیربغل سیم‌کش از بالا', nameEn: 'Lat Pulldown', muscleGroup: client_1.MuscleGroup.BACK, isCompound: true },
        { nameFa: 'زیربغل قایقی', nameEn: 'Seated Cable Row', muscleGroup: client_1.MuscleGroup.BACK, isCompound: true },
        { nameFa: 'ددلیفت', nameEn: 'Deadlift', muscleGroup: client_1.MuscleGroup.BACK, isCompound: true },
        { nameFa: 'تی بار', nameEn: 'T-Bar Row', muscleGroup: client_1.MuscleGroup.BACK, isCompound: true },
        { nameFa: 'زیربغل سیم‌کش دست صاف', nameEn: 'Straight Arm Pulldown', muscleGroup: client_1.MuscleGroup.BACK, isCompound: false },
        { nameFa: 'فیس پول', nameEn: 'Face Pull', muscleGroup: client_1.MuscleGroup.BACK, isCompound: false },
        { nameFa: 'شراگ هالتر', nameEn: 'Barbell Shrug', muscleGroup: client_1.MuscleGroup.BACK, isCompound: false },
        { nameFa: 'شراگ دمبل', nameEn: 'Dumbbell Shrug', muscleGroup: client_1.MuscleGroup.BACK, isCompound: false },
        { nameFa: 'هایپر اکستنشن (فیله کمر)', nameEn: 'Hyperextension', muscleGroup: client_1.MuscleGroup.BACK, isCompound: false },
        { nameFa: 'زیربغل دستگاه اچ', nameEn: 'Machine High Row', muscleGroup: client_1.MuscleGroup.BACK, isCompound: true },
        { nameFa: 'زیربغل سیم‌کش مچ برعکس', nameEn: 'Reverse Grip Lat Pulldown', muscleGroup: client_1.MuscleGroup.BACK, isCompound: true },
        { nameFa: 'چین آپ', nameEn: 'Chin Up', muscleGroup: client_1.MuscleGroup.BACK, isCompound: true },
        { nameFa: 'اسکات هالتر', nameEn: 'Barbell Squat', muscleGroup: client_1.MuscleGroup.LEGS, isCompound: true },
        { nameFa: 'اسکات از جلو', nameEn: 'Front Squat', muscleGroup: client_1.MuscleGroup.LEGS, isCompound: true },
        { nameFa: 'پرس پا', nameEn: 'Leg Press', muscleGroup: client_1.MuscleGroup.LEGS, isCompound: true },
        { nameFa: 'لانگز دمبل', nameEn: 'Dumbbell Lunges', muscleGroup: client_1.MuscleGroup.LEGS, isCompound: true },
        { nameFa: 'لانگز راه رفتنی', nameEn: 'Walking Lunges', muscleGroup: client_1.MuscleGroup.LEGS, isCompound: true },
        { nameFa: 'جلو ران دستگاه', nameEn: 'Leg Extension', muscleGroup: client_1.MuscleGroup.LEGS, isCompound: false },
        { nameFa: 'پشت ران دستگاه خوابیده', nameEn: 'Lying Leg Curl', muscleGroup: client_1.MuscleGroup.LEGS, isCompound: false },
        { nameFa: 'پشت ران دستگاه نشسته', nameEn: 'Seated Leg Curl', muscleGroup: client_1.MuscleGroup.LEGS, isCompound: false },
        { nameFa: 'ددلیفت رومانیایی', nameEn: 'Romanian Deadlift', muscleGroup: client_1.MuscleGroup.LEGS, isCompound: true },
        { nameFa: 'ددلیفت پا صاف', nameEn: 'Stiff Leg Deadlift', muscleGroup: client_1.MuscleGroup.LEGS, isCompound: true },
        { nameFa: 'هاک اسکات', nameEn: 'Hack Squat', muscleGroup: client_1.MuscleGroup.LEGS, isCompound: true },
        { nameFa: 'هیپ تراست', nameEn: 'Hip Thrust', muscleGroup: client_1.MuscleGroup.GLUTES, isCompound: true },
        { nameFa: 'کیک بک سیم‌کش', nameEn: 'Cable Kickback', muscleGroup: client_1.MuscleGroup.GLUTES, isCompound: false },
        { nameFa: 'گابلت اسکات', nameEn: 'Goblet Squat', muscleGroup: client_1.MuscleGroup.LEGS, isCompound: true },
        { nameFa: 'اسکات بلغاری', nameEn: 'Bulgarian Split Squat', muscleGroup: client_1.MuscleGroup.LEGS, isCompound: true },
        { nameFa: 'استپ آپ', nameEn: 'Step Up', muscleGroup: client_1.MuscleGroup.LEGS, isCompound: true },
        { nameFa: 'ساق پا ایستاده', nameEn: 'Standing Calf Raise', muscleGroup: client_1.MuscleGroup.CALVES, isCompound: false },
        { nameFa: 'ساق پا نشسته', nameEn: 'Seated Calf Raise', muscleGroup: client_1.MuscleGroup.CALVES, isCompound: false },
        { nameFa: 'ساق پا دستگاه پرس', nameEn: 'Leg Press Calf Raise', muscleGroup: client_1.MuscleGroup.CALVES, isCompound: false },
        { nameFa: 'پرس سرشانه هالتر ایستاده', nameEn: 'Overhead Press', muscleGroup: client_1.MuscleGroup.SHOULDERS, isCompound: true },
        { nameFa: 'پرس سرشانه هالتر نشسته', nameEn: 'Seated Barbell Press', muscleGroup: client_1.MuscleGroup.SHOULDERS, isCompound: true },
        { nameFa: 'پرس سرشانه دمبل', nameEn: 'Dumbbell Shoulder Press', muscleGroup: client_1.MuscleGroup.SHOULDERS, isCompound: true },
        { nameFa: 'نشر جانب دمبل', nameEn: 'Dumbbell Lateral Raise', muscleGroup: client_1.MuscleGroup.SHOULDERS, isCompound: false },
        { nameFa: 'نشر جانب سیم‌کش', nameEn: 'Cable Lateral Raise', muscleGroup: client_1.MuscleGroup.SHOULDERS, isCompound: false },
        { nameFa: 'نشر جلو دمبل', nameEn: 'Dumbbell Front Raise', muscleGroup: client_1.MuscleGroup.SHOULDERS, isCompound: false },
        { nameFa: 'نشر خم دمبل', nameEn: 'Bent Over Lateral Raise', muscleGroup: client_1.MuscleGroup.SHOULDERS, isCompound: false },
        { nameFa: 'نشر خم سیم‌کش', nameEn: 'Cable Rear Delt Fly', muscleGroup: client_1.MuscleGroup.SHOULDERS, isCompound: false },
        { nameFa: 'پک دک معکوس', nameEn: 'Reverse Pec Deck', muscleGroup: client_1.MuscleGroup.SHOULDERS, isCompound: false },
        { nameFa: 'پرس آرنولدی', nameEn: 'Arnold Press', muscleGroup: client_1.MuscleGroup.SHOULDERS, isCompound: true },
        { nameFa: 'کول هالتر', nameEn: 'Upright Row', muscleGroup: client_1.MuscleGroup.SHOULDERS, isCompound: true },
        { nameFa: 'جلوبازو هالتر ایستاده', nameEn: 'Barbell Curl', muscleGroup: client_1.MuscleGroup.BICEPS, isCompound: false },
        { nameFa: 'جلوبازو دمبل ایستاده', nameEn: 'Standing Dumbbell Curl', muscleGroup: client_1.MuscleGroup.BICEPS, isCompound: false },
        { nameFa: 'جلوبازو دمبل نشسته', nameEn: 'Seated Dumbbell Curl', muscleGroup: client_1.MuscleGroup.BICEPS, isCompound: false },
        { nameFa: 'جلوبازو چکشی', nameEn: 'Hammer Curl', muscleGroup: client_1.MuscleGroup.BICEPS, isCompound: false },
        { nameFa: 'جلوبازو لاری', nameEn: 'Preacher Curl', muscleGroup: client_1.MuscleGroup.BICEPS, isCompound: false },
        { nameFa: 'جلوبازو سیم‌کش', nameEn: 'Cable Curl', muscleGroup: client_1.MuscleGroup.BICEPS, isCompound: false },
        { nameFa: 'جلوبازو دمبل تمرکزی', nameEn: 'Concentration Curl', muscleGroup: client_1.MuscleGroup.BICEPS, isCompound: false },
        { nameFa: 'جلوبازو دمبل روی میز شیب‌دار', nameEn: 'Incline Dumbbell Curl', muscleGroup: client_1.MuscleGroup.BICEPS, isCompound: false },
        { nameFa: 'جلوبازو طنابی', nameEn: 'Rope Hammer Curl', muscleGroup: client_1.MuscleGroup.BICEPS, isCompound: false },
        { nameFa: 'پشت بازو سیم‌کش', nameEn: 'Tricep Pushdown', muscleGroup: client_1.MuscleGroup.TRICEPS, isCompound: false },
        { nameFa: 'پشت بازو طنابی', nameEn: 'Rope Pushdown', muscleGroup: client_1.MuscleGroup.TRICEPS, isCompound: false },
        { nameFa: 'پشت بازو هالتر خوابیده', nameEn: 'Skullcrushers', muscleGroup: client_1.MuscleGroup.TRICEPS, isCompound: false },
        { nameFa: 'پشت بازو دمبل تک دست', nameEn: 'One Arm Dumbbell Extension', muscleGroup: client_1.MuscleGroup.TRICEPS, isCompound: false },
        { nameFa: 'پشت بازو کیک بک', nameEn: 'Tricep Kickback', muscleGroup: client_1.MuscleGroup.TRICEPS, isCompound: false },
        { nameFa: 'دیپ نیمکت', nameEn: 'Bench Dips', muscleGroup: client_1.MuscleGroup.TRICEPS, isCompound: true },
        { nameFa: 'پرس سینه دست جمع', nameEn: 'Close Grip Bench Press', muscleGroup: client_1.MuscleGroup.TRICEPS, isCompound: true },
        { nameFa: 'پشت بازو سیم‌کش از پشت سر', nameEn: 'Overhead Cable Extension', muscleGroup: client_1.MuscleGroup.TRICEPS, isCompound: false },
        { nameFa: 'کرانچ', nameEn: 'Crunch', muscleGroup: client_1.MuscleGroup.ABS, isCompound: false },
        { nameFa: 'کرانچ سیم‌کش', nameEn: 'Cable Crunch', muscleGroup: client_1.MuscleGroup.ABS, isCompound: false },
        { nameFa: 'زیرشکم خلبانی', nameEn: 'Hanging Leg Raise', muscleGroup: client_1.MuscleGroup.ABS, isCompound: false },
        { nameFa: 'پلانک', nameEn: 'Plank', muscleGroup: client_1.MuscleGroup.ABS, isCompound: false },
        { nameFa: 'روسی', nameEn: 'Russian Twist', muscleGroup: client_1.MuscleGroup.ABS, isCompound: false },
        { nameFa: 'چرخ شکم', nameEn: 'Ab Wheel Rollout', muscleGroup: client_1.MuscleGroup.ABS, isCompound: false },
        { nameFa: 'دراز نشست', nameEn: 'Sit Up', muscleGroup: client_1.MuscleGroup.ABS, isCompound: false },
        { nameFa: 'دویدن روی تردمیل', nameEn: 'Treadmill Running', muscleGroup: client_1.MuscleGroup.CARDIO, isCompound: true },
        { nameFa: 'دوچرخه ثابت', nameEn: 'Stationary Bike', muscleGroup: client_1.MuscleGroup.CARDIO, isCompound: true },
        { nameFa: 'الپتیکال', nameEn: 'Elliptical', muscleGroup: client_1.MuscleGroup.CARDIO, isCompound: true },
        { nameFa: 'روئینگ', nameEn: 'Rowing Machine', muscleGroup: client_1.MuscleGroup.CARDIO, isCompound: true },
        { nameFa: 'طناب زدن', nameEn: 'Jump Rope', muscleGroup: client_1.MuscleGroup.CARDIO, isCompound: true },
    ];
    console.log(`📦 Preparing to seed ${movements.length} movements...`);
    for (const movement of movements) {
        const exists = await prisma.movementCatalog.findFirst({ where: { nameFa: movement.nameFa } });
        if (!exists) {
            await prisma.movementCatalog.create({ data: movement });
        }
    }
    console.log('👥 Seeding users...');
    const passwordHash = await bcrypt.hash('password123', 10);
    const coach = await prisma.user.upsert({
        where: { email: 'coach@example.com' },
        update: {},
        create: {
            email: 'coach@example.com',
            password: passwordHash,
            firstName: 'محمد',
            lastName: 'مربی',
            role: client_1.UserRole.COACH,
        },
    });
    const client = await prisma.user.upsert({
        where: { email: 'client@example.com' },
        update: {},
        create: {
            email: 'client@example.com',
            password: passwordHash,
            firstName: 'علی',
            lastName: 'شاگرد',
            role: client_1.UserRole.CLIENT,
            coachId: coach.id,
        },
    });
    console.log('📝 Seeding workout program...');
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
//# sourceMappingURL=seed.js.map