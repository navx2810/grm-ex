import { CRUDService } from "./crud-service"
import { ManageService } from "../app/manage.service";

export abstract class ListComponent<T> {

	constructor(private manage: ManageService) {}

	service: CRUDService<T>
	
	source: Array<T>

    edit(entity: T) {
		this.manage.editing.emit(entity)
	}
	
    delete(t: T) {
        if(confirm("Remove this item?")) {
            this.service.Remove(t)
        }
    }

}