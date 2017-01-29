export class Joke {
    constructor(
        public setup:string,
        public punchline:string,
        public hide:boolean = true
    ) {
    }

    togglePunchline() {
        this.hide = !this.hide;
    }
    
}
