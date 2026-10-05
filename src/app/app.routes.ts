import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Cronometro } from './components/cronometro/cronometro';
import { Convite } from './pages/convite/convite';
import { Header } from './components/header/header';
import { Historia } from './components/historia/historia';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path:"cronometro",
        component: Cronometro
    },
    {
        path:"convite",
        component: Convite
    },
    {
        path:"header",
        component: Header
    },
    {
        path:"historia",
        component: Historia
    }
];
