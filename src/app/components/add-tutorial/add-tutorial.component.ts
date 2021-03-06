import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {
  tutorial = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit() {
  }
  createTutorial() {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description
    };
    this.tutorial.title=""
    this.tutorial.description=""
    this.tutorialService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
    console.log(data)

  }
  newTutorial(){
      this.submitted=false
  }
}
