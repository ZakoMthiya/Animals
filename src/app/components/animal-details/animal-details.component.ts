import { Component, OnInit } from '@angular/core';
import { AnimalsService } from 'src/app/services/animals.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {

  currentAnimal = null;
  feedback = '';

  constructor(
    private animalsService: AnimalsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.feedback = '';
    this.getAnimal(this.route.snapshot.paramMap.get('id'));
  }

  getAnimal(id): void {
    this.animalsService.get(id)
      .subscribe(
        data => {
          this.currentAnimal = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  // updatePublished(status): void {
  //   const data = {
  //     title: this.currentTutorial.title,
  //     description: this.currentTutorial.description,
  //     published: status
  //   };

  //   this.tutorialService.update(this.currentTutorial.id, data)
  //     .subscribe(
  //       response => {
  //         this.currentTutorial.published = status;
  //         console.log(response);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  updateAnimal(): void {
    this.animalsService.update(this.currentAnimal.id, this.currentAnimal)
      .subscribe(
        response => {
          console.log(response);
          this.feedback = 'The tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteAnimal(): void {
    this.animalsService.delete(this.currentAnimal.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/animals']);
        },
        error => {
          console.log(error);
        });
  }

}
