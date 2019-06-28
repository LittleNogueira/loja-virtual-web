import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/Product';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(products: Product[],search: string): any {
    return products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
  }

}
