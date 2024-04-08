import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { NgModel, ReactiveFormsModule } from '@angular/forms';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './modules/material/material.module';

// Aquí importamos las cosas que necesitemos para el módulo de la aplicación
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    NgModel,
    ReactiveFormsModule,
    MaterialModule,
  ],
};
