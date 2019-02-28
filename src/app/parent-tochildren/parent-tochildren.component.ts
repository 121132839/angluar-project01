import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-tochildren',
  templateUrl: './parent-tochildren.component.html',
  styleUrls: ['./parent-tochildren.component.css']
})
export class ParentTochildrenComponent implements OnInit {

  //输入数据 不可改
  @Input()
  name: string;
  //输出数据 
  @Output()
  voted = new EventEmitter<boolean>();

  didVote = false;

  constructor() { }

  ngOnInit() {
  }

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }

}
