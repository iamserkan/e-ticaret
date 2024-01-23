import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  private apiUrl = 'http://localhost:3000/api/products';
  mongoData: any[] = [];


  constructor(private http: HttpClient,private modalController:ModalController) {}

  ngOnInit() {
    this.getProducts();
  }

  ionViewDidEnter() {
    this.getProducts();
  }

  async openModal() {
    const modal = await this.modalController.create({
      component:ModalComponent,
      componentProps: {
        modalTitle: 'Bilgi Formu'
      }
    });
    return await modal.present();
  }

  getProducts() {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data) => {
        console.log(data);
        this.mongoData = data;
      },
      (err: any) => console.log(err)
    );
  }


}
