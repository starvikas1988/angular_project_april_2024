import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {

   customers: any= [
    { 
      customerId: 201, 
      name: 'John Doe', 
      email: 'john.doe@example.com', 
      phone: '555-1234', 
      address: '123 Main St, Springfield', 
      gender: 'male' 
    },
    { 
      customerId: 202, 
      name: 'Jane Smith', 
      email: 'jane.smith@example.com', 
      phone: '555-5678', 
      address: '456 Elm St, Metropolis', 
      gender: 'female' 
    },
    { 
      customerId: 203, 
      name: 'Michael Brown', 
      email: 'michael.brown@example.com', 
      phone: '555-8765', 
      address: '789 Maple Ave, Gotham', 
      gender: 'male' 
    },
    { 
      customerId: 204, 
      name: 'Emily Davis', 
      email: 'emily.davis@example.com', 
      phone: '555-4321', 
      address: '101 Oak St, Star City', 
      gender: 'female' 
    },
    { 
      customerId: 205, 
      name: 'David Wilson', 
      email: 'david.wilson@example.com', 
      phone: '555-2468', 
      address: '202 Pine St, Central City', 
      gender: 'male' 
    }
  ];

  customerKeys : any = '';

 // customerKeys = Object.keys(customers);

 //vikas

  

  ngOnInit(){
    console.log("Vikas");
  }

}
