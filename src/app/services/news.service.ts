import { ConstantService } from './constant.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { newsModel } from '../models/newsModel';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsList:newsModel[]=[];

constructor(private constantService:ConstantService,private httpClient:HttpClient) { }

getNews(){
  return this.httpClient.get<newsModel>(this.constantService.baseUri + '/uapi/drt-ElectronicsDocument/ED-GetNews');
}



}
