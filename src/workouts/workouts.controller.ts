import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { WorkoutsService } from './workouts.service';

@Controller('workouts')
export class WorkoutsController {
    constructor(private readonly workoutsService: WorkoutsService) { }

    @Get('health')
    async healthCheck() {
        const movements = await this.workoutsService.getCatalog();
        return {
            status: 'ok',
            database: 'connected',
            movements_sample: movements
        };
    }

    @Get()
    findAll() {
        return this.workoutsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.workoutsService.findOne(id);
    }
}
