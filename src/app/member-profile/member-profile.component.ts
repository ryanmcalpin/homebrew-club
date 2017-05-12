import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.css', '../../css/foundation.css'],
  providers: [MemberService]
})

export class MemberProfileComponent implements OnInit {
  memberId: string;
  member;

  constructor(private route: ActivatedRoute, private memberService: MemberService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.memberId = urlParameters['id'];
    });
    this.member = this.memberService.getMemberById(this.memberId);
  }

}
