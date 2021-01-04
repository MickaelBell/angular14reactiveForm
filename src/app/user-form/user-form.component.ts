import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm = this.fb.group({
    name: [''],
    email: [''],
    password: [''],
    adress: this.fb.group({
      street: [''],
      zipCode: [''],
      town:[''],
    })
  });

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

    this.userService.addUsers(this.userForm.value);
   }

}
