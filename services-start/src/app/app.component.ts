import { Component } from '@angular/core';
import { on } from 'events';
import { AccuntsService } from './account.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  accounts: { name: string; status: string }[] = [];

  constructor(private accountsService: AccuntsService) { 
    
  }

  ngOnInit() { 
    this.accounts = this.accountsService.accounts
  }

}


// Angular Dependecy injector
// dependency = something our class depends on
// dependency injector = injects an instance of this class in to our component automatically.
// we inform angular with a constructor that we need such an instance
