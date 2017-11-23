import { FamilyService } from '../../../family.service';
import { Family } from '../../../../lib/models/family';
import { Component, Input, OnInit } from '@angular/core';
import { EditorComponent } from '../../../../lib/editor-component';
import { ManageService } from '../../../manage.service';

@Component({
	selector: 'family-editor',
	templateUrl: './family-editor.component.html',
	styleUrls: ['./family-editor.component.styl']
})
export class FamilyEditorComponent extends EditorComponent<Family> implements OnInit {

	save(entity: Family) {
		this.familyService.Add(entity)
	}

	constructor(private familyService: FamilyService, manage: ManageService) { super(manage) }

	ngOnInit() {
		super.ngOnInit()
		this.source = new Family()
		window["vm"] = this
	}

	// create() {
	// 	// this.familyService.Collection.push(this.source)
	// 	this.familyService.Add(this.source)
	// 	this.clear()
	// }

	clear() {
		this.source = new Family()
	}

}
