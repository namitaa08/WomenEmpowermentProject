import { Component } from '@angular/core'


export class StepReg {


    constructor(

        // ? is set to define that the arguments marked are optional
        public regId?: number,
        public noOfChild?: number,
        public incomeCertificate?: string,
        public birthCertificate?: string,
        public trainingSector?: string,
        public ngoId?: number,
        public status?: string,
        public user?: string,
        public ngoCourse?:string
    ) {

    }

}