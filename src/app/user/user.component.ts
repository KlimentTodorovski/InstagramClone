import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../core/services/data.service';
import { IUser } from '../shared/interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {

  user: IUser = {
    id: null,
    name: '',
    username: '',
    email: '',
    address: {
      city: '',
      street: '',
      suite: '',
      zipcode: '',
      geo: {
        lat: null,
        lng: null
      }
    },
    phone: '',
    website: '',
    company: {
      name: '',
      bs: '',
      catchPhrase: ''
    }
  };
  gettingData: boolean = true;

  constructor(private dataService: DataService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.route.parent.params.subscribe((params: Params) => {
      const userId = +params['userId'];
      if(userId) {
        this.dataService.getUser(userId).subscribe((user: IUser) => {
          this.user = user;
          this.gettingData = false;
        });
      }
    });
  }

}
