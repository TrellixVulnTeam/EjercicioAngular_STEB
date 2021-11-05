import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';

import { Router } from '@angular/router';

import { DatosService } from '../../servicio/datos.service';
import { productos } from '../../servicio/interfaces';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

 
  submited = false;
  nombres:any[]=[];
  Update:any={};

 

  constructor(private fb: FormBuilder, public rout: Router, public datos:DatosService) { 

    this.datos.getAll();
  }

  ngOnInit() {

  }


  //Método para crear validaciones..

  



  //Método para Guardar en la bd..
 save(){
 
 }

 //Obtiene la posición..
 update(){

 }

 //Actulizar registro..
 actualizar(){
  
 }

 //Eliminar registro por medio del ID..
 eliminar(){

 }
}
