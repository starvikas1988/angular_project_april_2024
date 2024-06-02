import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { AssignmentOneComponent } from '../assignment-one/assignment-one.component';
import { DirectivesComponent } from '../directives/directives.component';
import { ProductsComponent } from '../products/products.component';
import { EmployeeCurdComponent } from '../employee-curd/employee-curd.component';
import { TemplateDrivenFormComponent } from '../template-driven-form/template-driven-form.component';
import { EmployeeMainComponent } from '../../employee-main/employee-main.component';
import { CustomerListComponent } from '../../customer-list/customer-list.component';

@Component({
  selector: 'app-center',
  standalone: true,
  imports: [DatabindingComponent,AssignmentOneComponent,DirectivesComponent,ProductsComponent,EmployeeCurdComponent,TemplateDrivenFormComponent,EmployeeMainComponent,CustomerListComponent],
  templateUrl: './center.component.html',
  styleUrl: './center.component.css'
})
export class CenterComponent {

}
