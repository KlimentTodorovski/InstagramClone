import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { IPhoto } from 'src/app/shared/interfaces';
import { ConfirmDialogComponent } from '../core/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
})
export class PhotoComponent implements OnInit {

  photo: IPhoto = {
    albumId: null,
    id: null,
    thumbnailUrl: '',
    title: '',
    url: ''
  }

  gettingData: boolean = true;
  photoId: number;

  constructor(private dataService: DataService,
      public route: ActivatedRoute,
      private router: Router,
      private confirmDialog: MatDialog) { }

  ngOnInit(): void {
    this.getPhotoDetails();
  }

  getPhotoDetails() {
    this.route.params.subscribe((params: Params) => {
      this.photoId = +params['photoId'];
      if(this.photoId) {
        this.dataService.getPhoto(this.photoId).subscribe((photo: IPhoto) => {
          this.photo = photo;
          this.gettingData = false;
        });
      }
    });
  }

  backToPhotos() {
    this.router.navigate(['../'], { relativeTo: this.route.parent })
  }

  confirmDeletePhoto() {
    const confirmDialog = this.confirmDialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm delete photo',
        message: 'Are you sure you want to delete this photo?'
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if(result === true) {
        this.deletePhoto();
      }
    })
  }

  deletePhoto() {
    this.dataService.deletePhoto(this.photo.albumId).subscribe(
      () => console.log('Photo with Id = ' + this.photoId + ' deleted.'),
      (err) => console.log(err)
    )
    this.router.navigate(["../"], { relativeTo: this.route.parent });
  }

}
