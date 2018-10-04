import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers',
  //selector: '[app-servers]',
  selector:'.app-servers',
  // template:`<app-server></app-server>
  //           <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  
  allowNewServer = false;
  serverCreationStatus = "no server was created";
  serverName = 'server1';
  serverCreated=false;
  servers = ['TestServer', 'TestServer 1']
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = "server created" + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  //event is of type 'Event'
  onUpdateServer(event: Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
