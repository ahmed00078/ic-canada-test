import { Component, OnInit } from '@angular/core';
import { UserService } from '../../app.service';

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
    });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(data => {
      this.ngOnInit();
    });
  }

  sendEmail(id: number): void {
    this.userService.sendEmail(id).subscribe(response => {
    }, error => {
      console.error("Error sending email", error);
    });
  }
}
