import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

interface Employee {
  eId: number;
  name: string;
  sal: number;
  gender: string;
}

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {

  employees: Employee[] = [
    { eId: 101, name: 'Sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'Geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'Sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'Sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'Deepak', sal: 8000, gender: 'male' },
  ];

  selectedEmployee: Employee | null = null;
  newEmployee: Employee = { eId: 0, name: '', sal: 0, gender: '' };
  isEditing : boolean = false
  editingIndex:number | null = null;

  addEditEmployee() {
    if(this.isEditing == true){
      if(this.editingIndex != null){
        this.employees[this.editingIndex] = {...this.newEmployee}
        Swal.fire("Updated Successfully","","success")
        this.newEmployee = { eId: 0, name: '', sal: 0, gender: '' };
        this.isEditing = false;
      }
      
    }else{
      if (this.newEmployee.eId && this.newEmployee.name && this.newEmployee.sal && this.newEmployee.gender) {
        this.employees.push({ ...this.newEmployee });
        Swal.fire('Added Successfully', '', 'success');
        this.newEmployee = { eId: 0, name: '', sal: 0, gender: '' };
      } else {
        Swal.fire('Please fill all the fields', '', 'error');
      }
    }
    
  }

  editEmployee(employee:Employee,index:number){
    console.log(employee,index);
    this.newEmployee = {...employee}
    this.isEditing = true;
    this.editingIndex = index;
  }

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
        this.newEmployee = { eId: 0, name: '', sal: 0, gender: '' };
      }
    });
  }

  viewEmployeeDetails(employee: Employee) {
    this.selectedEmployee = employee;
  }

  clearSelectedEmployee() {
    this.selectedEmployee = null;
  }

}
