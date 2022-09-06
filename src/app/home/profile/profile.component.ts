import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
  
export class ProfileComponent implements OnInit, OnChanges  {
  

  public titleEnglish: string = "LAURA MELLO";
  public subtitleEnglish: string = "SOFTWARE ENGINEER";
  
  public titlePortuguese: string = 'LAURA MELLO';  
  public subtitlePortuguese: string = 'ENGENHEIRA DE SOFTWARE';


  public title = this.titleEnglish;
  public subtitle = this.subtitleEnglish;


  // You can use a HTML tags in 'data'
  public profileEnglish: any =
    {
      title: 'ABOUT ME:', data: '<p> I\'m 32 years old, I have two AWS certifications, currently studying a Bachelor\'s degree in Software Engineering at UNINTER and I\'ve been working at Itaú Unibanco for 3 years. I deal daily with complex systems that serve millions of customers nationwide, using technologies such as Spring, Kafka, ECS, EKS, Elasticache, DynamoDB and RDS Aurora.'
      + '<BR> I like music, learning about technology, cooking and cycling in my spare time. </p>',
      contact: 'CONTACT', sp: 'SOCIAL PROFILES'
    };
  
    public profilePortuguese: any =
      {
        title: 'SOBRE MIM:', data: '<p> Tenho 32 anos, possuo duas certificações AWS, estudo Bacharelado em Engenharia de Software na UNINTER e trabalho no Itaú Unibanco há 3 anos. Lido diariamente com sistemas complexos que atendem milhões de clientes em território nacional, utilizando tecnologias como Spring, Kafka, ECS, EKS, Elasticache, DynamoDB e RDS Aurora.'
        + '<BR> Gosto de música, aprender sobre tecnologia, cozinhar e pedalar nas horas vagas. </p>',
        contact: 'CONTATOS', sp: 'REDES SOCIAIS'
      };
  
  public profile = this.profileEnglish;
  @Input() English: any;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.English) {
      this.title = this.titleEnglish;
      this.subtitle = this.subtitleEnglish;
      this.profile = this.profileEnglish;
    } else {
      this.title = this.titlePortuguese;
      this.subtitle = this.subtitlePortuguese;
      this.profile = this.profilePortuguese;
    }
  }


}
