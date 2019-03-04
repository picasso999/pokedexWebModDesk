import { Component, HostListener, OnInit } from '@angular/core';

import {AuthServiceService} from '../../../../user/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navOpen = false;
  constructor(public userAuth: AuthServiceService) { }

  ngOnInit() {
  }
}
