import { Link } from 'react-router-dom';
import { store } from '../../data/store';
import './Catalog.css';

export function Catalog() {
    return (
        <>
            <h1 className="main-title">Страница каталога</h1>
            <div className="catalog-products">
                {
                    store.map(game => (
                        <article key={game.id} className="product">
                                    <img className='product-img' src={game.img} alt="" />
                                    <div className="product-inner">
                                        <div className="product-bio">
                                            <div className="product-name">
                                                <p>{game.name}</p>
                                            </div>
                                            <div className="bio">
                                                <p>{game.body}</p>
                                            </div>
                                        </div>
                                        <div className="product-price">
                                            <p>{game.price} ₽</p>
                                            <Link to={`/catalog/${game.id}`}>
                                                <button className="btn-price">Купить</button>
                                            </Link>
                                        </div>
                                    </div>
                        </article> 
                    ))
                }
            </div>
        </>
    );
}