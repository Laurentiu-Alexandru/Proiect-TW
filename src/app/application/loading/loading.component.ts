import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    setTimeout(() => {
      console.log('sleep');
      this.router.navigate(['/main'], { relativeTo: this.route });
      // And any other code that should run only after 5s
    }, 5000);
  }
}
