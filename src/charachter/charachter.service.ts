import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-charachter.dto';
import { UpdateCharachterDto } from './dto/update-charachter.dto';
import { DataSource } from 'typeorm';
import { Character } from './entities/charachter.entity';
import { Player } from 'src/player/entities/player.entity';

@Injectable()
export class CharacterService {
  constructor(private dataSource: DataSource) {}
  async create(createCharacterDto: CreateCharacterDto) {
    const characterRepo = this.dataSource.getRepository(Character);
    const player = this.dataSource.getRepository(Player);
    const id = await player.findOne({
      where: { id: createCharacterDto.userId },
    });
    const newCharacter = new Character();
    newCharacter.name = createCharacterDto.name;
    newCharacter.experience = createCharacterDto.experience;
    newCharacter.player = id;
    await characterRepo.save(newCharacter);
  }

  async findAll() {
    return await this.dataSource.getRepository(Character).find();
  }

  findOne(id: number) {
    return `This action returns a #${id} character`;
  }

  async update(id: number, updateCharacterDto: UpdateCharachterDto) {
    const characterRepo = this.dataSource.getRepository(Character);
    const characterToUpdate = await characterRepo.findOneBy({ id });

    if (!characterToUpdate) {
      throw new BadRequestException('Ilyen id-val  nem található karakter');
    }
    if (
      updateCharacterDto.name == null &&
      updateCharacterDto.experience == null
    ) {
      throw new BadRequestException('Nincs adat');
    }
    characterToUpdate.experience = updateCharacterDto.experience;
    characterToUpdate.name = updateCharacterDto.name;

    characterRepo.save(characterToUpdate);
  }

  async remove(id: number) {
    const charaterRepo = this.dataSource.getRepository(Character);
    const charaterDelete = await charaterRepo.findOneBy({ id });
    if (charaterDelete == null) {
      throw new BadRequestException();
    }
    await charaterRepo.delete({ id: id });
  }
}