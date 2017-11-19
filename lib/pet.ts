import { Family } from "./family";

enum Gender { MALE, FEMALE }
export class Pet {
        ID: number = 0
        Name: string
        Gender: Gender
        Breed: string
        Age: number
        Color: string
        Weight: string
        Notes: string
        Family: Family
}