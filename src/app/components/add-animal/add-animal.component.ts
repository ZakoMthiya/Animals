import { Component, OnInit } from '@angular/core';
import { AnimalsService } from 'src/app/services/animals.service';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {

  animal = {
    name: '',
    description: ''
  };
  submitted = false;

  constructor(private animalsService: AnimalsService) { }

  ngOnInit(): void {
  }

  addAnimal(): void {
    const data = {
      name: this.animal.name,
      description: this.animal.description
    };

    this.animalsService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newAnimal(): void {
    this.submitted = false;
    this.animal = {
      name: '',
      description: ''
    };
  }


}
