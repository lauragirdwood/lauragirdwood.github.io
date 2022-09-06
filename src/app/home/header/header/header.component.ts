import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
// import {User} from '../../../model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public menuEnglish: any = {
    home: 'HOME',
    profile: 'PROFILE',
    skills: 'SKILLS',
    resume: 'RESUME',
    awards: 'CERTIFICATIONS'
  };

  public menuPortuguese: any = {
    home: 'INÍCIO',
    profile: 'SOBRE MIM',
    skills: 'HABILIDADES',
    resume: 'EXPERIÊNCIAS',
    awards: 'CERTIFICADOS'
  };
  public menu: any = this.menuEnglish;

  isNavbarCollapsed: boolean = true;
  English: boolean = true;
  @Output() lenguage: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }


  ngOnInit() {
  }


  changelenguage() {
    this.English = !this.English;
    this.lenguage.emit(this.English);
    if (!this.English) {
      this.menu = this.menuPortuguese;
    } else {
      this.menu = this.menuEnglish;
    }
  }
}
