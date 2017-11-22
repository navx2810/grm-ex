import { FamilyService } from '../../../family.service';
import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../../../../lib/list-component';
import { Family } from '../../../../lib/models/family';

@Component({
	selector: 'family-list',
	templateUrl: './family-list.component.html',
	styleUrls: ['./family-list.component.styl']
})
export class FamilyListComponent extends ListComponent<Family> implements OnInit {

	searchTerm = ""

	get families() { return this.service }

	constructor(private familyService: FamilyService) {
		super()
		this.service = familyService
	}

	ngOnInit() {
	}

	// delete(family) {
	// 	this.service.Remove(family)
	// }

	// edit(family) {

	// }

}
