import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  firstName = '';
  lastName = '';
  email = '';
  message = '';

  onSubmit(formData: any) {
    let validation = false;
    let score = 0;
    let errorMessage = '';

    formData.firstName.length > 2 ? score++ : errorMessage = 'First Name must be longer than 2 character\n';
    console.log('Score =>', score);

    formData.lastName.length > 2 ? score++ : errorMessage += 'Last Name must be longer than 2 character\n';
    console.log('Score =>', score);

    formData.email.indexOf('@') > 1 ? score++ : errorMessage += 'Your email must have a @\n'; 
    console.log('Score =>', score);

    formData.email.indexOf('.') > formData.email.indexOf('@') +2 &&  formData.email.indexOf('.') != formData.email.length - 2 ? score++ : errorMessage += 'Your email must have a dot\n'; 
    console.log('Score =>', score);

    score > 3 ? validation = true : null;

    const headers = new HttpHeaders();
    headers.set('Content-type','application:x-www-for-urlencoded')

    if (validation) {
      this.http.post("https://httpbin.org/post",formData,{headers}).subscribe(
        (response) => {
          console.log('RETOUR PAR LE SERVEUR DISTANT =>', response);
          if (response ) {
            console.log('C\'est tout bon')
            this.router.navigateByUrl('/about');
          } 
        }
      )
    } else {
      alert('ERROR\n' + errorMessage)
    }
  }

  constructor(private http:HttpClient, private router:Router) {}

  ngOnInit(): void {}
}
