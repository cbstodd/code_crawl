import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Joke } from '../joke/joke';


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
    

    // Called when button is clicked
    createJoke(setup:string, punchline:string) {
        this.jokeCreated.emit(new Joke(setup, punchline));
    }

    

    constructor() {
    }

    ngOnInit() {
    }

}
