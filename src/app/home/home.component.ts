import { AuthService } from './../services/auth/auth.services';
import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { HttpService } from '../services';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

const {
  static_root: staticRoot
} = environment;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  ngOnInit(){
    
  }

}
