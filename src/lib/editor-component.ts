import { OnChanges, SimpleChanges } from "@angular/core";

export class EditorComponent<T> implements OnChanges {
    
    ngOnChanges(changes: SimpleChanges): void {
        if(changes.editing) {

        }
    }

    source: T
    editing: T
    get selected() { return this.editing ? this.editing : this.source }

}