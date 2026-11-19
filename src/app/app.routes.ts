import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Convite } from './pages/convite/convite';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "convite",
        component: Convite
    },
    {
        path: "convite/:token",
        component: Convite
    },
    {
        path: ":token",
        component: Home
    }
];
