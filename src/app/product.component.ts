import {Component} from '@angular/core'
import { Product } from './product.model'
import {ProductRepository} from './repository.model'

@Component({
    selector:'app',
    templateUrl:"./product.component.html"
})
export class ProductComponent{
    model : ProductRepository = new ProductRepository()
    
    categories:string[]=["phone"]

    categoryAl():string[]{
        return this.categories
    }
}