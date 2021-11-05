import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { productos } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  datos: any[] = [];
  persona:any[]=[];
  activo: any = {};
  prod:productos={};

  constructor(private http: HttpClient) { }

//Obtener respuesta de la API
getAll() {
  return new Promise((resolve, rejec) => {
  this.http.get(environment.url+'E2MW-MBCM-VQYM-ES68').subscribe(response => {
    const datos = response;
    this.persona = Object.values(this.datos);
   console.log(this.persona);
  });
  });
}
}
