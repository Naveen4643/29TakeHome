import { Component, OnInit } from '@angular/core';

import { SalesPerson } from '../sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  name: String ="Naveen"

  s1: SalesPerson =new SalesPerson("Nani","Alakunta","naveen@gmail.com",29000,200)
 
  saleslist : SalesPerson [] =[this.s1,
                          new SalesPerson("Naveen", "Alakunta", "naveen@gmail.com", 10000, 200),
                          new SalesPerson("Lucky","A","lucky@gmail.com",39000,300),
                          new SalesPerson("Akanksha","a","akanksha@gmail.com",49000,100)]
formModel : SalesPerson=new SalesPerson("","","",0,0);  
  
constructor() { }
  

  onSubmit(){
    this.saleslist.push(this.formModel)
  }
  ngOnInit(): void {
    console.log(this.formModel);
    
  }

}
