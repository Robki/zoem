import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PageComponent } from './page/page.component';
import { CarsresultComponent } from './carsresult/carsresult.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'page'},
  {path: 'about', component: AboutComponent},
  {path: '', component: PageComponent},
  {path: 'carsresult', component: CarsresultComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }