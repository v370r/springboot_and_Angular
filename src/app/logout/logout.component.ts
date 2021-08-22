import { Component, OnInit } from '@angular/core';
import { HardcodedAutenticationService } from '../service/hardcoded-autentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private harcodedAutenticationService:HardcodedAutenticationService
  ) { }

  ngOnInit() {
    this.harcodedAutenticationService.logout();
  }

}
