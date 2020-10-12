import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { IPhoto } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-photo-edit',
  templateUrl: './photo-edit.component.html',
})
export class PhotoEditComponent implements OnInit {

  photoForm: FormGroup;
  photo: IPhoto = {
    title: '',
    albumId: null,
    thumbnailUrl: '',
    url: '',
    id: null
  };
  gettingData: boolean = true;
  photoId: number;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
    this.route.parent.params.subscribe(parameter => {
      this.photoId = +parameter['photoId'];
    });
    this.getIPhoto();
  }

  buildForm() {
    this.photoForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      url: ['', Validators.required],
      thumbnailUrl: ['', Validators.required]
    });
  }

  getIPhoto() {
    this.dataService.getPhoto(this.photoId).subscribe((photo: IPhoto) => {
      if(photo) {
        this.editPhoto(photo);
        this.photo = photo;
        this.gettingData = false;
      }
    });
  }

  editPhoto(photo) {
    this.photoForm.patchValue({
      title: photo.title,
      url: photo.url,
      thumbnailUrl: photo.thumbnailUrl
    })
  }

  save() {
    this.mapFormValuesToIPhoto();
    this.updatePhoto();
    this.router.navigate(['./'], { relativeTo: this.route.parent });
  }

  updatePhoto() {
    this.dataService.updatePhoto(this.photo).subscribe(
      (photo: IPhoto) => console.log(photo),
      (err: any) => console.log(err)
    );
  }

  mapFormValuesToIPhoto() {
    this.photo.title = this.photoForm.value.title;
    this.photo.url = this.photoForm.value.url;
    this.photo.thumbnailUrl = this.photoForm.value.thumbnailUrl;
  }

  backToPhoto(): void {
    this.router.navigate(["../"], { relativeTo: this.route });
  }

}
