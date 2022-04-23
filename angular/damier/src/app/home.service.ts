import {EventEmitter, Injectable} from '@angular/core';
import {Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  invokeFirstComponentFunction = new EventEmitter();
  // @ts-ignore
  subsVar: Subscription;

  constructor() { }


  onFirstComponentButtonClick(view:any) {
    this.invokeFirstComponentFunction.emit(view);
  }

}
