import { Component, OnInit } from '@angular/core';
import { Joke } from '../joke/joke';

@Component({
    selector: 'cc-joke-list',
    templateUrl: './joke-list.component.html',
    styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

    jokes:Joke[];

    constructor() {
        this.jokes = [

            new Joke("Lorem Ipsum is simply dummy text of the printing",
                "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap."),
            new Joke("Lorem Ipsum is simply dummy text of the printing",
                "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap."),
            new Joke("Lorem Ipsum is simply dummy text of the printing",
                "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.")

        ]
    }

    // Called on jokeCreated EventEmitter
    addJoke(joke){
        this.jokes.unshift(joke);
    }

    // Finds joke via index and deletes it.
    deleteJoke(joke) {
        let indexToDelete = this.jokes.indexOf(joke);
        if (indexToDelete !== -1) {
            this.jokes.splice(indexToDelete,1);
        }
    }

    ngOnInit() {
    }

}
