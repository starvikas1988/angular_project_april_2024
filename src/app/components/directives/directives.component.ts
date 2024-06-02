import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  n = 4;
  cars = ['Tata', 'Honda', 'Maruti', 'Hundai', 'Mahindra'];

  headers:string[]  = []

  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' },
  ];

  //using lifecycle hook ,on initionalization of the DirectivesComponent it will run 

  ngOnInit(){
    if(this.employees.length > 0){
      //getting the keys from the 1st object in the array and storing the value in the array of string type,then we will loop it to get the dynamic headers.

      this.headers = Object.keys(this.employees[0]) 
      
    }
  }
}
