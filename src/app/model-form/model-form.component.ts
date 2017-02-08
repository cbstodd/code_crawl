import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'cc-model-form',
    templateUrl: './model-form.component.html',
    styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {

    signupForm:FormGroup;

    langs:string[] = [
        '-- Select a language (None) --',
        'English',
        'French',
        'German',
        'Spanish'
    ];

    constructor() {
    }

    ngOnInit() {
        this.signupForm = new FormGroup({
            name: new FormGroup({
                firstName: new FormControl(),
                lastName: new FormControl()
            }),
            email: new FormControl(),
            password: new FormControl(),
            language: new FormControl()

        })
    }



}
