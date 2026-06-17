import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Portfolio } from './pages/portfolio/portfolio';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent
    },

    {
        path: 'about',
        component: About
    },

    {
        path: 'services',
        component: Services
    },

    {
        path: 'portfolio',
        component: Portfolio
    },

    {
        path: 'contact',
        component: Contact
    }

];