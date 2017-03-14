import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from "../service/menu-service.service";

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
})
export class MenuListComponent implements OnInit {
  public items : any[];
  constructor(private _menuServiceService: MenuServiceService) {}

  ngOnInit() {
    this.items = this._menuServiceService.getItems();
  }

}
