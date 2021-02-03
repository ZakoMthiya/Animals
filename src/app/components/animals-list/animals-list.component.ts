import { Component, OnInit } from '@angular/core';
import { AnimalsService } from 'src/app/services/animals.service';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css']
})
export class AnimalsListComponent implements OnInit {

  animals: any;
  currentAnimal = null;
  currentIndex = -1;
  name = '';

  constructor(private animalsService: AnimalsService) { }

  ngOnInit(): void {
    this.getAnimals();
  }

  getAnimals(): void {
    this.animalsService.getAll()
      .subscribe(
        data => {
          this.animals = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.getAnimals();
    this.currentAnimal = null;
    this.currentIndex = -1;
  }

  setActiveAnimal(animal, index): void {
    this.currentAnimal = animal;
    this.currentIndex = index;
  }

  deleteAllAnimals(): void {
    this.animalsService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.getAnimals();
        },
        error => {
          console.log(error);
        });
  }

  searchAnimal(): void {
    this.animalsService.findByName(this.name)
      .subscribe(
        data => {
          this.animals = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
