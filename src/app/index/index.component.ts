import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  show: boolean = true;
  name: FormControl=new FormControl('');
  constructor() { }

  ngOnInit() {

  }
  updateName(){
    this.name.setValue('Nancy');
  }

}
