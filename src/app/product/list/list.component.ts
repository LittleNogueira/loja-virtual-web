import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'
import { Product } from 'src/app/models/Product';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService, private notifierService: NotifierService) { }

  ngOnInit() {
    this.products = new Array<Product>();
    this.findAllProducts();
  }

  async findAllProducts(){
    this.productService.findAll().subscribe(res => {
      this.products = res;
    });
  }

  delete(product: Product){
    this.productService.delete(product.id).subscribe(res => {
      this.notifierService.notify('success', 'Produto removido com sucesso!' );
      this.findAllProducts();
    });
  }

}
