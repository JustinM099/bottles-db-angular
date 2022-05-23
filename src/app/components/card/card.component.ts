import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Wine } from '../../Wine'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  wine!: Wine;

  constructor() { }

  ngOnInit(): void {
  }

}
