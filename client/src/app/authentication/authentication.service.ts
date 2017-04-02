import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import { TokenService } from "./token.service";
import { Observable } from "rxjs";

@Injectable()
export class AuthenticationService {

  constructor(private _http : Http, private _tokenService: TokenService) { }


  login(email: string, password: string) {
    let loginInfo = {email: email, password: password}
    let headers = new Headers({'Content-Type': 'application/json'})
    let option = new RequestOptions({headers: headers})
      return this._http.post('/server/login',JSON.stringify(loginInfo), option)
          .do(response => {
            if(response) {
                this._tokenService.setToken(response.json().token)
            }
          }).catch(error => {
            return Observable.of(false)
          })
  }
}