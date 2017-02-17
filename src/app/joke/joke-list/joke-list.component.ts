import { Component } from '@angular/core';
import { Joke } from '../joke';

@Component({
    selector: 'cc-joke-list',
    templateUrl: './joke-list.component.html',
    styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent {

    jokes:Joke[];

    constructor() {
        this.jokes = [

            new Joke("Lorem Ipsum is simply dummy text of the printing",
                "And typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.",
                "http://colinstoddblog.s3.amazonaws.com/assets/Colin8-fd87185cfd5553c61911639c1d71426c.png"),
            new Joke("Lorem Ipsum is simply dummy text of the printing",
                "And typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.",
                ""),
            new Joke("Lorem Ipsum is simply dummy text of the printing",
                "And typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.",
                "")

        ]
    }

    // Called on jokeCreated EventEmitter
    addJoke(joke) {
        this.jokes.unshift(joke);
    }

    // Finds joke via index and deletes it.
    deleteJoke(joke) {
        let indexToDelete = this.jokes.indexOf(joke);
        if (indexToDelete !== -1) {
            this.jokes.splice(indexToDelete, 1);
        }
    }

}
