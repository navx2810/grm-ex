import { Injectable } from '@angular/core';
import { Family } from '../lib/family';

@Injectable()
export class FamilyService {

	Collection: Array<Family> = []

	Save() {
		localStorage.setItem('families', JSON.stringify(this.Collection))
	}

	constructor() {
		let str = localStorage.getItem('families')
		if(str) {
			this.Collection = JSON.parse(str)
		}
	}

}
