import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  username:string = 'hola';
  showSecretInfo:boolean = false;
  arrayMachin = [];
  arraySize = 0;
  constructor() { 
    
  }
  ngOnInit() {
  }
  resetearUsername(){
    this.username = '';
    return;
  }
  getColor(){
    return this.arraySize >= 5 ? 'blue':'transparent';
  }

  onDisplayDetails(){
    this.arrayMachin.push(Date.now());
    this.arraySize++;
    return this.showSecretInfo = !this.showSecretInfo;
  }



}
