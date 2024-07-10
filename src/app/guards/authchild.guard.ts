import { CanActivateFn } from '@angular/router';

export const authchildGuard: CanActivateFn = (route, state) => {
  return true;
};
