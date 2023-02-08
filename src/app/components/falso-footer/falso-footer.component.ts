import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-falso-footer',
  templateUrl: './falso-footer.component.html',
  styleUrls: ['./falso-footer.component.scss'],
})
export class FalsoFooterComponent implements OnInit {

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {}

  irHome() {
    this.router.navigate(['/home'])
  }

  irBack() {
    this.location.back()
  }

}
