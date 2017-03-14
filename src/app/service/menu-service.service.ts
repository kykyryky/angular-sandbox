import { Injectable } from '@angular/core';

@Injectable()
export class MenuServiceService {

  constructor() { }

  getItems() {
    return [
      {name: 'Menu1'},
      {name: 'Menu2'},
      {name: 'Menu3'},
      {name: 'Menu4'}
    ];
  }

}
