import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})

export class FirstPage implements OnInit {
  url: string='';

  constructor(private navController:NavController) { }

  ngOnInit() {
  }

  navigate(url:string)
  {
    this.navController.navigateForward('/' + url);
  }

}
