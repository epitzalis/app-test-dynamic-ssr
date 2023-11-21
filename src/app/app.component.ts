import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { InitializerService } from './core/initializer-service';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private initializerService: InitializerService,
    @Inject(DOCUMENT) private document: Document,
    @Optional() @Inject(REQUEST) private readonly httpRequest: Request,
  ) {}

  public resp: any

  ngOnInit() {
    // console.log('ohh', (<any>this.httpRequest?.connection?.address()));
    console.log('ohh', (<string>this.httpRequest?.headers['x-forwarded-host']));

    const domain = <string>this.httpRequest?.headers['x-forwarded-host'] 
                          ?? (<any>this.document.defaultView).location.host
    this.resp = this.initializerService.initializeApp(domain)
    // this.resp = this.initializerService.initializeObsApp(this.document.location.origin)
      .subscribe(resp => {
        this.resp = resp;
    })
  }

}