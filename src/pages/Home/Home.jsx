import './Home.css';
import X3 from '../../images/X3.png';
import iPhone15 from '../../images/Iphone15.png'
import arrow from '../../images/arrow.png';
import { Link } from 'react-router-dom';
// import '../../components/Slider/Slider.js';

export function Home() {
    return (
        <div className="home">
            <h1 className="main-title">Магазин айфонов</h1>

            <div className="banner">
                <div className="banner">
                    <button>
                        <img className="left-btn btn" src={arrow} alt=""/>
                    </button>
                    <div className="banner_body">
                        <div className="banner_inner">
                            <img src={X3} alt="" className="banner-photo" />
                            <img src={X3} alt="" className="banner-photo" />
                            <img src={X3} alt="" className="banner-photo" />
                        </div>
                    </div>
                    <button>
                        <img className="right-btn btn" src={arrow} alt=""/>
                    </button>
                </div>
            </div>

            <section className="catalog">
                <div className="catalog__inner">
                    <div className="catalog_title">
                        <p>Каталог</p>
                    </div>
                    <div className="catalog_products">
                        <div className="products-inner">
                            <div className="product">
                                <img src={iPhone15} alt="" />
                                <div className="product-inner">
                                    <div className="product-bio">
                                        <div className="product-name">
                                            <p>Apple iPhone 15 Pro</p>
                                        </div>
                                        <div className="bio">
                                            <p>dual-SIM 256 ГБ, "титановый бежевый"</p>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <p>139 990 ₽</p>
                                        <button className="btn-price">Купить</button>
                                    </div>
                                </div>
                            </div> 
                            <div className="product">
                                <img src={iPhone15} alt="" />
                                <div className="product-inner">
                                    <div className="product-bio">
                                        <div className="product-name">
                                            <p>Apple iPhone 15 Pro</p>
                                        </div>
                                        <div className="bio">
                                            <p>dual-SIM 256 ГБ, "титановый бежевый"</p>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <p>139 990 ₽</p>
                                        <button className="btn-price">Купить</button>
                                    </div>
                                </div>
                            </div>
                            <div className="product">
                                <img src={iPhone15} alt="" />
                                <div className="product-inner">
                                    <div className="product-bio">
                                        <div className="product-name">
                                            <p>Apple iPhone 15 Pro</p>
                                        </div>
                                        <div className="bio">
                                            <p>dual-SIM 256 ГБ, "титановый бежевый"</p>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <p>139 990 ₽</p>
                                        <button className="btn-price">Купить</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to='/catalog'>
                            <button to='/catalog' className='catalog-next'>Перейти к каталогу</button>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}