interface Phone {
    Primary: String
    Secondary: String
}
export class Family {
    ID: number = 0
    Name: String = null
    Phone: Phone = { Primary: null, Secondary: null }
    Email: String = null
}