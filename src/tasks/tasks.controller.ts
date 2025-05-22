//tasks.controller.ts
import { Controller, Post, Get, Param, Body, Put, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CreateTaskDto } from './dto/create-task.dto';
 
@ApiTags('tareas')
@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) { }
 
    @Post()
    @ApiOperation({ summary: 'Crear una nueva tarea' })
    @ApiResponse({ status: 201, description: 'Tarea creada correctamente.' })
    create(@Body() dto: CreateTaskDto): Promise<Task> {
        return this.tasksService.createTask(dto.titulo, dto.userId);
    }

    @Get()
    @ApiOperation({ summary: 'Obtener todas las tareas' })
    @ApiResponse({ status: 200, description: 'Lista de tareas.' })
    findAll(): Promise<Task[]> {
        return this.tasksService.findAll();
    }
 
    @Get(':id')
    @ApiOperation({ summary: 'Obtener una tarea por ID' })
    @ApiParam({ name: 'id', description: 'ID de la tarea' })
    @ApiResponse({ status: 200, description: 'Tarea encontrada.' })
    @ApiResponse({ status: 404, description: 'Tarea no encontrada.' })
    findById(@Param('id') id: string): Promise<Task> {
        return this.tasksService.findById(+id);
    }
 
    @Put(':id')
    @ApiOperation({ summary: 'Actualizar tarea por ID' })
    @ApiParam({ name: 'id', description: 'ID de la tarea' })
    update(@Param('id') id: string, @Body() body: Partial<Task>): Promise<Task> {
        return this.tasksService.updateTask(+id, body);
    }
 
    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar tarea por ID' })
    @ApiParam({ name: 'id', description: 'ID de la tarea' })
    delete(@Param('id') id: string): Promise<void> {
        return this.tasksService.deleteTask(+id);
    }
}