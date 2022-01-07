import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { CharacterService } from '@core/service/characters/characters.service';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.scss']
})
export class CharactersDetailComponent implements OnInit, OnDestroy {
  error: string;
  characterDetail: any;
  isLoading: boolean = false;

  private sub = new Subscription();

  constructor(
    private characterService: CharacterService,
    @Inject(MAT_BOTTOM_SHEET_DATA) private codigo: any,
  ) {}

  ngOnInit() {
    this.getDetailCharacters();
  }

  private getDetailCharacters(): void{
    this.isLoading = false;

    this.characterService
      .getDetailCharacter(this.codigo)
      .subscribe(data => {
        this.isLoading = true;
        this.characterDetail = data.results[0];
        console.log(data);
      })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
