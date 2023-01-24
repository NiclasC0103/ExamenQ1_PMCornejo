import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  constructor(private router: Router) { }
  nom:any
  ape:any
  dir:any
  cel:any
  age:any
  ngOnInit(): void {
    this.recibir()
  }
  home(){
    this.router.navigate(['']);
  }
  recibir(){
    this.nom=localStorage.getItem("nombre")
    this.ape=localStorage.getItem("apellido")
    this.dir=localStorage.getItem("direccion")
    this.cel=localStorage.getItem("celular")
    this.age=localStorage.getItem("edad")
  }
}
