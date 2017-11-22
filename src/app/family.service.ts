import { Injectable } from '@angular/core';
import { Family } from '../lib/models/family';
import { CRUDService } from "../lib/crud-service"

@Injectable()
export class FamilyService implements CRUDService<Family> {

	Collection: Family[]
	
	Update(entity: Family) {
		throw new Error("Method not implemented.");
	}

	Save() {
		localStorage.setItem('families', JSON.stringify(this.Collection))
	}

	constructor() {
		let str = localStorage.getItem('families')
		if(str) {
			this.Collection = JSON.parse(str)
		}
	}

	Add(family: Family) {
		if(this.Collection.indexOf(family) < 0) {
			this.Collection.push(family)
			this.Save()
		}
	}

	Remove(family: Family) {
		if(this.Collection.indexOf(family) > -1) {
			this.Collection = this.Collection.filter(it => it !== family)
			this.Save()
		}
	}

}
