import { Component } from '@angular/core';

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
            "date": "10-15-1983"
        }, {
            "title": "Tommy Bradel",
            "body": "Going to the club with a bottle full of bubbly",
            "date": "10-11-1983"
        }, {
            "title": "Jim Bob",
            "body": "Gonna throw that pig skin son",
            "date": "12-28-1942"
        }
    ];
    
    showImage:boolean = true;
    toggleImage(){
        console.log(`toggleImage clicked`);
        this.showImage = !this.showImage;
    }
    

}
