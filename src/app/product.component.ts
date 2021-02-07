import {Component} from '@angular/core'
import {ProductRepository} from './repository.model'

@Component({
    selector:'app',
    templateUrl:"./product.component.html"
})
export class ProductComponent{
    model : ProductRepository = new ProductRepository()
    

}