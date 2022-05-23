import { Component, OnInit } from '@angular/core';
import { Wine } from '../../Wine'
import { WinesService } from '../../services/wines.service'

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {
  wines: Wine[] = [];

  constructor(private winesService: WinesService) { }

  ngOnInit(): void {
  }

  addWine(wine: Wine) {
    this.winesService
      .addWine(wine)
      .subscribe((wine) => (this.wines.push(wine)))
  }


}
