import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  galery: any;

  page = 1;

  loadPics(way = '', nb=this.page) {
        switch (way) {
      case 'next':
        this.page += 1;
        break;
      case 'prev':
        this.page>1 ? this.page-- : null;
        break;
      case '' :
        this.page = nb;
    }

    const url = 'https://picsum.photos/v2/list?page=' + this.page + '&limit=12';

    console.log('Way & Page:', way + ' ' + this.page);
    this.http.get(url).subscribe((data) => {
      console.log(data);
      this.galery = data;
    });
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadPics();

  }
}
