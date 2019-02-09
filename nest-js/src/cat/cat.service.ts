import { Injectable } from '@nestjs/common';
import { CreateCatDTO } from './dto/createCat.dto';
import { Cat } from './cat.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { UpdateCatDTO } from './dto/updateCat.dto';

@Injectable()
export class CatService {
    constructor(
        @InjectRepository(Cat)
        private readonly catRepository: Repository<Cat>,
    ) { }

    async create(createCatDTO: CreateCatDTO): Promise<Cat> {
        const cat = await this.catRepository.create(createCatDTO);
        return await this.catRepository.save(cat);
    }

    async findAll(): Promise<Cat[]> {
        return await this.catRepository.find();
    }

    async find(id: string): Promise<Cat> {
        return await this.catRepository.findOne(id);
    }

    async delete(id: string): Promise<DeleteResult> {
        return await this.catRepository.delete(id);
    }

    async update(id: string, updateCatDto: UpdateCatDTO): Promise<UpdateResult> {
        const cat = await this.catRepository.create(updateCatDto);
        return await this.catRepository.update(id, cat);
    }
}
