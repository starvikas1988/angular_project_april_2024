import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assignment-one',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './assignment-one.component.html',
  styleUrl: './assignment-one.component.css'
})

//commonModule is used for ngIf ,ngFor directive and FormsModule is used so that we can use [(ngModel)]
export class AssignmentOneComponent {
  flag:boolean = true

  text:String = ''

  data:any = 100

  maxLength: number = 100;

  value:String = 'UP'

  states: string[] = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
    'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim',
    'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand',
    'West Bengal'
  ];

  selectedState: string = '';

  onSelectState(event: any) {
    this.selectedState = event.target.value;
  }

  toogleData(){
    this.flag=!this.flag
  }

   get remainingCharacters(): number {
    return this.maxLength - this.text.length;
  }

  isDarkMode: boolean = false;

  toggletheme(){
    this.isDarkMode = !this.isDarkMode
    if(this.isDarkMode == true){
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
    }else{
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    }
  }
}
