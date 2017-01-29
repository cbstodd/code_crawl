import { Component, Input } from '@angular/core';
import { Joke } from './joke';


@Component({
    selector: 'cc-joke',
    templateUrl: './joke.component.html',
    styleUrls: ['./joke.component.css']
})
export class JokeComponent {

    @Input() joke:Joke;

}
