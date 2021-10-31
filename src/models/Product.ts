type Product = {
    title:string,
    price:number
}

//Simulando um banco de dados - Model é onde as regras de negocio, manipulação do banco de dados, etc, é realizada
const data: Product[] = [
    {title: 'Produto X', price:10},
    {title: 'Produto Y', price:15},
    {title: 'Produto Z', price:20}
]

export const Product = {
    getAll: (): Product[] => data,
    getFromPriceAfter: (price:number): Product[] => data.filter(item => item.price >= price)

}