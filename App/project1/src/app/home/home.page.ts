import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private apiUrl = 'http://localhost:3001/api/login';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  login(): void {
    if (this.email && this.password) {
      const loginPayload = { email: this.email, password: this.password };

      this.http.post(this.apiUrl, loginPayload).subscribe(
        (data) => {
          console.log(data);
          // İstediğiniz şekilde yanıtı işleyin
        },
        (err: any) => console.log(err)
      );
    } else {
      console.error('E-posta ve şifre gereklidir.');
    }
  }
  }
  




