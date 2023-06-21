import { Component, OnInit } from '@angular/core';
import { Project, PROJECTS } from '../data';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];

constructor(private router: Router) {

}
  ngOnInit(): void {
    this.projects = PROJECTS;
  }
  displayDetails(id: number) {
    console.log('mere lsdl');
    this.router.navigate(['/project-details', id]);
  }
}
