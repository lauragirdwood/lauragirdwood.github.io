import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Job } from '../../models/job';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit, OnChanges {
  @Input() English: any;

  public jobs: any = [];
  jobsEnglish: Job[];
  jobsPortuguese: Job[];
  
  public headEnglish: any = { title: 'RESUME', subtitle: 'MY EDUCATION AND EXPERIENCE' };
  public headPortuguese: any = { title: 'EXPERIÊNCIAS', subtitle: 'MEUS ESTUDOS E EXPERIÊNCIAS PROFSSIONAIS' };
  public head: any = this.headEnglish;

  constructor() {

    const job_1: Job = new Job('SOFTWARE ENGINEER', '2019-PRESENT', 'ITAÚ UNIBANCO',
      '<P>Development of REST API and event-oriented solutions, and cloud native microservices coexisting with legacy systems in the Current Accounts universe, using technologies such as Java, Spring, JUnit, BDD, Docker, Cassandra, Redis and AWS.'
        + '', 1);
    
    const school_1: Job = new Job('SOFTWARE ENGINEERING BACHELOR\'S DEGREE', '2021-2024', 'UNINTER International University Center',
    '<P>Software Engineering </p>', 1);

    const school_2: Job = new Job('Junior Full Stack Developer', '2019', 'Generation Brasil',
      '<P>Fullstack Web Development Bootcamp focused on Java and Angular</P>', 1);

    const trabalho_1: Job = new Job('ENGENHEIRA DE SOFTWARE', '2019-ATUAL', 'ITAÚ UNIBANCO',
    '<P>Desenvolvimento de soluções API REST e orientadas a eventos, cloud native e microsserviços convivendo com sistemas legados no universo de Contas Correntes, utilizando tecnologias como Java, Spring, JUnit, BDD, Docker, Cassandra, Redis e AWS.'
      + '', 1);

    const estudo_1: Job = new Job('Bacharelado em Engenharia de Software', '2021-2024', 'UNINTER Centro Universitário Internacional',
      '<P>ENGENHARIA DE SOFTWARE</P>', 1);
      
    const estudo_2: Job = new Job('Desenvolvedor Júnior Full Stack', '2019', 'Generation Brasil',
    '<P>Bootcamp de Desenvolvimento Web Fullstack focado em Java e Angular</p>', 1);

    
    this.jobsEnglish = [job_1,school_1,school_2,];
    this.jobsPortuguese = [trabalho_1,estudo_1,estudo_2];
    this.jobs = this.jobsEnglish;
  }



  ngOnInit() {
  }


  ngOnChanges() {
    if (this.English) {
      this.head = this.headEnglish;
      this.jobs = this.jobsEnglish;
    } else {
      this.head = this.headPortuguese;
      this.jobs = this.jobsPortuguese;
    }
  }

}
