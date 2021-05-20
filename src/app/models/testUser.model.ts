import { EmailValidator } from "@angular/forms";

export interface testUser{
    id:number,
    name:string,
    username:string,
    email:EmailValidator,
    address:{
        street:string,
        suite:string,
        city:string,
        zipcode:string,
        gio:{
            lat:number,
            lng:number,
        }
    },
    phone:string,
    website:string,
    company:{
        name:string,
        catchPhrase:string,
        bs:string,
    }
}