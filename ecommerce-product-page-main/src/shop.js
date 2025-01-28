import './shop.css'
import cart from './images/icon-cart.svg'
import avatar from './images/image-avatar.png'
import product__1 from './images/image-product-1.jpg'
import product__2 from './images/image-product-2.jpg'
import product__3 from './images/image-product-3.jpg'
import product__4 from './images/image-product-4.jpg'
import deleteIcon from './images/delete-icon.png'
import { useState } from 'react'

/* 

const IncrementButton = ({ onClick }) => (
    <button className='increment-button' onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="10"
            height="10" fill="none" viewBox="0 0 10 10">
            <path fill="#000" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
        </svg>
    </button>
); */

const MinusIcon = () => (
    <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
            <path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a" />
        </defs>
        <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a" />
    </svg>
);

const PlusIcon = () => (
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
            <path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b" />
        </defs>
        <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b" />
    </svg>
);

const PreviousIcon = () => (
    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" />
    </svg>
);

const NextIcon = () => (
    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
        <path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" />
    </svg>
);

const DeleteP = () => (
    <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
            <path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a" />
        </defs>
        <use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" />
    </svg>
);

const CloseIcon = () => (
    <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
        <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd" />
    </svg>
);

const MenuIcon = () => (
    <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fillRule="evenodd" /></svg>
);

function Shop() {
    const [showLightbox, setShowLightbox] = useState(false);
    const [currentImage, setCurrentImage] = useState(product__1);
    const [showCartModal, setShowCartModal] = useState(false);
    const [count, setCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const images = [product__1, product__2, product__3, product__4];

    const addToCart = () => {

        const existingItemIndex = cartItems.findIndex(
            item => item.name === "Fall Limited Edition Sneakers"
        );

        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex] = {
                ...updatedCartItems[existingItemIndex],
                quantity: updatedCartItems[existingItemIndex].quantity + count
            };
            setCartItems(updatedCartItems);
        } else {

            const newItem = {
                id: Date.now(),
                image: product__1,
                name: "Fall Limited Edition Sneakers",
                price: 125.00,
                quantity: count
            };
            setCartItems([...cartItems, newItem]);
        }
        setCount(0);
    };

    const incrementCount = () => {
        setCount(count + 1);
    }

    const decrementCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }

    }

    const removeFromCart = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
        setCount(0)
    };

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
                <div className='hamburger-menu'>
                    <div className='hamburger' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </div>
                    <div>
                        {!isMenuOpen && <span>Sneaker</span>}
                    </div>
                    {/* Menu mobile */}
                    <div className={`mobile-menu ${isMenuOpen ? 'show' : ''}`}>
                        <ul>
                            <li><strong>sneakers</strong></li>
                            <li>Collections</li>
                            <li>Men</li>
                            <li>Women</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
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
                    <div className="cart-icon-container">
                        <img
                            src={cart}
                            onClick={() => setShowCartModal(!showCartModal)}
                            alt=''
                        />
                        {totalItems > 0 && (
                            <span className="cart-badge">{totalItems}</span>
                        )}
                    </div>

                    <div className='avatar-profile'>
                        <img className='avatar' src={avatar} alt='avatar' />
                    </div>
                </div>
            </div>

            {showCartModal && (
                <div className="cart-modal">
                    <div className="cart-modal-header">
                        <h3>Cart</h3>
                    </div>
                    <div className="cart-modal-content">
                        {cartItems.length === 0 ? (
                            <p>Your cart is empty</p>
                        ) : (
                            <>
                                {cartItems.map(item => (
                                    <div>
                                        <div key={item.id} className="cart-item">
                                            <div>
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="cart-item-image"
                                                />
                                            </div>

                                            <div className="cart-item-details">
                                                <p className="cart-item-name">{item.name}</p>
                                                <p className="cart-item-price">
                                                    ${item.price.toFixed(2)} x {item.quantity}
                                                    <span className="total-price">
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </span>
                                                </p>
                                            </div>
                                            <div>
                                                <button
                                                    className="delete-button"
                                                    onClick={() => removeFromCart(item.id)}
                                                >
                                                    <img src={deleteIcon} alt="delete" />
                                                </button>
                                            </div>

                                        </div>
                                        <div>
                                            <button className="checkout-button">
                                                Checkout
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            )}
            <div>
                <hr className='line__height'></hr>
            </div>
            <main>
                <div className='container'>

                    <div className='product-images'>
                        <div className='main-image-container'>
                            <button className="mobile-prev-button" onClick={previousImage}>
                                <PreviousIcon />
                            </button>
                            <img
                                src={currentImage}
                                className='product__1'
                                alt=''
                                onClick={() => window.innerWidth > 768 && setShowLightbox(true)}
                            />
                            <button className="mobile-next-button" onClick={nextImage}>
                                <NextIcon />
                            </button>
                        </div>
                        <div className='thumbnail-images desktop-only'>
                            {images.map((img, index) => (
                                <div key={index}>
                                    <img
                                        src={img}
                                        className={`product__${index + 2} ${currentImage === img ? 'selected-thumbnail' : ''}`}
                                        alt=''
                                        onClick={() => {
                                            setCurrentImage(img);
                                            window.innerWidth > 768 && setShowLightbox(true);
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='product-description'>
                        <div>
                            <p id='sneaker-title'>Sneaker company</p>
                            <h1 id='sneaker-text'>Fall Limited Edition <br /> Sneakers</h1>
                        </div>
                        <div className='sneaker-description-div'>
                            <p>These low-profile sneakers are your perfect casual wear <br /> companion.
                                Featuring a durable rubber outer sole, they will <br />
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
                                <button onClick={decrementCount}><MinusIcon /> </button>
                                <span className='article-count'> {count} </span>
                                <button onClick={incrementCount}> <PlusIcon /> </button>
                            </div>
                            <div className='add-to-cart-div'>
                                <button id='add-to-cart-btn' onClick={addToCart} disabled={count === 0}>
                                    <span><img src={cart} alt='' /></span>
                                    <span className='add-to-cart-btn-text' > Add to cart </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {showLightbox && (
                <div className="lightbox-overlay">
                    <div className="lightbox-content">
                        <button className="close-button" onClick={() => setShowLightbox(false)}>
                            <CloseIcon />
                        </button>
                        <button className="prev-button" onClick={previousImage}>
                            <PreviousIcon />
                        </button>
                        <div>
                            <img src={currentImage} className='currentImage' alt="" />
                        </div>

                        <button className="next-button" onClick={nextImage}>
                            <NextIcon />
                        </button>

                        <div className='lightbox-thumbnails'>
                            {images.map((img, index) => (
                                <div key={index} className="thumbnail-container">
                                    <img
                                        src={img}
                                        className={`thumbnail ${currentImage === img ? 'active-thumbnail' : ''}`}
                                        alt=''
                                        onClick={() => setCurrentImage(img)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )

}

export default Shop;