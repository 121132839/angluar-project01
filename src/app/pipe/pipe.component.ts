import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  private birthday: Date;
  private toggle: boolean = true;

  constructor() {
    this.birthday = new Date(1996, 7, 19);
  }

  ngOnInit() {
  }


  change() {
    this.toggle = !this.toggle;
  }

  get dateformat() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }
}
