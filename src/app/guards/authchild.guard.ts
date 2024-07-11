import { CanActivateChildFn } from '@angular/router';

export const authchildGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
