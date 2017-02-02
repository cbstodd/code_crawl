import { Component } from '@angular/core';

@Component({
    selector: 'cc-ng-for',
    templateUrl: './ng-for.component.html',
    styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {

    peopleByCountry:any[] = [
        {
            "country": "Canada",
            "people": [

                { "name": "Tommy Bradel" },
                { "name": "Colin Stodd" }

            ]
        },
        {
            "country": "Russia",
            "people": [
                { "name": "Raney Stodd" },
                { "name": "Brian Stodd" },
                { "name": "Kevin Stodd" }
            ]
        }


    ];

    people:any[] = [
        {
            "name": "Colin Stodd",
        },
        {
            "name": "Raney Stodd"
        }, {
            "name": "Brian Stodd",
        },
        {
            "name": "Kevin Stodd"
        }
    ];

    // componentName.component.ts
    showPerson:boolean = false;
    showToggle(){
        this.showPerson = !this.showPerson;
    }


}
