import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DataService } from '../core/services/data.service';
import { IAlbum, IPhoto } from '../shared/interfaces';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  album: IAlbum = {
    id: null,
    title: '',
    userId: null
  }

  photos: IPhoto[] = [];
  gettingData: boolean = true;

  constructor(private dataService: DataService,
      public route: ActivatedRoute,
      private router: Router) { }

  ngOnInit(): void {
    this.getAlbumData();
    this.getAlbumPhotos();
  }

  getAlbumData() {
    this.route.parent.parent.params.subscribe((params: Params) => {
      const albumId = +params['albumId'];
      if(albumId) {
        this.dataService.getAlbum(albumId).subscribe((album: IAlbum) => {
          this.album = album;
        });
      }
    });
  }

  getAlbumPhotos() {
    this.route.parent.parent.params.subscribe((params: Params) => {
      const albumId = +params['albumId'];
      if(albumId) {
        this.dataService.getAlbumPhotos(albumId).subscribe((photos: IPhoto[]) => {
          this.photos = photos;
          this.gettingData = false;
        });
      }
    });
  }

  backToAlbums(): void {
    this.router.navigate(["../../"], { relativeTo: this.route.parent })
  }

}
