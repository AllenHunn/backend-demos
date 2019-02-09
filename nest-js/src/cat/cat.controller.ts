import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { CatService } from './cat.service';
import { Cat } from './cat.entity';
import { CreateCatDTO } from './dto/createCat.dto';
import { UpdateCatDTO } from './dto/updateCat.dto';
import { UpdateResult, DeleteResult } from 'typeorm';

@Controller('cat')
export class CatController {
    constructor(private readonly catService: CatService) { }

    @Get()
    async findAll(): Promise<Cat[]> {
        return await this.catService.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string): Promise<Cat> {
        return await this.catService.find(id);
    }

    @Post()
    async create(@Body() createCatDto: CreateCatDTO): Promise<Cat> {
        return await this.catService.create(createCatDto);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() updateCatDto: UpdateCatDTO): Promise<UpdateResult> {
        return await this.catService.update(id, updateCatDto);
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<DeleteResult> {
        return this.catService.delete(id);
    }
}
