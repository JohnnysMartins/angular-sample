import { Subject } from 'rxjs'

export class ProductsService {
    private products = ['A book'];
    productUpdate = new Subject();

    addProduct(producName: string) {
        this.products.push(producName);
        this.productUpdate.next();
    }

    getProducts() {
        return [...this.products];
    }

    deleteProduct(name: string): any {
        this.products = [...this.products.filter(p => p !== name)];
        this.productUpdate.next();
    }
}