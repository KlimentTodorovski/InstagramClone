import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IAlbum, IPhoto, IUser } from 'src/app/shared/interfaces';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = "http://jsonplaceholder.typicode.com/";

  constructor(private http: HttpClient,
              private router: Router) { }

  getUser(userId: number): Observable<IUser> {
    return this.http.get<IUser>(this.baseUrl + 'users/' + userId)
      .pipe(
        map(user => {
          localStorage.setItem('userId', userId.toString());
          return user;
        }),
        catchError(this.handleError)
      );
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.baseUrl + 'users')
      .pipe(
        map(users => {
          localStorage.clear();
          return users;
        }),
        catchError(this.handleError)
      );
  }

  getAlbum(albumId: number): Observable<IAlbum> {
    return this.http.get<IAlbum>(this.baseUrl + 'albums/' + albumId)
      .pipe(
        map(album => {
          const userId = +localStorage.getItem('userId');
          if(userId !== album.userId) {
            this.router.navigate(['error']);
          } else {
            localStorage.setItem('albumId', album.id.toString());
            localStorage.setItem('albumUserId', album.userId.toString());
            return album;
          }
        }),
        catchError(this.handleError)
      );
  }

  getUserAlbums(userId: number): Observable<IAlbum[]> {
    return this.http.get<IAlbum[]>(this.baseUrl + 'users/' + userId + '/albums')
      .pipe(
        map(albums => {
          return albums;
        }),
        catchError(this.handleError)
      );
  }

  getAlbumPhotos(albumId: number): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(this.baseUrl + 'albums/' + albumId + '/photos')
      .pipe(
        map(photos => {
          return photos;
        }),
        catchError(this.handleError)
      );
  }

  getPhoto(photoId: number): Observable<IPhoto> {
    return this.http.get<IPhoto>(this.baseUrl + 'photos/' + photoId)
      .pipe(
        map(photo => {
          const userId: number = +localStorage.getItem('userId');
          const albumUserId: number = +localStorage.getItem('albumUserId');
          const albumId: number = +localStorage.getItem('albumId');
          if((userId !== albumUserId) || (albumId !== photo.albumId)){
            this.router.navigate(['error']);
          } else {
            localStorage.setItem('photoAlbumId', photo.albumId.toString());
            return photo;
          }
        }),
        catchError(this.handleError)
      )
  }

  addNewPhoto(photo: IPhoto): Observable<IPhoto> {
    return this.http.post<IPhoto>(this.baseUrl + 'albums/' + photo.albumId + '/photos', photo, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  updatePhoto(photo: IPhoto): Observable<IPhoto> {
    return this.http.put<IPhoto>(this.baseUrl + 'photos/' + photo.id , photo, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  deletePhoto(photoId: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + 'photos/' + photoId)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error: ', error);
    if(error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Node.js server error');
  }
}
