import { Component, OnInit, OnDestroy } from '@angular/core';
import { PoPageLogin } from '@po-ui/ng-templates';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { AuthorizationService } from '../authorization/authorization.service';
import { MessagesService } from '../messages/messages.service';
import { environment } from 'src/environments/environment';
import { UserLogin } from '../authorization/model/user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public isLoading: boolean;
  public logo: string;
  public secondaryLogo: string;
  private subs = new Subscription();

  constructor(
    private route: Router,
    private authService: AuthorizationService,
    private messageService: MessagesService
  ) {
    this.logo = `../../${environment.IMAGES_PATH}/bytebank.png`;
    this.secondaryLogo = `../../${environment.IMAGES_PATH}/bytebank.png`;
  }

  ngOnInit() {
    this.authService.logout();
    this.isLoading = false;
  }

  onloginSubmit(formData: PoPageLogin): void {
    const user: UserLogin = {
      userName: formData.login,
      password: formData.password,
      remindUser: formData.rememberUser,
    };
    this.login(user);
  }

  private login(user: UserLogin): void {
    this.isLoading = true;

    this.subs.add(
      this.authService.login(user).subscribe(
        () => {
          this.isLoading = false;
          const redirect = this.authService.redirectUrl
            ? this.authService.redirectUrl
            : '/home';
          this.route.navigate([redirect]);
        },
        (error: HttpErrorResponse) => {
          this.isLoading = false;
          this.messageService.showMessageError('Senha inválida');
          this.route.navigate(['/login']);
        }
      )
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
