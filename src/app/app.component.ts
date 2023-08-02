import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ViewEncapsulation } from '@angular/core';

interface AddressFromApi{
  cep: string
  logradouro: string
  numero: string
  complemento: string
  uf: string
  cidade: string
  bairro: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  cep = ''
  street = ''
  number = ''
  complement = ''
  uf = ''
  city = ''
  neighborhood = ''

  constructor (private http: HttpClient){}

  onInputCep = () => {
    if(this.cep.length === 8){
      this.http.get<AddressFromApi>('https://viacep.com.br/ws/01001000/json/')
          .subscribe((data) => {
            this.cep = data.cep
            this.street =  data.logradouro,
            this.complement = data.complemento,
            this.neighborhood = data.bairro,
            this.number = data.numero,
            this.city = data.cidade
            this.uf = data.uf
          })
    }
  }
}

