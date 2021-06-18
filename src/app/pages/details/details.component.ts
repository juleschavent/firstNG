import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  myId = '';
  myPhoto:any;

  constructor(private route:ActivatedRoute, private http:HttpClient, private router:Router) { }

  goBackToGallery() {
    this.router.navigateByUrl('/about');
    console.log('click');
  };

  ngOnInit(): void {
    this.myId = this.route.snapshot.params.id;
    this.http.get("https://picsum.photos/id/"+this.myId+"/info").subscribe(
      (data) => {
        this.myPhoto = data;
        console.log('infoPhoto',this.myPhoto);
        console.log(this.myPhoto.author)
      }
    )
  }
}