import { CRUDService } from "./crud-service"

export class ListComponent<T> {

    service: CRUDService<T>

    edit(t: T) {
        this.service.Update(t)
    }

    delete(t: T) {
        if(confirm("Remove this item?")) {
            this.service.Remove(t)
        }
    }

}