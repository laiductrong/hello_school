import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authtestGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.isAuthenticated() == false) {
        router.navigate(['/account']);
        return false;
    }
    if (state.url.includes('/academic')) {
      if (authService.getUserRole() === 'Teacher' || authService.getUserRole() === 'Manager') {
        return true;
      }}

    return true;
};
