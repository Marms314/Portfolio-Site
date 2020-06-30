import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projectName : String = "First Project";
  description : String = "This is a project. I had a lot of fun with it and learned many things."
  keywords : String[] = ["JavaScript", "HTML", "CSS"];
  screenshot : String = "assets/project-screenshots/first-project.png";
  githubLink : String = "aplace.com";

}
