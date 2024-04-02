import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomePageComponent},
    { path: 'login', component: LoginPageComponent },
    { path: 'contacts', component: ContactsPageComponent, canActivate: [authGuard]},
    { path: 'contacts/:id', component: ContactDetailPageComponent, canActivate: [authGuard] },
    { path: '**', component: NotFoundPageComponent }

];
