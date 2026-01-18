import { Routes } from '@angular/router';
import { Auth } from './components/auth/auth';
import { authGuard } from './guards/auth-guard';
import { Dashboard } from './components/dashboard/dashboard';

export const routes: Routes = [
    {
        path: 'auth',
        component: Auth,
        canActivate: [authGuard],
    },
    {
        path: '',
        canActivate: [authGuard],
        children: [
            {
                path: 'dashboard',
                component: Dashboard,
            }
        ]
    },
];
