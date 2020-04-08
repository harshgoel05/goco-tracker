import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
private name='dkfhdsfj';
  constructor() { }

  ngOnInit() {
    let mini=true 
    $('#mySidebar').mouseenter(function() { 
      $("#mySidebar").css('width',"250px");
        $(".main").css('margin-left',"250px");
        $(".main").css('transition',"0.5s");
    });
    $('#mySidebar').mouseleave(function() { 
      $("#mySidebar").css('width',"85px");
      $(".main").css('margin-left',"85px");
    });
    
  }

}
