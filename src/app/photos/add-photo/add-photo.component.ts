import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { IPhoto } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
})
export class AddPhotoComponent implements OnInit {

  photoForm: FormGroup;
  photo: IPhoto = {
    title: '',
    albumId: null,
    thumbnailUrl: '',
    url: '',
    id: null
  }
  _albumId: number;
  loadSpinner: boolean = true;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private dataService: DataService,
              private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
    this.loadSpinner = false;
    this.route.parent.parent.parent.params.subscribe(parameter => {
      this._albumId = +parameter['albumId'];
    })
  }

  buildForm() {
    this.photoForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      url: ['', Validators.required],
      thumbnailUrl: ['', Validators.required]
    });
  }

  save() {
    this.mapFormValuesToIPhoto();
    this.addNewPhoto();
    this.router.navigate(['./'], { relativeTo: this.route.parent });
  }

  addNewPhoto() {
    this.photo.albumId = this._albumId;
    this.dataService.addNewPhoto(this.photo).subscribe(
      (photo: IPhoto) => console.log(photo),
      (err: any) => console.log(err)
    );
  }

  mapFormValuesToIPhoto() {
    this.photo.albumId = this._albumId;
    this.photo.title = this.photoForm.value.title;
    this.photo.url = this.photoForm.value.url;
    this.photo.thumbnailUrl = this.photoForm.value.thumbnailUrl;
  }

  backToAlbum() {
    this.router.navigate(["./"], { relativeTo: this.route.parent })
  }

}
