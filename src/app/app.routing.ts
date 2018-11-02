import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel/panel.component';

const appRoutes: Routes = [
    {
      path: '',
      component: PanelComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);