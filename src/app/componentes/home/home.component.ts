import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  nom:any
  ape:any
  dir:any
  cel:any
  age:any
  ngOnInit(): void {
    this.enviar()
  }
  datos(){
    this.router.navigate(['factura']);
  }
  enviar(){
    localStorage.setItem("nombre", this.nom);
    localStorage.setItem("apellido", this.ape);
    localStorage.setItem("direccion", this.dir);
    localStorage.setItem("celular", this.cel);
    localStorage.setItem("edad", this.age);
  }
}
