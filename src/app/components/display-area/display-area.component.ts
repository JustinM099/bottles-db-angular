import { Component, OnInit } from '@angular/core';
import { Wine } from '../../Wine'
import { WinesService } from 'src/app/services/wines.service';

@Component({
  selector: 'app-display-area',
  templateUrl: './display-area.component.html',
  styleUrls: ['./display-area.component.css']
})
export class DisplayAreaComponent implements OnInit {
  wines: Wine[] = []

  constructor(private winesService: WinesService) { }

  ngOnInit(): void {
    this.winesService
    .getWines()
    .subscribe(wines => this.wines = wines)
  }

}
