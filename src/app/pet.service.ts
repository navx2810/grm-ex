import { Injectable } from '@angular/core';
import { Pet } from '../lib/models/pet';

@Injectable()
export class PetService {

	Collection: Array<Pet> = []

}
