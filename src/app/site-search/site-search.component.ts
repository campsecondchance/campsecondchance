import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

@Component({
  selector: 'site-search',
  styleUrls: ['./site-search.css'],
  templateUrl:'./site-search.template.html' 
})
export class SiteSearch {

}
