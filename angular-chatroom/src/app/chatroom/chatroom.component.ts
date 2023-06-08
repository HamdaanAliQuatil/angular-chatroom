import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { interval } from 'rxjs';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {
  alias: string = '';
  messages: string[] = [];
  message: string = '';

  constructor(
    public dialog: MatDialog,
    public http: HttpClient
    ) { }

  ngOnInit() {
    this.showPopupBox();

    this.messages = [];
    localStorage.removeItem('userAlias');
    localStorage.removeItem('jwtToken');

    interval(1000).subscribe(() => {
      this.recieveMessage();
    });
  }

  showPopupBox() {
    // const userAlias = localStorage.getItem('userAlias');
    // if (userAlias) {
    //   this.alias = userAlias;
    // } else {
    //   this.openDialog();
    // }
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogPopupComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.alias = result;
        // localStorage.setItem('userAlias', this.alias);
      }
    });
  }

  sendMessage() {
    const userAlias = localStorage.getItem('userAlias');
    const token = localStorage.getItem('jwtToken');

    if (this.message) {
      const body = {
        alias: userAlias,
        message: this.message,
      };
      
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      this.http.post('http://localhost:3000/api/user1s', body, { headers }).subscribe(
        (response: any) => {
          // set message 
          console.log('Response:', response);
        },
        (error: any) => {
          // Handle any error that occurred during the API call
          console.error('Error:', error);
        }
      );


      this.messages.push(`${this.alias}: ${this.message}`);
      this.message = '';
    }
  }

  recieveMessage() {
    const userAlias = localStorage.getItem('userAlias');
    const token = localStorage.getItem('jwtToken');

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get('http://localhost:3000/api/user1s', { headers }).subscribe(
      (response: any) => {
        // Check if new messages are found
        const newMessages = response.filter((message: any) => {
          return !this.messages.includes(`${message.alias}: ${message.message}`);
        });

        // Add new messages to the messages array
        newMessages.forEach((message: any) => {
          this.messages.push(`${message.alias}: ${message.message}`);
        });

        console.log('Response:', response);
      },
      (error: any) => {
        // Handle any error that occurred during the API call
        console.error('Error:', error);
      }
    );
  }
}

@Component({
  selector: 'dialog-popup',
  template: `
    <div class="dialog-popup-container">
    <h2 class="dialog-popup-title">Welcome to the Chatroom!</h2>
    <p class="dialog-popup-message">Please enter your alias:</p>
    <input type="text" [(ngModel)]="alias" class="dialog-popup-input" placeholder="Alias">
    <button (click)="saveAlias()" class="dialog-popup-button">Submit</button>
    </div>
  `,
  styleUrls: ['./chatroom.component.scss']
})
export class DialogPopupComponent implements OnInit {
  alias: string = '';

  constructor(
    private dialogRef: MatDialogRef<DialogPopupComponent>,
    private http: HttpClient,
    ) { }

  ngOnInit() {
    const hasShownPopup = localStorage.getItem('shownPopup');
    if (hasShownPopup) {
      this.dialogRef.close();
    }
  }

  saveAlias() {
    if (this.alias) {
      localStorage.setItem('userAlias', this.alias);
      // localStorage.setItem('shownPopup', 'true');

      const body = {
        username: 'admin',
        password: 'admin'
      };
  
      this.http.post('http://localhost:3000/api/login', body).subscribe(
        (response: any) => {
          // Handle the response here
          const token = response.accessToken;
          // Do something with the token, such as storing it in localStorage
          localStorage.setItem('jwtToken', token);
  
          // Close the dialog
          this.dialogRef.close(this.alias);
        },
        (error: any) => {
          // Handle any error that occurred during the API call
          console.error('Error:', error);
        }
      );

      this.dialogRef.close(this.alias);
    }
  }
}
