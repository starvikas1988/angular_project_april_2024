import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  name: string = 'Sachin Tendulkar';
  address: string = 'Mumbai';
  sachin_url: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4A17VoL2sBx2CyDBPCU1oPIFIsBDU6tblyd_uv0ddIw&s'
  flag: boolean = true;
  num1: number = 10;
  num2: number = 20;

  f1() {  
    alert('I am f1...')
  }
  addition(a: any, b: any) {
    console.log(+a + +b)
  }
}
