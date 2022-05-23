import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Wine } from '../../Wine'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Output() onAddWine: EventEmitter<Wine> = new EventEmitter()
  producer!: string;
  wine!: string;
  vintage!: number;
  wineType!: string;
  region!: string;
  variety!: string;
  notes!: string;
  location!: string;
  quantity!: number;

  constructor() { }


  ngOnInit(): void {
  }

  onSubmit() {
    console.log('On Submit Hit')
    console.log(this)
    // if (!this.producer) {
    //   alert('Please add a producer')
    //   return
    // }
    // if (!this.quantity) {
    //   alert('Please add a quantity of bottles')
    //   return
    // }


    const newWine = {
      producer: this.producer,
      wine: this.wine,
      vintage: this.vintage,
      wineType: this.wineType,
      region: this.region,
      variety: this.variety,
      notes: this.notes,
      location: this.location,
      quantity: this.quantity,
    }

    console.log(newWine)

    this.onAddWine.emit(newWine)

  }

}
