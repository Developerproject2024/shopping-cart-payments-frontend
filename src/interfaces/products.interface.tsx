export interface IProducts {
  products: Product[]
}

export interface IProduct {
  id: number
  name: string
  description: string
  price: string
  image: string
  stocks: IStock[]
}

export interface IStock {
  id: number
  quantity: number
}
