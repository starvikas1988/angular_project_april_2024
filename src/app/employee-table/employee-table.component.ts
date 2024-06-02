import { CommonModule} from '@angular/common';
import { Component,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Employee {
  eId: number;
  name: string;
  sal: number;
  gender: string;
}

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css',
  inputs:["employees"],
  outputs:["edit","delete"]
})
export class EmployeeTableComponent {
  //employees:any = [];
  employees: Employee[] = [];
  selectedEmployee: Employee | null = null;

  edit = new EventEmitter<{ employee: Employee, index: number }>();
  delete = new EventEmitter<number>();

  viewEmployeeDetails(employee: Employee) {
    this.selectedEmployee = employee;
  }
  editEmployee(employee: Employee, index: number) {
    this.edit.emit({ employee, index });
  }
  deleteEmployee(index: number) {
    this.delete.emit(index);
  }

  clearSelectedEmployee() {
    this.selectedEmployee = null;
  }
}
