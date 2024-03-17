import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online{
            color: darkgreen;
            font-size: 20px;
            font-family: consolos;
        }
    `]
})
export class ServerComponent{

    serverId = 1;
    serverStatus = 'online';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus == 'online' ? 'lightgreen' : 'rgb(236, 144, 144)';
    }
    
}