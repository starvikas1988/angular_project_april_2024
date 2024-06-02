import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormBuilder,Validators } from '@angular/forms';

import Swal from 'sweetalert2';

interface Employee {
  eId: number;
  name: string;
  sal: number;
  gender: string;
}

@Component({
  selector: 'app-employee-curd',
  standalone: true,
  imports: [ReactiveFormsModule ,CommonModule],
  templateUrl: './employee-curd.component.html',
  styleUrl: './employee-curd.component.css'
})
export class EmployeeCurdComponent {
  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' },
  ];

selectedEmployee: Employee | null = null;
employeeForm: FormGroup;

constructor(private fb: FormBuilder) {
  this.employeeForm = this.fb.group({
    eId: [null, Validators.required],
    name: ['', Validators.required],
    sal: [null, Validators.required],
    gender: ['', Validators.required]
  });
}

viewEmployeeDetails(employee: Employee) {
  this.selectedEmployee = employee;
}

addEmployee() {
  if (this.employeeForm.valid) {
    this.employees.push(this.employeeForm.value);
    Swal.fire('Added Successfully', '', 'success');
    this.employeeForm.reset();
  }
}

// addEmployee(employee: Employee) {
//   this.employees.push(employee);
//   Swal.fire('Added Successfully', '', 'success');
// }

deleteEmployee(eId: number) {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You won\'t be able to revert this!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.employees = this.employees.filter(emp => emp.eId !== eId);
      Swal.fire('Deleted!', 'The employee has been deleted.', 'success');
    }
  });
}

clearSelectedEmployee() {
  this.selectedEmployee = null;
}

}
