import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  myname = "Hello Ag2";  //property binding

  innerhtmlValue = "<h3>hello</h3>";

  profile;
  constructor() { }


  ngOnInit() {
  }

  submit() {   //event data binding
    alert("1");
    this.profile="value changed"
  }

}
