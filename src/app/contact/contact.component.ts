import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  mail = true
  ngOnInit() {
  }

  switchTo(){

    this.mail = !this.mail;
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_nDKMcbBB', e.target as HTMLFormElement, 'user_fVct1I6po7yoKhCN7uEpw')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
}
