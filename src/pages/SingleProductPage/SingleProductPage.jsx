import { store } from '../../data/store';
import './SingleProductPage.css';
import { useParams } from 'react-router-dom';

export function SingleProductPage() {
    const { id } = useParams();

    const game = store.find(game => game.id == id);

    return (
        <section className='prod'>
            <div className="prod-img">
                <img src={game.img} alt="" />
            </div>
            <div className="prod-inner">
                <div className="prod-body">
                    <div className="prod-title">{game.name}</div>
                    <div className="prod-bio">{game.body}</div>
                </div>
                <div className="prod-price">
                    <div className="price">{game.price} ₽</div>
                    <button className="btn_price">Купить</button>
                </div>
            </div>
        </section>
    );
}