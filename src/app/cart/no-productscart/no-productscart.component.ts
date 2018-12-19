import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-no-productscart',
  templateUrl: './no-productscart.component.html',
  styleUrls: ['./no-productscart.component.scss']
})
export class NoProductscartComponent implements OnInit {

  @Input("title") title: String;
  @Input("description") description: String;

  constructor() {}

  ngOnInit() {}

}
