import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  constructor(private api:ApiService) { 
    this.api.viewCourse().subscribe(
      (response)=>{
        this.data=response
      })

  }


  ngOnInit(): void {

    
    }

  data:any=[]
  

}
