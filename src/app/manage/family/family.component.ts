import { FamilyService } from '../../family.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'family',
	templateUrl: './family.component.html',
	styleUrls: ['./family.component.styl']
})
export class FamilyComponent implements OnInit {

	constructor(private familyService: FamilyService) { }

	ngOnInit() {
	}

}
