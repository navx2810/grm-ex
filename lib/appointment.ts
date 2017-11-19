import { Service } from './service'
import { Customer } from './customer'
import { Pet } from './pet'

export class Appointment {
    ID: number = 0
    Groomer: string
    Start: Date
    End: Date
    CheckIn: Date
    CheckOut: Date
    Notes: string
    Pet: Pet
    Customer: Customer
    Services: Array<Service>
}