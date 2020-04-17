import { Component } from '@angular/core';

import { products, headers } from '../products';
import { ExportExcelService } from '../core/services/ExportExcelService';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  headers = headers;

  constructor(private exportService: ExportExcelService) {
  }

  export() {
    this.exportService.exportExcel(this.products, 'product-list', headers);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/