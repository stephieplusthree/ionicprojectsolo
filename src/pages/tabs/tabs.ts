import { Component } from '@angular/core';
import { HomePage } from '../home/home'
import { LoginPage } from '../login/login'
import { RegisterPage } from '../register/register'



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  /*The class properties of a TABS page will point to the pages 
  that you want to be able to route to.*/
  tab1Root = HomePage;
  tab2Root = LoginPage;
  tab3Root = RegisterPage;





  
  constructor() {

  }
}
