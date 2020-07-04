import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  categoriesList = [
    {name: ' टॉप न्यूज़' , path: '/top-news'},
    {name: 'आंतरराष्ट्रीय'},
    {name: 'राष्ट्रीय'},
    {name: 'राज्य'},
    {name: 'गंमत जंमत'},
    {name: 'फिल्मीबास्केट'},
    {name: 'हेल्थ गुरु'},
    {name: 'क्राईम स्टोरीज'},
  ];
  constructor() { }
  title = 'गरजा महाराष्ट्र';
  ngOnInit(): void {
    console.log(this.categoriesList);
  }

}
