import { FamilyService } from '../../../family.service';
import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../../../../lib/list-component';
import { Family } from '../../../../lib/models/family';
import { ManageService } from '../../../manage.service';

@Component({
	selector: 'family-list',
	templateUrl: './family-list.component.html',
	styleUrls: ['./family-list.component.styl']
})
export class FamilyListComponent extends ListComponent<Family> implements OnInit {

	searchTerm = ""

	constructor(private familyService: FamilyService, manage: ManageService) {
		super(manage)
		this.service = familyService
	}

	ngOnInit() {
		this.source = this.familyService.Collection
	}

}
