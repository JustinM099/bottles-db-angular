import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayAreaComponent } from './components/display-area/display-area.component';
import { AddComponent } from './components/add/add.component';
const routes: Routes = [
  { path: '', component: DisplayAreaComponent },
  {path: 'add', component: AddComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
