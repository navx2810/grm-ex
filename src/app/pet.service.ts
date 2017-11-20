import { Injectable } from '@angular/core';
import { Pet } from '../lib/pet';

@Injectable()
export class PetService {

	Collection: Array<Pet> = []

}
