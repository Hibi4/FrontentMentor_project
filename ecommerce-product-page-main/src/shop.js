import './shop.css'
import cart from './images/icon-cart.svg'
import avatar from './images/image-avatar.png'
import product__1 from './images/image-product-1.jpg'
import product__2 from './images/image-product-2.jpg'
import product__3 from './images/image-product-3.jpg'
import product__4 from './images/image-product-4.jpg'
import { useState } from 'react'

function Shop() {
    const [showLightbox, setShowLightbox] = useState(false);
    const [currentImage, setCurrentImage] = useState(product__1);
    
    const images = [product__1, product__2, product__3, product__4];
    
    const nextImage = () => {
        const currentIndex = images.indexOf(currentImage);
        setCurrentImage(images[(currentIndex + 1) % images.length]);
    };
    
    const previousImage = () => {
        const currentIndex = images.indexOf(currentImage);
        setCurrentImage(images[(currentIndex - 1 + images.length) % images.length]);
    };

    return (

        <div>
            <div className='header'>
                <div className='header-title'>
                    <ul>
                        <li> <strong>sneakers</strong> </li>
                        <li> Collections </li>
                        <li> Men</li>
                        <li> Women </li>
                        <li> About </li>
                        <li> Contact </li>
                    </ul>
                </div>
                <div className='header-profile'>
                    <div>
                        <img src={cart} alt='' />
                    </div>
                    <div className='avatar-profile'>
                        <img className='avatar' src={avatar} alt='' />
                    </div>
                </div>
            </div>
            <div>
                <hr className='line__height'></hr>
            </div>
            <main>
                <div className='container'>
                    <div>
                        <div>
                            <img 
                                src={product__1} 
                                className='product__1' 
                                alt='' 
                                onClick={() => setShowLightbox(true)}
                            />
                        </div>
                        <div className='thumbnail-images'>
                            {images.map((img, index) => (
                                <div key={index}>
                                    <img 
                                        src={img} 
                                        className={`product__${index + 2} ${currentImage === img ? 'selected-thumbnail' : ''}`} 
                                        alt='' 
                                        onClick={() => {
                                            setCurrentImage(img);
                                            setShowLightbox(true);
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div>
                            <p id='sneaker-title'>Sneaker company</p>
                            <h1 id='sneaker-text'>Fall Limited Edition <br/> Sneakers</h1>
                        </div>
                        <div className='sneaker-description-div'>
                            <p>These low-profile sneakers are your perfect casual wear <br/> companion.
                                Featuring a durable rubber outer sole, they will <br/> 
                                whistand everything the weather can offer.
                            </p>
                        </div>
                        <div className='sneaker-price-div'>
                            <span className='sneaker-price'>$125.00</span>
                            <span className='sneaker-reduction'>50%</span>
                        </div>
                        <div className='sneaker-original-price-div'>
                            <span className='sneaker-original-price'> <del>$250.00</del> </span>
                        </div>
                        <div className='sneaker-sales-div'>
                            <div>
                                <button>-</button>
                                <span>0</span>
                                <button>+</button>
                            </div>
                            <div className='add-to-cart-div'>
                                <button id='add-to-cart-btn'> <img src={cart} alt='' /> Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {showLightbox && (
                <div className="lightbox-overlay">
                    <div className="lightbox-content">
                        <button className="close-button" onClick={() => setShowLightbox(false)}>
                            ×
                        </button>
                        <button className="prev-button" onClick={previousImage}>
                            ‹
                        </button>
                        <img src={currentImage} className='currentImage' alt="" />
                        <button className="next-button" onClick={nextImage}>
                            ›
                        </button>
                    </div>
                </div>
            )}
        </div>

    )

}

export default Shop;