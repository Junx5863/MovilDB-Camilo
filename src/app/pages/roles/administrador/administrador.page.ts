import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss'],
})
export class AdministradorPage implements OnInit {
  constructor(public http: HttpClient, public router: Router) {}

  data;
  datos2;
  url = 'http://127.0.0.1/ionic/index.php';

  datosSend() {
    console.log(this.datos2);
    const dataDB = {"nombre": this.data, "edad": this.datos2};
    this.http.post(this.url, JSON.stringify(dataDB)).subscribe(eror => {
      if (eror == 1) {
        this.router.navigate(['datosmysql']);
      } else {
        console.log('Correcto');
      }
    })
  }

  ngOnInit() {}
}
