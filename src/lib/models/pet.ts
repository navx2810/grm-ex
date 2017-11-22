import { Family } from "./family";

enum Gender { MALE, FEMALE }
export class Pet {
        ID: number = 0
        Name: string = null
        Gender: Gender = null
        Breed: string = null
        Age: number = null
        Color: string = null
        Weight: string = null
        Notes: string = null
        Family: Family = null
}