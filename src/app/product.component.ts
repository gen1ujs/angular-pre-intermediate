import {Component} from '@angular/core'
import { Product } from './product.model'
import {ProductRepository} from './repository.model'

@Component({
    selector:'app',
    templateUrl:"./product.component.html"
})
export class ProductComponent{
    model : ProductRepository = new ProductRepository()
    
    disabled:boolean = false
    

    getClasses(id:number):string{
        const product:Product = this.model.getProductById(id)
        return (product.price <=1000 ? "bg-primary" : "bg-secondary") + " m-2 p-2 text-white"
    }

    getClassMap(id:number):Object{
        const product:Product=this.model.getProductById(id)
        return {
            "bg-info" : product.price <=1000,
            "bg-secondary" : product.price > 1000,
            "text-center text-white" : product.name === "Samsung S6"
        }
    }

    color :string = "red"

    getStyles(id:number):Object{
        const product:Product=this.model.getProductById(id)
        return {
        fontSize:"25px",
        color : "yellow"
        }
    }

    onSubmit($event:any){
        console.log('button clicked')
        $event.stopPropagation()
    }
    onDiv(){
        console.log('div clicked')
    }

    keyup(email:string){
        console.log(email)
    }


}