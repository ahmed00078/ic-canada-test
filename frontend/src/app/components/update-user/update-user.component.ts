import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/app.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user?: User;
  form: FormGroup;

  constructor(
    private userService: UserService, 
    private route: ActivatedRoute, 
    private router: Router
  ) { 
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      number: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.userService.getUser(id).subscribe(data => {
      this.user = data;
      this.form.patchValue({
        name: this.user.name,
        email: this.user.email,
        number: this.user.number
      });
    });
  }

  submit(): void {
    if (this.form.valid && this.user) {
      const updatedUser: User = {
        ...this.user,
        ...this.form.value
      };

      this.userService.updateUser(this.user.id, updatedUser).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
