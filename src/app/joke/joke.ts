export class Joke {
    constructor(
        public setup:string,
        public punchline:string,
        public imageUrl:string,
        public hide:boolean = true
    ) {
    }

    togglePunchline() {
        this.hide = !this.hide;
    }

}
