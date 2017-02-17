import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Joke } from '../joke';


@Component({
    selector: 'cc-joke-form',
    templateUrl: './joke-form.component.html',
    styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {

    /*------------------------------------------------
     Binds to where form is used. In this case joke-form.
     When Emitted, it calls the addJoke function on the form.
     ------------------------------------------------*/
    @Output() jokeCreated = new EventEmitter<Joke>();

    // Validations
    jokeForm:FormGroup;
    jokeUrl:FormControl;
    jokeSetup:FormControl;
    jokePunchline:FormControl;

    createFormControls() {
        this.jokeUrl      = new FormControl('', [
            Validators.pattern('(http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png)')
        ]);
        this.jokeSetup     = new FormControl('', [
            Validators.required,
            Validators.minLength(5)
        ]);
        this.jokePunchline = new FormControl('', [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(1000)
        ]);
    }

    createForm() {
        this.jokeForm = new FormGroup({
            jokeUrl: this.jokeUrl,
            jokeSetup: this.jokeSetup,
            jokePunchline: this.jokePunchline
        });
    }


    ngOnInit() {
        this.createFormControls();
        this.createForm();
    }


    // Called when button is clicked
    createJoke(setup:string, punchline:string, imageUrl:string) {
        if (this.jokeForm.valid) {
            this.jokeCreated.emit(new Joke(setup, punchline, imageUrl));
            this.jokeForm.reset();
        }
    }


}
