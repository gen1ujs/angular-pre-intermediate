import {Component} from '@angular/core'
import { Product } from './product.model'
import {ProductRepository} from './repository.model'

@Component({
    selector:'app',
    templateUrl:"./product.component.html"
})
export class ProductComponent{
    model : ProductRepository = new ProductRepository()
    
    disabled:boolean = true
    

    getClasses(id:number):string{
        const product:Product = this.model.getProductById(id)
        return (product.price <=1000 ? "bg-info" : "bg-secondary") + " m-2 p-2"
    }

    getClassMap(id:number):Object{
        const product:Product=this.model.getProductById(id)
        return {
            "bg-info" : product.price <=1000,
            "bg-secondary" : product.price > 1000,
            "text-center text-white" : product.name === "Samsung S6"
        }
    }
}