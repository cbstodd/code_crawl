import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'cc-model-form',
    templateUrl: './model-form.component.html',
    styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent {

    signupForm:FormGroup;
    firstName:FormControl;
    lastName:FormControl;
    email:FormControl;
    password:FormControl;
    language:FormControl;

    langs:string[] = [
        "-- N/A --",
        "English",
        "French",
        "German",
        "Spanish"
    ];

    constructor() {
    }

    createFormControls() {
        this.firstName = new FormControl('', Validators.required);
        this.lastName  = new FormControl('', Validators.required);

        this.email    = new FormControl('', [
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')
        ]);
        this.password = new FormControl('', [
            Validators.required,
            Validators.minLength(8)
        ]);
        this.language = new FormControl('');
    }


    createForm() {
        this.signupForm = new FormGroup({
            name: new FormGroup({
                firstName: this.firstName,
                lastName: this.lastName,
            }),
            email: this.email,
            password: this.password,
            language: this.language
        });

    }

    ngOnInit() {
        this.createFormControls();
        this.createForm();
    }

    onSubmit(){
        if (this.signupForm.valid){
            console.log("Form submitted!", this.signupForm.value);
        }
    }


}
