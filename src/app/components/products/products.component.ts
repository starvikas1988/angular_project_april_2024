import { Component } from '@angular/core';

import * as data from './products.json'

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  // "compilerOptions": { add this -> ("resolveJsonModule": true)  in tsconfig.json under compilerOptions object}
  products = (data as any).default;  

 // products : any = []
  
}
