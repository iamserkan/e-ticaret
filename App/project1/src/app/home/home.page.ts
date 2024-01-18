import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email: string='';
  password: string='';
  
  constructor(private navCtrl:NavController,private http: HttpClient,private apiService:ApiService) { }
  

  ngOnInit() {
  }
  login() {
    if (this.email && this.password) {
      // AuthenticationService kullanarak giriş işlemini gerçekleştir
      this.apiService.login(this.email, this.password).subscribe(
        (response) => {
          // Başarılı giriş durumu
          console.log('Login successful');
          // Token'ı saklamak veya başka işlemler gerçekleştirmek için burada kullanabilirsiniz.

          // Örneğin, başka bir sayfaya yönlendirme
          this.navCtrl.navigateRoot('/dashboard');
        },
        (error) => {
          // Giriş hatası durumu
          console.error('Login failed', error);
          // Hata durumunu kullanıcıya bildirebilir veya başka işlemler gerçekleştirebilirsiniz.
        }
      );
    }
  }
  

}


