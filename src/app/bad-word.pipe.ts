import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'badWord'
})
export class BadWordPipe implements PipeTransform {

    transform(value:string, badWords:string):string {
        let badWordsList = badWords.split(',').map((item) => item.trim());
        console.log(badWordsList);
        for (let badWord of badWordsList) {
            value = value.replace(badWord, "****");
            console.log(value);
        }
        return value;
    }
}