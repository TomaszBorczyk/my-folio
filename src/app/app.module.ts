import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {AppComponent} from './app.component'
import {HeaderComponent} from './header/header.component'
import {NavigationComponent} from './header/navigation/navigation.component'
import {WelcomeComponent} from './welcome/welcome.component'
import {ProjectsComponent} from './projects/projects.component'
import {ProjectComponent} from './projects/project/project.component'
import {TechnologiesComponent} from './technologies/technologies.component';
import {TechnologyComponent} from './technologies/technology/technology.component';
import {AboutComponent} from './about/about.component';

@NgModule({

    imports: [
        BrowserModule,
        FormsModule,
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        NavigationComponent,
        WelcomeComponent,
        ProjectsComponent,
        ProjectComponent,
        TechnologiesComponent,
        TechnologyComponent,
        AboutComponent
    ],
    providers: [],
    bootstrap: [AppComponent]

})

export default class AppModule{}