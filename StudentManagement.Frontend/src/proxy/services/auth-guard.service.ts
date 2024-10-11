import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    response!: any;


    constructor(
        private messageService: MessageService,
        private router: Router,
        private authService: AuthService
    ) { }


    async canActivate(_route: any, state: RouterStateSnapshot): Promise<boolean> {
        const jwtToken = this.authService.getJwtToken();
        if (!jwtToken) {
            const refreshToken = this.authService.getRefreshToken();
            if (refreshToken) {
                try {
                    const res = await this.authService.refreshToken().toPromise();
                    if (res.isSuccess) {
                        return true;
                    } else {
                        this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
                        return false;
                    }
                } catch (error) {
                    console.error(error);
                    this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
                    return false;
                }
            } else {
                console.log("No Refresh Token");
                this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
                return false;
            }
        }
    
        this.validateRequest.token = jwtToken;
    
        try {
            const isAuthorised = await this.authService.decodeToken(this.validateRequest.token);
            if (isAuthorised) {
                return true;
            } else {
                try {
                    const res = await this.authService.refreshToken().toPromise();
                    if (res.isSuccess) {
                        return true;
                    } else {
                        this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
                        return false;
                    }
                } catch (error) {
                    console.error(error);
                    this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
                    return false;
                }
            }
        } catch (error) {
            console.error(error);
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: "Error Occured While Trying to Authorise",
                life: 3000
            });
            this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }

    }

    
    

}
