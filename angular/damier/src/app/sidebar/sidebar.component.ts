import { Component, OnInit } from '@angular/core';
import {HomeService} from "../home.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private homeS: HomeService) { }

  ngOnInit(): void {

  }

  switchView(view:any){
    this.homeS.onFirstComponentButtonClick(view);

  }
}
