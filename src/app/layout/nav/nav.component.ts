import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@env';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public version = environment.version;

  public isDarkTheme$: Observable<boolean>;

  navItems = [
    { link: '/characters', title: 'Heróis'},
    { link: '/comics', title: 'Comics'}
  ];

  constructor() {}

  ngOnInit() {
  }

}
