import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayAreaComponent } from './components/display-area/display-area.component';
import { AddComponent } from './components/add/add.component';
import { AddPageComponent } from './components/add-page/add-page.component';
const routes: Routes = [
  { path: '', component: DisplayAreaComponent },
  {path: 'add', component: AddPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
