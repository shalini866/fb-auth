import { SocialAuthService, FacebookLoginProvider } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'fb-auth';
  user:  any;
  loggedIn:  any;

 constructor(private authService: SocialAuthService) { }

signInWithFB(): void {
  this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
}
ngOnInit() {
  this.authService.authState.subscribe((user) => {
    this.user = user;
    console.log('user',this.user);
    this.loggedIn = (user != null);
  });
}
}
