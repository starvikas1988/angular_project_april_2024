import { Component } from '@angular/core';

import { EmployeeTableComponent } from '../employee-table/employee-table.component';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

interface Employee {
  eId: number;
  name: string;
  sal: number;
  gender: string;
}


@Component({
  selector: 'app-employee-main',
  standalone: true,
  imports: [EmployeeTableComponent,EmployeeFormComponent,CommonModule,FormsModule],
  templateUrl: './employee-main.component.html',
  styleUrl: './employee-main.component.css',
})
export class EmployeeMainComponent {
    employees = [
      { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
      { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
      { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
      { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
      { eId: 105, name: 'deepak', sal: 8000, gender: 'male' },
    ];

  selectedEmployee: Employee | null = null;
  isEditing: boolean = false;
  editingIndex: number | null = null;

  addEmployee(employee: Employee) {
    if (this.isEditing && this.editingIndex !== null) {
      this.employees[this.editingIndex] = { ...employee };
      Swal.fire('Updated Successfully', '', 'success');
      this.isEditing = false;
      this.editingIndex = null;
    } else {
      this.employees.push(employee);
      Swal.fire('Added Successfully', '', 'success');
    }
  }


  editEmployee(employee: Employee, index: number) {
    this.selectedEmployee = { ...employee };
    this.isEditing = true;
    this.editingIndex = index;
  }

  deleteEmployee(index: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.employees.splice(index, 1);
        Swal.fire('Deleted!', 'The employee has been deleted.', 'success');
      }
    });
  }

  // deleteEmployee(index: number) {
  //   this.employees.splice(index, 1);
  // }

}
