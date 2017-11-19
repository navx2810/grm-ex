import { Family } from './lib/family';
import { Pet } from './lib/pet';
import { Customer } from './lib/customer';
import { Appointment } from "./lib/appointment";
import { Service } from './lib/service';

export default new class {
    appointments: Array<Appointment> = []
    customers: Array<Customer> = []
    pets: Array<Pet> = []
    families: Array<Family> = []
    services: Array<Service> = []
}