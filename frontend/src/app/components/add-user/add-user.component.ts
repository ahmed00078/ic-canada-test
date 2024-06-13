import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/app.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  
  form: FormGroup;

  constructor(private userService: UserService, private router: Router) { 
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {}

  addUser(): void {
    if (this.form.valid) {
      const userData = this.form.value;
      this.userService.addUser(userData).subscribe(() => {
        this.router.navigate(['/']);
        Swal.fire({
          title: 'User Added!',
          text: 'The new user has been added successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      });
    }
  }
}
