import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';
import { filter, map } from 'rxjs';
import { GeneralServiceService } from './services/general-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'the-colab-web';

  hideHeaderUrls = [
    '/',
    '/crear-cuenta',
    '/recuperar-cuenta'
  ];
  hideHeader = false;

  constructor(
    private generalService: GeneralServiceService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.router.events
    .subscribe(
      (event: any) => {
        if(event instanceof NavigationStart) {
          if (this.hideHeaderUrls.includes(event.url)) {
            this.hideHeader = true;
          } else {
            this.hideHeader = false;
          }
        }
      });
  }

}
