import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',      // Tag style selector
  // selector: '[app-servers]', // Directive style selector
  // selector: '.app-servers',  // Class styple selecor
  templateUrl: './servers.component.html',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Server Name';
  userName = '';
  serverCreated = false;
  serversList = ['Prod', 'Pre-Prod', 'QA'];

  constructor(){
     setTimeout(() =>{
        this.allowNewServer = true;
     }, 2000)
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serversList.push(this.serverName);
    this.serverCreationStatus = "Server " + this.serverName + " is created!";
  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }

}
