import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuListResolver } from './business-unit-display/bu-list.resolver';
import { BusinessUnitDisplayComponent } from './business-unit-display/business-unit-display.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';

const routes: Routes = [
    { path: 'businessunit', 
    component: BusinessUnitDisplayComponent,
    resolve: { data: BuListResolver },
  },
    { path: '', component: HomeScreenComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
