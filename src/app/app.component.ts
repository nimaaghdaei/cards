import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = [ {
    title:'tree',
    imageUrl : 'assets/images/img1.png',
    username : 'nature',
    content :'this is content of nature'
  },
  {
    title:'mountain',
    imageUrl : 'assets/images/img2.png',
    username : 'mountain',
    content :'this is content of mountain'
  },
  {
    title:'bike',
    imageUrl : 'assets/images/img3.png',
    username : 'bike',
    content :'this is content of bike'
  }
];
}
