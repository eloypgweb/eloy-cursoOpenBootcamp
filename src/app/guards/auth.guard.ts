import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // return true; --> cargamos la ruta
  // return false; -- no cargamos la ruta
  return false;
};
