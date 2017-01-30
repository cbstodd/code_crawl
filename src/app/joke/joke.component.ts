import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Joke } from './joke';


@Component({
    selector: 'cc-joke',
    templateUrl: './joke.component.html',
    styleUrls: ['./joke.component.css']
})
export class JokeComponent {

    @Input() joke:Joke;
    @Output() jokeDeleted = new EventEmitter<Joke>();

    // Called when button is clicked and envokes
    // emit which calls the delete func.
    deleteItem(){
        this.jokeDeleted.emit(this.joke);
        console.log(`deleteItem was executed`);
    }

}
