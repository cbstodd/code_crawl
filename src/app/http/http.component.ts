import { Component } from '@angular/core';
import { RequestOptions, Headers, Http, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';


@Component({
    selector: 'cc-http',
    templateUrl: './http.component.html',
    styleUrls: ['./http.component.css']
})
export class HttpComponent {

    apiRoot:string = "http://httpbin.org";

    constructor(private http:Http) {
    }

    doGET() {
        console.log("GET");
        let url    = `${this.apiRoot}/get`;
        let search = new URLSearchParams();
        search.set('foo', 'moo');
        search.set('limit', '25');
        this.http.get(url, { search }).subscribe(res => console.log(res.json()));
    }

    doPOST() {
        console.log("POST");
        let url    = `${this.apiRoot}/post`;
        let search = new URLSearchParams();
        search.set('foo', 'moo');
        search.set('limit', '25');
        this.http.post(url, { moo: "foo", goo: "loo" }, { search }).subscribe(res => console.log(res.json()));
    }

    doPUT() {
        console.log("PUT");
        let url    = `${this.apiRoot}/put`;
        let search = new URLSearchParams();
        search.set('foo', 'moo');
        search.set('limit', '25');
        this.http.put(url, { moo: "foto", goo: "loto" }, { search }).subscribe(res => console.log(res.json()));
    }

    doDELETE() {
        console.log("DELETE");
        let url    = `${this.apiRoot}/delete`;
        let search = new URLSearchParams();
        search.set('foo', 'moo');
        search.set('limit', '25');
        this.http.delete(url, { search }).subscribe(res => console.log(res.json()));
    }

    doGETAsPromise() {
        console.log("GET AS PROMISE");
        let url = `${this.apiRoot}/get`;
        this.http.get(url)
            .toPromise()
            .then(res => console.log(res.json()));
    }

    doGETAsPromiseError() {
        console.log("GET AS PROMISE ERROR");
        let url = `${this.apiRoot}/post`;
        this.http.get(url)
            .toPromise()
            .then(
                res => console.log(res.json()),
                msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
            );
    }

    doGETAsObservableError() {
        console.log("GET AS OBSERVABLE ERROR");
        let url = `${this.apiRoot}/post`;
        this.http.get(url).subscribe(
            res => console.log(res.json()),
            msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
        );
    }

    doGETWithHeaders() {
        console.log("GET WITH HEADERS");
        let headers:Headers = new Headers();
        headers.append('Authorization', btoa('username:password'));
        let opts:RequestOptions = new RequestOptions();
        opts.headers            = headers;
        let url                 = `${this.apiRoot}/get`;
        this.http.get(url, opts).subscribe(
            res => console.log(res.json()),
            msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
        );
    }
}
