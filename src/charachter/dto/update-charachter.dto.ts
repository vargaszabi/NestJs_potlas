import { PartialType } from '@nestjs/mapped-types';
import { CreateCharacterDto } from './create-charachter.dto';

export class UpdateCharachterDto extends PartialType(CreateCharacterDto) {}
