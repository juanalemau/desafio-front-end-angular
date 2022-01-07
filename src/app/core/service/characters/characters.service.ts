import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '@env';
import { Character } from '@model/character.model';
import { ContextService } from '@core/service/core.service';
import { MarvelResponse } from '@model/marvel-response.model';

@Injectable({
    providedIn: 'root'
  })
  export class CharacterService {
  
    constructor(private http: HttpClient, private contextService: ContextService) {}
  
    getSearchCharacters(term: string): Observable<any> {
      const options = new HttpParams()
        .set('nameStartsWith', term)
        .set('limit', `${environment.settings.charactersLimit}`);
  
      return this.http.get<any>(`${environment.apiUrl}characters` + `${environment.key}`, { params: options }).pipe(
        map(response => {
          if (!this.contextService.copyright) {
            this.contextService.copyright = response.attributionText;
          }
          return response.data;
        }),
        catchError(this.contextService.handleError)
      );
    }

    getAllCharacter(): Observable<any> {
      const options = new HttpParams()
        .set('limit', `${environment.settings.charactersLimit}`);

      return this.http.get<any>(`${environment.apiUrl}characters` + `${environment.key}`, { params: options }).pipe(
        map(response => {
          if (!this.contextService.copyright) {
            this.contextService.copyright = response.attributionText;
          }
          return response.data;
        }),
        catchError(this.contextService.handleError)
      )
    }

    getDetailCharacter(codigo: string): Observable<any> {
      const options = new HttpParams()
        .set('limit', `${environment.settings.charactersLimit}`);

      return this.http.get<any>(`${environment.apiUrl}characters/` + codigo + `${environment.key}`, { params: options }).pipe(
        map(response => {
          if (!this.contextService.copyright) {
            this.contextService.copyright = response.attributionText;
          }
          return response.data;
        }),
        catchError(this.contextService.handleError)
      )
    }
  
  }