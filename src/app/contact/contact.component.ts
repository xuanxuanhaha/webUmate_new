import { Component, OnInit } from '@angular/core';
import { SendDataService } from '../send-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  customerName: any = '';
  customerEmail: any = '';
  customerMobile: any = '';
  customerSubject: any;
  customerMessage: any = '';

  nameShow: any = false;
  emailShow: any = false;
  mobileShow: any = false;
  invalidEmail: any = false;
  enquiryMessageShow: any = false;
  subjectShow: any = false;
  bigErrorShow: any = false;

  submitBut: any = 'Submit';
  showSuccessMessage: any = false;

  constructor(private sendData: SendDataService) { }

  ngOnInit(): void {
  }

  scrollDown() {
    const idSpace = document.getElementById('enquiry_section');
    idSpace.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

  formsubmit() {
    this.bigErrorShow = false;
    this.showSuccessMessage = false;

    if (!this.customerEmail) {
      this.emailShow = true;
    } else {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.customerEmail)) {
        this.invalidEmail = false;
      } else {
        this.invalidEmail = true;
      }
      this.emailShow = false;
    }

    if (!this.customerName) {
      this.nameShow = true;
    } else {
      this.nameShow = false;
    }

    if (!this.customerMobile) {
      this.mobileShow = true;
    } else {
      this.mobileShow = false;
    }

    if (!this.customerSubject){
      this.subjectShow = true;
    } else {
      this.subjectShow = false;
    }

    if (!this.customerMessage) {
      this.enquiryMessageShow = true;
    } else {
      this.enquiryMessageShow = false;
    }

    if (this.emailShow || this.invalidEmail || this.nameShow || this.mobileShow || this.subjectShow ||
      this.enquiryMessageShow) {
      this.bigErrorShow = true;
    }
    // if (!this.bigErrorShow) {
      /*
      * Including the collected data as JSON-object
      */
      const jsonData = {
        name: this.customerName,
        mobile: this.customerMobile,
        email: this.customerEmail,
        subject: this.customerSubject,
        message : this.customerMessage
      };

      this.sendData.sendEmail(jsonData).subscribe(data => {
        if (data !== '' && data !== null && data.toString().includes('success')) {
          this.resetAllValues();
          this.bigErrorShow = false;
          this.showSuccessMessage = true;
        } else {
          this.showSuccessMessage = false;
          this.bigErrorShow = true;
        }
      }, error => {
        this.showSuccessMessage = false;
        this.bigErrorShow = true;
      });
    this.submitBut = 'Submit';
    // }
    this.submitBut = 'Submit';
  }

  resetAllValues() {
    this.customerEmail    = '';
    this.customerName     = '';
    this.customerMobile   = '';
    this.customerSubject  = '';
    this.customerMessage  = '';
  }
}
