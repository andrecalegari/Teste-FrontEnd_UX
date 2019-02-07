import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dap-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  category = 'Passagens Aéreas';
  mesageWelcome='Encontre os melhores preços e boa viagem!';
  
  constructor() { }

  ngOnInit() {
  }

}
