import { useParams } from 'react-router-dom'

import { useFetch } from '../hooks/useFetch';

const Product = () => {
    const { id } = useParams();
    const url = 'http://localhost:3000/products/' + id;
    const {data: products, loading, error } = useFetch(url)
    console.log('products :>> ', products);
    return (
        <div>
            <p>Id do produdo {id}</p>
            {error && <p> Ocorreu um error</p>}
            {loading && <p>Carregando....</p>}
            {products && (
                <div>
                    <h1>{products.name}</h1>
                    <p>{products.price}</p>
                </div>
            )}
        </div>
    )
}

export default Product
