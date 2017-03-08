import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JokeComponent } from './joke/joke.component';
import { JokeListComponent } from './joke/joke-list/joke-list.component';
import { JokeFormComponent } from './joke/joke-form/joke-form.component';
import { NgForComponent } from './directives/ng-for/ng-for.component';
import { CardComponent } from './directives/card/card.component';
import { CardHoverDirective } from './directives/card-hover.directive';
import { DefaultImagePipe } from './default-image.pipe';
import { BadWordPipe } from './bad-word.pipe';
import { ModelFormComponent } from './forms/model-form/model-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { HttpComponent } from './http/http.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        JokeComponent,
        JokeListComponent,
        JokeFormComponent,
        NgForComponent,
        CardComponent,
        CardHoverDirective,
        DefaultImagePipe,
        BadWordPipe,
        ModelFormComponent,
        ReactiveFormComponent,
        TemplateFormComponent,
        HttpComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
