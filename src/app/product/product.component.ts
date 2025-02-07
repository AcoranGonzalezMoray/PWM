import { Component, Input } from '@angular/core';
import { ShoppingCartService } from '../services/firestore/shoppingCart.service';
import { Product } from '../services/firestore/interfaces/product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() CATEGORIA="";
  @Input() CodBarras="";
  @Input() FAMILIA="";
  @Input() IMAGEN="";
  @Input() NombreCorto="";
  @Input() PROVEEDOR="";
  @Input() PVP="";
  @Input() posCode="";


  constructor( public cart:ShoppingCartService, public routes:Router) { }


  log(){
    if(sessionStorage.getItem('user')){
      const producto :Product =  {
        CATEGORIA: this.CATEGORIA,
        CodBarras: this.CodBarras,
        FAMILIA: this.FAMILIA,
        IMAGEN: this.IMAGEN,
        NombreCorto: this.NombreCorto,
        PROVEEDOR: this.PROVEEDOR,
        PVP: this.PVP,
        posCode: this.posCode,
      }
      this.cart.updateContentCart(producto)
    }else{
      this.routes.navigate(['iniciar-sesion'])

    }
  }
}
