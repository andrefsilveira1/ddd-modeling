import Product from "../domain/entity/product"

export default class ProductService {
    static increasePrice(products: Product[], percentage: number): void {
        products.forEach(product => {
            product.changePrice((product._price * percentage) / 100 + product._price)
        })
    }
}