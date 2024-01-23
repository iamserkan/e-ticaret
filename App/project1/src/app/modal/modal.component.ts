import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent  implements OnInit {

  @Input() modalTitle: string = '';
 formData: { name: string; stock: string,category:string,description:string } = { name: '', stock: '',category:'',description:''};

  constructor(private modalController: ModalController,private storage:AngularFireStorage) {}
  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }


  onFileChange(event: any) {
    console.log('File change event triggered');

    const fileList: FileList = event.target.files;
  
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const filePath = `images/${file.name}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);
  
      // Upload işlemi tamamlandığında
      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(downloadURL => {
            console.log('Resim yüklendi. İndirme URL\'si:', downloadURL);
            // İndirme URL'sini kullanarak istediğiniz işlemleri yapabilirsiniz.
            localStorage.setItem('download',downloadURL);
          });
        })
      ).subscribe();
    }

}
submitForm() {
  // Handle form submission logic here
  console.log('Form submitted:', this.formData);

  // Optionally, you can add further logic like sending the form data to a server
  // Example:
  // this.yourDataService.postFormData(this.formData).subscribe(response => {
  //   console.log('Server response:', response);
  // });

  // Close the modal after form submission
  this.closeModal();
}
}
