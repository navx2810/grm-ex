export interface CRUDService<T> {
    Collection: Array<T>
    Add(entity: T)
    Remove(entity: T)
    Update(entity: T)
    Save()
}