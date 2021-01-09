import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc'
import { authCodeFlowConfig } from '../auth.config';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { ApiService } from '../api.service'
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private oauthService: OAuthService, private _apiService: ApiService, private fb: FormBuilder ) {
    // this.configureSingleSignOn();
   }

   SearchForm: FormGroup;

  ngOnInit() {
    this.SearchForm = this.fb.group({
      search: ''
    })

  }


  configureSingleSignOn() {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
  login() {
    console.log("login");
    this.oauthService.initImplicitFlow();
  }

  logout() {
    console.log("logout");
    this.oauthService.logOut();
  }

  get token() {
    let claims:any = this.oauthService.getIdentityClaims();

    return claims ? claims : null;
  }

  plantSearch(e) {
    e.preventDefault();
    console.log(this._apiService, 'this is the service')
    let plant = this.SearchForm.get("search").value
    this._apiService.plantSearch(plant,1).subscribe(data => {
      console.log(data, 'this will have to do')
      this._apiService.results = data["data"]
    },
    (error) => {
      console.log(error, 'there is a huge issue')
   })
  }
}
