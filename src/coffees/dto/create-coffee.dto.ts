import { IsString } from "class-validator";

//import {IsString} from 'class-validator'
export class CreateCoffeeDto {
    
    readonly name: string;
    
    readonly brand: string;
    @IsString({each:true})
    readonly flavors: string[];
}
