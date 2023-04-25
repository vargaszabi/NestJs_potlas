import { Module } from '@nestjs/common';
import { CharacterService } from './charachter.service';
import { CharachterController } from './charachter.controller';

@Module({
  controllers: [CharachterController],
  providers: [CharacterService]
})
export class CharachterModule {}
