import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css', '../../css/foundation.css'],
  providers: [MemberService]
})
export class NewMemberComponent implements OnInit {
  @Output() newShowSender = new EventEmitter();

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  clickAdd(firstName: string, lastName: string, role: string, yearStarted: string, bio: string, favoriteStyles: string, city: string, state: string, country: string, zip: string) {
    var date = new Date();
    var dateString = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
    var newMember: Member = new Member(firstName, lastName, dateString, role, yearStarted, bio, favoriteStyles, city, state, country, zip);
    this.memberService.addMember(newMember);
    this.newShowSender.emit();
  }

}
