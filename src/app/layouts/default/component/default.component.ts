import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'layout-default',
  templateUrl: './default.component.html',
  styleUrls:['./default.style.scss'],
  host: {
    // '[class.layout-default]': 'true',
  },
})
export class LayoutDefaultComponent{

  public appMenus:any[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
     
  }

  ngOnInit() {
  }
}
