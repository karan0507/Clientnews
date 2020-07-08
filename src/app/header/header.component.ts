import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  show = false;
  categoriesList = [
    {name: 'टॉप न्यूज़' , path: '/top-news'},
    {name: 'आंतरराष्ट्रीय', path: '/international-news'},
    {name: 'राष्ट्रीय', path: '/national-news'},
    {name: 'राज्य', path: '/state-news'},
    {name: 'गंमत जंमत', path: '/funny-news'},
    {name: 'फिल्मीबास्केट', path: '/filimy-basket-news'},
    {name: 'हेल्थ गुरु', path: '/health-guru-news'},
   
   
  ];
  categoriesListMore = [
   
    {name: 'क्राईम स्टोरीज', path: '/crime-stories-news'},
    {name: 'टेक नो लवर', path: '/techno-lover-news'},
    {name: 'फनिशनी', path: '/funny-shunny-news'},
    {name: 'कृषिजीवन', path: '/farmers-news'}
  
  ];
  constructor() { }
  title = 'गर्जा महाराष्ट्र';
  ngOnInit(): void {
    // console.log(this.categoriesListMore[0].either[0].name);

    
  }

  onhover() {
    this.show = true;
  }

  onleave() {
    // setInterval(() => {
    //   this.show = false;
    // }, 1000);
    this.show = false;
  }
}
