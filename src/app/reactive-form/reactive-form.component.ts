import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';

@Component({
    selector: 'cc-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

    constructor() {
    }

    searchField:FormControl;
    searches:string[] = [];

    ngOnInit() {
        this.searchField = new FormControl();

        this.searchField.valueChanges
            .debounceTime(900)
            .distinctUntilChanged()
            .subscribe(term => {
                this.searches.push(term);
            })
    }


}
