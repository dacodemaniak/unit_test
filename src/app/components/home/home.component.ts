import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public users: Array<object>;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.all().subscribe((userResponse) => {
      this.users = userResponse;
      console.log(this.users.length);
    });
  }

}
