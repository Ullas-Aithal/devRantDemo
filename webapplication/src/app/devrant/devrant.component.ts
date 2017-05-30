import { Component, OnInit } from '@angular/core';
import { RantapiService } from './rantapi.service';

@Component({
  selector: 'app-devrant',
  templateUrl: './devrant.component.html',
  styleUrls: ['./devrant.component.css']
})
export class DevrantComponent implements OnInit {

  rantId:number;
  constructor(private rantapi:RantapiService) { }

  ngOnInit() {

    this.rantapi.getRant().subscribe((data)=>{
     this.rantId = data.rant.id;
     
    });
  }

}
