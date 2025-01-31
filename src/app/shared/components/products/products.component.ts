import { getLocaleMonthNames } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
    selector : "app-products",
    templateUrl : "./products.component.html",
    styleUrls : ["./products.component.scss"]
})

export class ProductsComponent implements OnInit{
    isDisabled : boolean = true;
    productCount : number = 0;
    productAddStatus : string = `No Product Is Added Yet!!!`
    searchProd :string = ''
    constructor(){
        console.log(`Products Constructor is called !!!`);
    }
    ngOnInit(): void {
        setTimeout(() => {
            this.isDisabled = false;
        },4000)
    }

    getProductStatus(){
        console.log(`Product is added!!!`);
        this.productCount++;
        this.productAddStatus = `${this.productCount} Products are in cart !!!`
    }

    removeProducts(){
        this.productCount--;
        if(this.productCount < 1){
            this.productAddStatus = `No Product is added in cart Yet!!!`
        }else{//>= 1
            this.productAddStatus = `${this.productCount} Products are in cart!!!`
        }
    }

    onProductSearch(eve:Event){
        let val = (eve.target as HTMLInputElement).value
        console.log(val);
        this.searchProd = val;
    }
}

