import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'cc-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {


    cards:any[] = [
        {
            "title": "Colin Stodd",
            "body": "You got to keep them seperated; Hey-Hey!",
            "date": "10-15-1983",
            "numbers": "3478943974397"
        }, {
            "title": "Tommy Bradel",
            "body": "Going to the club with a bottle full of bubbly",
            "date": "02-14-1976",
            "numbers": "324435"
        }, {
            "title": "Jim Bob",
            "body": "Gonna throw that pig skin son",
            "date": "09-12-1978",
            "numbers": "122332"
        }
    ];



    showDate:boolean = true;
    toggleDate(){
        console.log(`toggleTitle clicked`);
        this.showDate = !this.showDate;
    }
    

    

}
