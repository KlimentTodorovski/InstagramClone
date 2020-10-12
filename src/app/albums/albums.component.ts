import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DataService } from '../core/services/data.service';
import { IAlbum } from '../shared/interfaces';

@Component({
  templateUrl: './albums.component.html',
})
export class AlbumsComponent implements OnInit {

  albums: IAlbum[] = [];
  gettingData: boolean = true;

  constructor(private dataService: DataService,
      private route: ActivatedRoute,
      private router: Router) { }

  ngOnInit(): void {
    this.getUserAlbums();
  }

  getUserAlbums() {
    this.route.parent.parent.params.subscribe((params: Params) => {
      const id = +params['userId'];
      if(id) {
        this.dataService.getUserAlbums(id).subscribe((albums: IAlbum[]) => {
          this.albums = albums;
          this.gettingData = false;
        })
      }
    })
  }

  backToUsers(): void {
    this.router.navigate(["../"], { relativeTo: this.route })
  }

}
