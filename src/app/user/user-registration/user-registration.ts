import { Component } from '@angular/core'



export class UserRegistration {


    constructor(

        // ? is set to define that the arguments marked are optional
        public name?: string,
        public username?: string,
        public password?: string,
        public confirmPassword?: string
    ) {

    }

}