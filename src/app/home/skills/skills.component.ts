import {Component, Input, OnChanges, OnInit } from '@angular/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, OnChanges {

  constructor() { }
  @Input() English: any;
 
  // TITLE 
  public headEnglish: any = { title: 'MY SKILLS', subtitle: 'SKILLS AND TOOLS' };
  public headPortuguese: any = { title: 'HABILIDADES', subtitle: 'HABILIDADES E FERRAMENTAS' };
  public head: any = this.headEnglish;


  // ENGLISH
  public skill_1: any = [
    [{
      title: 'AWS',
      progress: 85
    }],
    [{
      title: 'CONTAINERS',
      progress: 70
    }],
    [{
      title: 'OBSERVABILITY',
      progress: 75
    }]
  ];

  public skill_2: any = [
    [{
      title: 'JAVA',
      progress: 90
    }],
    [{
      title: 'SPRING FRAMEWORK',
      progress: 75
    }]
  ];

  public skill_3: any = [
    [{
      title: 'SCRUM',
      progress: 90
    }],
    [{
      title: 'KANBAN',
      progress: 50
    }]
  ];
  
  public skillEnglish: any = [
    { title: 'CLOUD COMPUTING', info: this.skill_1 },
    { title: 'OBJECT-ORIENTED PROGRAMMING', info: this.skill_2 },
    { title: 'AGILE', info: this.skill_3 },
  ];
  // END ENGLISH


  // PORTUGUESE
  public habilidade_1: any = [

    [{
      title: 'AWS',
      progress: 85
    }],
    [{
      title: 'CONTAINERS',
      progress: 70
    }],
    [{
      title: 'OBSERVABILITY',
      progress: 75
    }]
  ];

  public habilidade_2: any = [
    [{
      title: 'JAVA',
      progress: 90
    }],
    [{
      title: 'SPRING FRAMEWORK',
      progress: 75
    }]
  ];

  public habilidade_3: any = [
    [{
      title: 'SCRUM',
      progress: 90
    }],
    [{
      title: 'KANBAN',
      progress: 50
    }]
  ];


  public skillPortuguese: any = [
    { title: 'CLOUD COMPUTING', info: this.habilidade_1 },
    { title: 'PROGRAMAÇÃO ORIENTADA A OBJETOS', info: this.habilidade_2 },
    { title: 'METODOLOGIAS ÁGEIS', info: this.habilidade_3 },
  ];
  // FIM PORTUGUESE 


  // DEFAULT 
  public skills: any = this.skillEnglish;


  ngOnInit() {
  }

  ngOnChanges() {
    if (this.English) {
      this.skills = this.skillEnglish;
      this.head = this.headEnglish;
    } else {
      this.skills = this.skillPortuguese;
      this.head = this.headPortuguese;
    }
  }


}
