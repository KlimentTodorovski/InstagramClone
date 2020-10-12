import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { IUser } from '../shared/interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {

  users: IUser[] = [];
  gettingData: boolean = true;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.dataService.getUsers().subscribe(
      users => {
        this.users = users;
        this.gettingData = false;
      }
    ),
    (err: any) => console.log('Error geting Users')
  }

}
