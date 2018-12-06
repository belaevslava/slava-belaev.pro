import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects;
  details = {};
  categories: string[] = [
    'Landing',
    'Front-End',
    'Back-End',
    'Full Stack',
    'SPA'
  ];

  constructor(
    private projectsService: ProjectsService,
  ) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projectsService
        .getRepositories()
        .subscribe(projects => {
          this.projects = projects;
          projects.forEach(project => this.getProjectDetails(project.name));
        });
  }

  getProjectDetails(repositoryName) {
    this.projectsService
        .getRepositoryDetails(repositoryName)
        .subscribe(details => {
          this.details[repositoryName] = details;
        });
  }
}