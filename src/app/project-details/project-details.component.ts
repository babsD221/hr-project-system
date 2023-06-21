import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Employee, PROJECTS, Project  } from '../data'; // assuming the projects mock data is stored in a projects.ts file
import { employees, EmployeeNeeded } from '../data'; // assuming the employees mock data is stored in a employees.ts file

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  project: Project | undefined;
  availableEmployees: Employee[];
  neededProfiles: EmployeeNeeded[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get project id from route params
    const projectId = this.route.snapshot.paramMap.get('id');

    // get project by id
    this.project = PROJECTS.find(project => project.id === +projectId!);

    // get available employees for the project
    this.availableEmployees = employees.filter((employee: Employee) => 
    this.project!.employeesNeeded.some((needed: EmployeeNeeded) => needed.role === employee.role)
  );
      console.log(this.availableEmployees);

    // calculate needed profiles
    this.neededProfiles = this.calculateNeededProfiles();
  }

  calculateNeededProfiles(): any {
    const neededRoles = this.project?.employeesNeeded.reduce<Record<string, number>>((roles, neededEmployee) => {
      if (!roles[neededEmployee.role]) roles[neededEmployee.role] = 0;
      roles[neededEmployee.role] += neededEmployee.number;
      return roles;
    }, {});

    const availableRoles = this.availableEmployees.reduce<Record<string, number>>((roles, employee) => {
      if (!roles[employee.role]) roles[employee.role] = 0;
      roles[employee.role]++;
      return roles;
    }, {});

    const deficits: Record<string, number> = {};
    for (const role in neededRoles) {
      const deficit = neededRoles[role] - (availableRoles[role] || 0);
      if (deficit > 0) deficits[role] = deficit;
    }

    return deficits;
}


  
}

