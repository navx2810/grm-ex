import { FamilyService } from '../../../family.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'family-list',
	templateUrl: './family-list.component.html',
	styleUrls: ['./family-list.component.styl']
})
export class FamilyListComponent implements OnInit {

	get families() { return this.service.Collection }

	constructor(private service: FamilyService) { }

	ngOnInit() {
	}

}
