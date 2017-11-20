import { FamilyService } from '../../../family.service';
import { Family } from '../../../../lib/family';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'family-editor',
	templateUrl: './family-editor.component.html',
	styleUrls: ['./family-editor.component.styl']
})
export class FamilyEditorComponent implements OnInit {

	constructor(private familyService: FamilyService) { }

	source = new Family()

	ngOnInit() {
		window["vm"] = this
	}

	create() {
		this.familyService.Collection.push(this.source)
		this.clear()
		this.familyService.Save()
	}

	clear() {
		this.source = new Family()
	}

}
