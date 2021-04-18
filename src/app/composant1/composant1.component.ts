import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-composant1',
  templateUrl: './composant1.component.html',
  styleUrls: ['./composant1.component.scss']
})
export class Composant1Component implements OnInit {

  @Input() dataList:any=[];
  asList=false;

  constructor() { }

  ngOnInit(): void {

    if(this.dataList.lenth==0)
    this.asList=true;
    else
    this.asList=false;

  }

  getColor(data:String) :String
  {

    if(data.length%2)
    
    return 'red';
    else

    return  'green';

  }

  
  

   

}
