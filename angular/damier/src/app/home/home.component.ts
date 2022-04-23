import { Component, OnInit } from '@angular/core';
import {HomeService} from "../home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  viewController :any;
  constructor(private homeS: HomeService) { }

  ngOnInit(): void {
    if (this.homeS.subsVar==undefined) {
      this.homeS.subsVar = this.homeS.
      invokeFirstComponentFunction.subscribe((name:string) => {
        this.switchView(name);
      });
    }
  }

  switchView(name: any){
  console.log(name);
  if(name == 'view1'){
    this.viewController = 'view1';
  }
  if(name == 'view2')
    this.viewController = 'view2';

  }

}
