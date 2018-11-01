import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { PanelService } from '../panel.service';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  providers: [PanelService]
})
export class PanelComponent implements OnInit {
  panels: FirebaseListObservable<any[]>; 

  constructor(private panelService: PanelService) { }

  ngOnInit() {
    this.panels = this.panelService.getPanels();
  }

}