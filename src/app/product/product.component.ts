import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() private  name: string;
  @Output() productCliecked = new EventEmitter();

  constructor(private service: ProductsService) { 

  }

  ngOnInit() {
  }

  private onClick(){
    // this.productCliecked.emit();
    this.service.deleteProduct(this.name);
  }

}
