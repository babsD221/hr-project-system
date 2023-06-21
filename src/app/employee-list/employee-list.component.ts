import { Component, OnInit } from '@angular/core';
import { Employee, employees } from '../data';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] =[];

  ngOnInit(): void {
    this.employees = employees;
  }
}
