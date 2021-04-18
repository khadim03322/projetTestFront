import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-composant1',
  templateUrl: './composant1.component.html',
  styleUrls: ['./composant1.component.scss']
})
export class Composant1Component implements OnInit {

  @Input() inputData:any=[];
  asList=false;

  constructor() { }

  ngOnInit(): void {

    console.log("this.dataList.lenth",this.inputData.length);
    if(this.inputData.length==0)
    this.asList=false;
    else
    this.asList=true;

  }

  getColor(data:String)
  {   let couleur='green';

    if(data.length%2)
    return couleur='red';
  
    return  couleur;

  }

  
  

   

}
