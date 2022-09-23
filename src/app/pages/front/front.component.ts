import { Component, OnInit } from '@angular/core';
import { FrontService } from '../service/front.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {
   
  public productList : any;

  constructor(private api:FrontService) { }

  
  ngOnInit(): void {

    this.api.getproduct().subscribe(
      response=>{
      this.productList = response;},
      error=>{console.log(error);
      }
      )
      
    
  }

}
