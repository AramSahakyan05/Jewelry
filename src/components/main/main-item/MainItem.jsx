import { useSelector } from 'react-redux';

const MainItem = () => {
    const data = useSelector(state => state.jewelryData.jewelryData);
    return <>
        {
            data.map(({id, name, image, price }) => {
                return (
                    <div className='main-item' key={id}>
                        <img src={image} />
                        <p className='name'>{name}</p>
                        <p className='price'>{price}.00$</p>
                    </div>  
                )
            })
        }
    </>
}

export default MainItem
