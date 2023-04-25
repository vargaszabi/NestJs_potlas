import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CharacterService } from './charachter.service';
import { CreateCharacterDto } from './dto/create-charachter.dto';
import { UpdateCharachterDto } from './dto/update-charachter.dto';

@Controller('charachter')
export class CharachterController {
  constructor(private readonly charachterService: CharacterService) {}

  @Post()
  create(@Body() createCharachterDto: CreateCharacterDto) {
    return this.charachterService.create(createCharachterDto);
  }

  @Get()
  findAll() {
    return this.charachterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.charachterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCharachterDto: UpdateCharachterDto) {
    return this.charachterService.update(+id, updateCharachterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.charachterService.remove(+id);
  }
}
