import {Controller, Get, Param, Post, Body, Patch} from '@nestjs/common';
import {EventService} from './event.service';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get('all')
  async getAllEvents() {
    return 'test';
  }

  @Get('id/:id')
  async getEventById(@Param('id') id: number) {
    return 'test';
  }

  @Post('add')
  async addEvent(@Body() body: any) {
    return 'test';
  }

  @Patch('update/:id')
  async updateEvent(@Param('id') id: number, @Body() body: any) {
    return 'test';
  }
}
