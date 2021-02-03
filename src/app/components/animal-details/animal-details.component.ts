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
  editted = false;
  deleted = false;

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
          console.log(this.currentAnimal);
        },
        error => {
          console.log(error);
        });
  }

  updateAnimal(): void {
    this.animalsService.update(this.currentAnimal.id, this.currentAnimal)
      .subscribe(
        response => {
          console.log('What comes back ',response);
          this.editted = true;
          // this.feedback = 'The tutorial was updated successfully!';
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
          this.deleted = true;
        },
        error => {
          console.log(error);
        });
  }

  home(){
    this.router.navigate(['/animals']);
  }

}
