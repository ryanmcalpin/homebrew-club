import { Component, OnInit } from '@angular/core';
import { NewMemberComponent } from '../new-member/new-member.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css', '../../css/foundation.css']
})
export class AdminComponent implements OnInit {
  newShow: boolean = false;
  editShow: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  clickNew() {
    this.newShow = true;
    this.editShow = false;
  }

  clickEdit() {
    this.editShow = true;
    this.newShow = false;
  }

  clear() {
    this.editShow = false;
    this.newShow = false;
  }

}
