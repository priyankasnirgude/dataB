import { Component } from "@angular/core";

@Component({
    selector : "app-product",
    templateUrl : "./product.component.html",
    styleUrls : ["./product.component.scss"]
})

export class ProductComponent{
    productName : string = "Samsung";
    productId : number = 1234;
    resp : string = `<p class="alert alert-info">I Love Angular</p>`
    userName : string = "Jhon";

    // imgUrl : string = `https://images.unsplash.com/photo-1711926641543-a37d9a020571?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D`;
    getProductName():string{
        return `Iphone 15`
    }
}
