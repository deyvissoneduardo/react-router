import { useParams } from 'react-router-dom'
const Product = () => {
    const {id} = useParams();

    return (
        <div>
            <p>Id do produdo {id}</p>
        </div>
    )
}

export default Product
