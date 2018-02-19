import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalenderPage } from '../calender/calender';
import { AddAutoDebitPage } from '../add-auto-debit/add-auto-debit';
import { OverviewPage } from '../overview/overview';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = CalenderPage;
  tab2Root: any = AddAutoDebitPage;
  tab3Root: any = OverviewPage;
  constructor(public navCtrl: NavController) {
  }
  
}
