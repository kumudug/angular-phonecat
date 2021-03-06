'use strict';

/*require('file-loader!../app/phones/dell-streak-7.json');
require('file-loader!../app/phones/dell-venue.json');
require('file-loader!../app/phones/droid-2-global-by-motorola.json');
require('file-loader!../app/phones/droid-pro-by-motorola.json');
require('file-loader!../app/app/phones/lg-axis.json');
require('file-loader!../app/phones/motorola-atrix-4g.json');
require('file-loader!../app/phones/motorola-bravo-with-motoblur.json');
require('file-loader!../app/phones/motorola-charm-with-motoblur.json');
require('file-loader!../app/phones/motorola-defy-with-motoblur.json');
require('file-loader!../app/phones/motorola-xoom.json');
require('file-loader!../app/phones/motorola-xoom-with-wi-fi.json');
require('file-loader!../app/phones/nexus-s.json');
require('file-loader!../app/phones/samsung-galaxy-tab.json');
require('file-loader!../app/phones/samsung-gem.json');
require('file-loader!../app/phones/samsung-mesmerize-a-galaxy-s-phone.json');
require('file-loader!../app/phones/samsung-mesmerize-a-galaxy-s-phone.json');
require('file-loader!../app/phones/samsung-transform.json');
require('file-loader!../app/phones/sanyo-zio.json');
require('file-loader!../app/phones/t-mobile-g2.json');
require('file-loader!../app/phones/t-mobile-mytouch-4g.json');*/

/*
angular.
  module('core.phone').
  factory('Phone', ['$resource',
    function($resource: angular.resource.IResourceService) {
      return $resource('phones/:phoneId.json', {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'phones'},
          isArray: true
        }
      });
    }
  ]);
*/

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

declare var angular: angular.IAngularStatic;
import { downgradeInjectable } from '@angular/upgrade/static';

import 'rxjs/add/operator/map';

export interface PhoneData {
  name: string;
  snippet: string;
  images: string[];
}

@Injectable()
export class Phone {
  constructor(private http: Http) { }
  query(): Observable<PhoneData[]> {
    return this.http.get(`phones/phones.json`)
      .map((res: Response) => res.json());
  }
  get(id: string): Observable<PhoneData> {
    return this.http.get(`phones/${id}.json`)
      .map((res: Response) => res.json());
  }
}

angular.module('core.phone')
  .factory('phone', downgradeInjectable(Phone));