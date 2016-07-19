import { provideRouter, RouterConfig } from '@angular/router';
import { TVComponent } from './TV/tv.component';

export const routes: RouterConfig = [
    { path: '/:searchTerm', component: TVComponent },
    { path: '/', component: TVComponent }   
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];