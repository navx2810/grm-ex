import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable()
export class ManageService {

	// Use emitters to detect any changes to this.
	editing: EventEmitter<any>;

	constructor() {
		this.editing = new EventEmitter()
	}

}
