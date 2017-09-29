import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DataListComponent } from './data-list/data-list.component';
import { ProcessJsonListComponent } from './process-json-list/process-json-list.component';

export const router : Routes = [
  // Default path
  { path : '', redirectTo:'dataList', pathMatch: 'full' },
  { path : 'dataList', component: DataListComponent },
  { path : 'processJson', component: ProcessJsonListComponent }
];

export const routes : ModuleWithProviders = RouterModule.forRoot(router);