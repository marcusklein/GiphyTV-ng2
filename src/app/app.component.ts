import { Component, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { ROUTER_DIRECTIVES, Router} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';

import { GifService, IGif } from './api/gif.service';
import { TVComponent } from './TV/tv.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [
		HTTP_PROVIDERS,
		GifService
	],
    directives: [ ROUTER_DIRECTIVES ]
})

export class AppComponent {
  title = 'app works!';
}
