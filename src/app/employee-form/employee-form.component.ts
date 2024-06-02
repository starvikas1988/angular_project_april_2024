import { CommonModule } from '@angular/common';
import { Component,EventEmitter,OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Employee {
  eId: number;
  name: string;
  sal: number;
  gender: string;
}
@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css',
  inputs:["employee"],
  outputs:["add"]
})
//export class EmployeeFormComponent implements OnChanges {
  export class EmployeeFormComponent {
  add = new EventEmitter<Employee>();
  // employee: Employee | null = null;

  isEditMode: boolean = false;
    ngOnChanges(){
      console.log("Parent data changed");
    }
  set employee(value: Employee | null) {
    console.log("i am a setter");
    if (value) {
      this.newEmployee = { ...value }; //shallow copy
      this.isEditMode = true;
    } else {
      this.resetForm();
      this.isEditMode = false;
    }
  }

  newEmployee: Employee = { eId: 0, name: '', sal: 0, gender: '' };

  addEmployee() {
    this.add.emit(this.newEmployee);
    this.resetForm();
  }

  resetForm() {
    this.newEmployee = { eId: 0, name: '', sal: 0, gender: '' };
  }
}
