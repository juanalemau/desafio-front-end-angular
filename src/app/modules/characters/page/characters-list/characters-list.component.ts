import { Component, OnInit } from '@angular/core';
import { Observable, Subject, EMPTY } from 'rxjs';
import { CharacterService } from '@core/service/characters/characters.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CharactersDetailComponent } from '@modules/characters/page/characters-details/characters-detail.component';
import { catchError, debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  
  characters: Observable<any>;
  showProgress = false;
  private searchTerms = new Subject<string>();

  constructor(
    private characterService: CharacterService,
    private matBottonSheet: MatBottomSheet
  ) {}

  ngOnInit() {
    this.getListCharacters();
  }

  private getListCharacters(): void{
    this.characterService.getAllCharacter().subscribe(data => {
      this.characters = data.results;
    })
  }

  public getDetalheCharacter(codigo: string): void{
    this.matBottonSheet.open(CharactersDetailComponent, {
      data: codigo
    })
  }

  public search(nameCharacter: string): void {
    this.getSearchCharacter(nameCharacter);
  }

  private getSearchCharacter(nameCharacter: string): void {
    if(nameCharacter.length >= 3){
      this.characterService.getSearchCharacters(nameCharacter).subscribe(data => {
        this.characters = data.results;
      })
    }
  }
}
