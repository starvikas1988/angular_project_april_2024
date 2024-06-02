import { CommonModule } from '@angular/common';
import { Component , OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
interface Customer {
  customerId: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  gender: string;
}


@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit {

   customers: Customer[]= [
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

  customerKeys: string[] = [];

  selectedCustomer:Customer | null = null;

  isEditing: boolean=false;

  editingIndex: number | null = null

  newCustomer: Customer = { 
    customerId: 0, 
    name: '', 
    email: '', 
    phone: '', 
    address: '', 
    gender: '' 
  }

  ngOnInit(){
    if(this.customers.length > 0){
      this.customerKeys = Object.keys(this.customers[0]);
      // console.log(this.customerKeys);
      // console.log("---------------")
      // console.log(this.customers);
    }
  }

  viewCustomerDetails(customer:Customer){
    console.log("clicked")
    console.log(this.selectedCustomer)
    this.selectedCustomer=customer
 
  }
  addEditEmployee(){
    if(this.isEditing == true){
      if(this.editingIndex != null){
        this.customers[this.editingIndex] = {...this.newCustomer}
        Swal.fire("Updated Successfully","","success")
        this.newCustomer =  { 
          customerId: 0, 
          name: '', 
          email: '', 
          phone: '', 
          address: '', 
          gender: '' 
        }
        this.isEditing = false
      }
      console.log("edit")

    }else{
      if(this.newCustomer.name && this.newCustomer.customerId && this.newCustomer.email && this.newCustomer.gender && this.newCustomer.phone){
        this.customers.push({...this.newCustomer})
        //console.log(this.newCustomer);
        Swal.fire('Added Successfully', '', 'success');
        this.newCustomer = { 
          customerId: 0, 
          name: '', 
          email: '', 
          phone: '', 
          address: '', 
          gender: '' 
        }
      }else{
        Swal.fire('Please fill all the fields', '', 'error');
      }
      
    }
    
  }

  editEmployee(customer:Customer,index:number){
    this.newCustomer = {...customer}
    this.isEditing = true;
    this.editingIndex = index
  }
  deleteCustomer(index:number){
    this.newCustomer = { 
      customerId: 0, 
      name: '', 
      email: '', 
      phone: '', 
      address: '', 
      gender: '' 
    }
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result)=>{
      if(result.isConfirmed){
        this.customers.splice(index, 1);
        Swal.fire(
          'Deleted!',
          'Your customer has been deleted.',
          'success'
        );
      }
    })
  }

}
