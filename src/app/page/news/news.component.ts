import { newsModel, Datum } from './../../models/newsModel';
import { Component, OnInit } from '@angular/core';
import { NewsService } from "src/app/services/news.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  newsList!:Datum[];


  constructor(private newsService:NewsService ) { }

  ngOnInit(): void {

   this.newsService.getNews().subscribe((res)=>{


      this.newsList = res.data;
      console.log(this.newsList);

    });


  }

  triggerModal(){

  }





}
