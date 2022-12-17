import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  autor:any;
  constructor(){
    this.autor={nombre:"Daniel Sebastian", apellido:"Jimenez"};
  }
}
