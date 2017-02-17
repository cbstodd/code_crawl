import { Component, OnInit, ViewChild } from '@angular/core';
import { Signup } from './signup';

@Component({
    selector: 'cc-template-form',
    templateUrl: './template-form.component.html',
    styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {

    }

    model:Signup = new Signup();
    emailRegex   = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$';
    @ViewChild('f') form:any;

    langs:string[] = [
        "English",
        "Spanish",
        "French",
        "German"
    ];

    onSubmit() {
        if (this.form.valid){
            console.log(`The template-form has been submitted!`);
            this.form.reset();
        }
    }


}
