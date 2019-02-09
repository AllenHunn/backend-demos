import { IsNotEmpty, IsNumber, IsIn } from 'class-validator';

export class CreateCatDTO {

    @IsNotEmpty()
    readonly name: string;

    @IsNumber()
    readonly age: number;

    @IsIn(['Orange', 'Grey', 'Black', 'White'])
    readonly color: string;
}
