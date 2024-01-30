import MainHeader from './main-header/MainHeader';
import MainItem from './main-item/MainItem';
import "./Main.scss";
const Main = () => {
  return (
    <>
        <MainHeader />
        <div className='items'>
            <MainItem />
        </div>
    </>
  )
}

export default Main
