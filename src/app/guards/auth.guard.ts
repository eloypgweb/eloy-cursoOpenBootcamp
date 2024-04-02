import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // return true; --> cargamos la ruta
  // return false; -- no cargamos la ruta


  let token = sessionStorage.getItem('token');

  if (token) {
    return true;
  } else {
    return false;
  }
};
