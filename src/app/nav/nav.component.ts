import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc'
import { authCodeFlowConfig } from '../auth.config';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private oauthService: OAuthService) {
    this.configureSingleSignOn();
   }

  ngOnInit(): void {
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

  plantsearch(e) {
    e.preventDefault();
    console.log('You searched for a plant!')
  }
}
