import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() English: any;

  public headEnglish: any = { title: 'CERTIFICATIONS', subtitle: 'MY CERTIFICATES' };
  public headPortuguese: any = { title: 'CERTIFICAÇÕES', subtitle: 'MEUS CERTIFICADOS' };
  public head: any = this.headEnglish;

  


  public awardsEnglish: any = [

    {
      title: 'AWS',
      name: 'SOLUTIONS ARCHITECT - 2022'
    },
    {
      title: 'AWS',
      name: 'CLOUD PRACTITIONER - 2021'
    }
  ];


  public awardsPortuguese: any = [

    {
      title: 'AWS',
      name: 'SOLUTIONS ARCHITECT - 2022'
    },
    {
      title: 'AWS',
      name: 'CLOUD PRACTITIONER - 2021'
    }
  ];

  
  public awards: any = this.awardsEnglish;

  ngOnInit() {
  }



  ngOnChanges() {
    if (this.English) {
      this.awards = this.awardsEnglish;
      this.head = this.headEnglish;
    } else {
      this.awards = this.awardsPortuguese;
      this.head = this.headPortuguese;
    }
  }

}
