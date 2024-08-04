import CreditCardModal from '../components/CreditCardModal'
import SearchForm from '../components/SearchForm '

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Tenis Dime Stan Smith',
      description: 'This is a brief description of the product.',
      price: '29.99',
      image:
        'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/b880fbfaf2f64549a75f64b209fd2a89_9366/tenis-sl-72-og.jpg' // Remplacez par l'URL de votre image
    },
    {
      id: 2,
      name: 'Sample Product',
      description: 'This is a brief description of the product.',
      price: '29.99',
      image:
        'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/c5b25741950644f7b50d0a1e3111d080_9366/tenis-stan-smith-freizeit.jpg' // Remplacez par l'URL de votre image
    },
    {
      id: 3,
      name: 'Sample Product',
      description: 'This is a brief description of the product.',
      price: '29.99',
      image:
        'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/fe7fe0f18e954f418dc13244010004ad_9366/tenis-lwst.jpg' // Remplacez par l'URL de votre image
    },
    {
      id: 4,
      name: 'Sample Product',
      description: 'This is a brief description of the product.',
      price: '29.99',
      image:
        'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/ca92a04d1adf4b7b9808bf21679e071b_9366/tenis-de-running-adizero-sl2.jpg' // Remplacez par l'URL de votre image
    },
    {
      id: 5,
      name: 'Sample Product',
      description: 'This is a brief description of the product.',
      price: '29.99',
      image:
        'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/3c3223b2eda24a5f939bda2095decb62_9366/guayos-f50-league-pasto-sintetico-ninos.jpg' // Remplacez par l'URL de votre image
    },
    {
      id: 6,
      name: 'Sample Product',
      description: 'This is a brief description of the product.',
      price: '29.99',
      image:
        'https://assets.adidas.com/images/w_600,f_auto,q_auto/29c619fb67fc4061bbe17bfa195d8ee1_9366/Tenis_Originals_Country_OG_Negro_ID2962_01_standard.jpg' // Remplacez par l'URL de votre image
    },
    {
      id: 7,
      name: 'Sample Product',
      description: 'This is a brief description of the product.',
      price: '29.99',
      image:
        'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/4976080f888e435895141a126a2f5241_9366/tenis-rapidmove-adv.jpg' // Remplacez par l'URL de votre image
    },
    {
      id: 8,
      name: 'Sample Product',
      description: 'This is a brief description of the product.',
      price: '29.99',
      image:
        'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/c9ca0d67770d4b66892fd24e7364b025_9366/tenis-rapidmove.jpg' // Remplacez par l'URL de votre image
    },
    {
      id: 9,
      name: 'Sample Product',
      description: 'This is a brief description of the product.',
      price: '29.99',
      image:
        'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/8aae2092616a438e8058c1f69651d35e_9366/tenis-adidas-by-stella-mccartney-sportswear.jpg' // Remplacez par l'URL de votre image
    },
    {
      id: 10,
      name: 'Sample Product',
      description: 'This is a brief description of the product.',
      price: '529.999',
      image:
        'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/a6733f2a9f254b0bafc98704e30aaa14_9366/tenis-adidas-vl-court-3.0.jpg' // Remplacez par l'URL de votre image
    }
  ]
  return (
    <div>
      <SearchForm />
      <div className="flex flex-wrap items-end justify-end gap-4 p-4 ">
        {products.map((product) => (
          <div
            className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm mx-auto"
            key={product.id}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <div className="mt-4 flex flex-col justify-between items-center">
                <span className="text-lg font-bold text-gray-900">
                  ${product.price}
                </span>
                <CreditCardModal />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
