import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../app.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  users: any | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      console.log("Data initial", data);
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(data => {
      console.log("Data after delete", data);
      this.ngOnInit();
      Swal.fire({
        title: 'Deleted!',
        text: 'The user has been deleted.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    });
  }

  sendEmail(id: number) {
    this.userService.sendEmail(id).subscribe(response => {
      console.log("Email sent", response);
      Swal.fire({
        title: 'Email Sent!',
        text: 'The email has been sent successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }, error => {
      console.error("Error sending email", error);
      Swal.fire({
        title: 'Error!',
        text: 'There was an error sending the email.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
  }
}
