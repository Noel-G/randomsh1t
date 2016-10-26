import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let directivesHowToUse = `
      Using a directive:
      1- import it in app.module.ts
      2- declare it in @NgModule declarations (still in app.module.ts)
      3- add it in HTML
    `;

    let servicesDefinition = `
      Services are Classes that provide Data to the application.
      // dependencies injection
      A service fetches data from RESTFUL WebService or..
      create it with: ng g service nameOfService
    `;

    const servicesHowToUse = `
      import it in app.module
      then in @NgModule providers
    `;

    const modulesNotes = `
      Angular2 apps are modular. Every app has at least one NgModule.
      In the @NgModule decorator we declare our declarations, imports, providers and bootstrap
    `;

    const otherNotes = `
      "providers" provide data for Components (declared in "declarations")
      pipes are angular's filters. create them with ng g pipe nameOfPipe.
    `;

    enum topicsCoveredSoFar {
      Components,
      Directives,
      Services,
      Pipes
    }

    const routingDefinition = `
      Routing controls the flow of our application, based on the url.
      It can decide which component to show or where to be redirected.
      Add: <base href="/"> to the index.html. It says that index.html is our homepage.
      Then add a routing file: app.routing.ts and import it in app.module.ts and in imports
      Then add <router-outlet></router-outlet> in app.component.html
    `;


    enableConsoleNotes(false);

    function enableConsoleNotes(enable: boolean = true) : void {
      if(enable) {
        console.log(directivesHowToUse);
        console.log(servicesDefinition);
        console.log(servicesHowToUse);
        console.log(otherNotes);
        console.log(topicsCoveredSoFar);
      }
    }


  }
}
