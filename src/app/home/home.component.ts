import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // addOverlay: boolean = false;
  title = 'fun-o-fun';
  constructor(private router: Router) {}
  ngOnInit(): void {}

  // toggleOverlay() {
  //   this.addOverlay = !this.addOverlay;
  // }toggleOverlay
  addTodo() {
    this.router.navigate(['new']);
  }
}
