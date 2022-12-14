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

  ngOnInit(): void {
    setTimeout(() => {
      console.log('sleep');
      this.router.navigate(['/main'], {relativeTo: this.route});
      // And any other code that should run only after 5s
    }, 1000);
  }
}
