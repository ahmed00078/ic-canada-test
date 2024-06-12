import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/User';
import { UserService } from '../../app.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent {
  users: any | undefined;

  constructor(private userService: UserService) { 
   
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      console.log("Data initial",data)
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(data => {
      console.log("Data after delete",data);
      this.ngOnInit();
    });
  }

  sendEmail(id: number) {
    this.userService.sendEmail(id).subscribe(response => {
      console.log("Email envoyé", response);
    }, error => {
      console.error("Erreur lors de l'envoi de l'email", error);
    });
  }

}
