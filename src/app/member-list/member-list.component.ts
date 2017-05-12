import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css', '../../css/foundation.css'],
  providers: [MemberService]
})

export class MemberListComponent implements OnInit {
  members: FirebaseListObservable<any[]>;

  constructor(private memberService: MemberService, private router: Router) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  memberClick(member) {
    this.router.navigate(['members', member.$key]);
  }

}
