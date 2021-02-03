import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAnimalComponent } from './components/add-animal/add-animal.component';
import { AnimalDetailsComponent } from './components/animal-details/animal-details.component';
import { AnimalsListComponent } from './components/animals-list/animals-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'animals', component: AnimalsListComponent },
  { path: 'animals/:id', component: AnimalDetailsComponent },
  { path: 'add', component: AddAnimalComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
