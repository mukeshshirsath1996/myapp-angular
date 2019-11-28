import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: any
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getEmployees().subscribe((response)=>{
      this.employees=response
    })
  }

}
