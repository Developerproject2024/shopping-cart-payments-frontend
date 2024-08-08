export interface IProducts {
  products: IProduct[]
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

export interface IProductsState {
  products: {
    items: { products: IProduct[] }
  }
}

export interface IProductsStateShopping {
  shopping: {
    items: { products: IProduct[] }
  }
}

export interface IProductsStateShopping {
  shopping: {
    items: { products: IProduct[] }
  }
}

export interface IProductShopping {
  data: IProduct
  payment: boolean
}

export interface IFCountryCity {
  countryCities: ICountryCity[]
}

export interface ICountryCity {
  cityId: number
  cityName: string
  country: ICountry
}

export interface ICountry {
  countryId: number
  countryName: string
}
