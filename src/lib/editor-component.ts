import { OnChanges, SimpleChanges, Input } from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { ManageService } from "../app/manage.service";

export abstract class EditorComponent<T> implements OnInit {

	ngOnInit(): void {
		this.editing = null
		this.manage.editing.subscribe(item => {
			if(item) {
				this.editing = item
				this.base = {... item}
			}
		})
	}

	constructor(private manage: ManageService) {}
	// if editing changes, we need a base that contains the original state before editing.

    source: T
	editing: T
	base: T

	get selected() { return this.editing ? this.editing : this.source }
	
	abstract clear()

	abstract save(entity: T)

}