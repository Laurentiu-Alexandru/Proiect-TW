import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-plateste',
  templateUrl: './plateste.component.html',
  styleUrls: ['./plateste.component.css']
})
export class PlatesteComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute,

  ) {}

  ngOnInit(): void {}
}
