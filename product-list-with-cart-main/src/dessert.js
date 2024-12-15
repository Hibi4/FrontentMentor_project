import './dessert.css';
import baklava from './assets/images/image-baklava-desktop.jpg'
/*import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"*/
/* import baklava from './image-baklava-desktop.jpg' */
import brownie from './assets/images/image-brownie-desktop.jpg';
import cake from './assets/images/image-cake-desktop.jpg';
import creme from './assets/images/image-cake-desktop.jpg';
import macaron from './assets/images/image-macaron-desktop.jpg';
import meringue from './assets/images/image-meringue-desktop.jpg';
import panna from './assets/images/image-panna-cotta-desktop.jpg';
import tiramisu from './assets/images/image-tiramisu-desktop.jpg';
import waffle from './assets/images/image-waffle-desktop.jpg';
// inclusion des images 
import baklavaMobile from './assets/images/image-baklava-mobile.jpg'
import baklavaTablet from './assets/images/image-baklava-tablet.jpg'
import baklavaDesktop from './assets/images/image-baklava-desktop.jpg'
import brownieMobile from './assets/images/image-brownie-mobile.jpg'
import brownieTablet from './assets/images/image-brownie-tablet.jpg';
import brownieDesktop from './assets/images/image-brownie-desktop.jpg'
import cakeMobile from './assets/images/image-cake-mobile.jpg';
import cakeTablet from './assets/images/image-cake-tablet.jpg';
import cakeDesktop from './assets/images/image-cake-desktop.jpg';
import cremeMobile from './assets/images/image-cake-mobile.jpg';
import cremeTablet from './assets/images/image-cake-tablet.jpg';
import cremeDesktop from './assets/images/image-cake-desktop.jpg';
import macaronMobile from './assets/images/image-macaron-mobile.jpg';
import macaronTablet from './assets/images/image-macaron-tablet.jpg';
import macaronDesktop from './assets/images/image-macaron-desktop.jpg';
import meringueMobile from './assets/images/image-meringue-mobile.jpg';
import meringueTablet from './assets/images/image-meringue-tablet.jpg';
import meringueDesktop from './assets/images/image-meringue-desktop.jpg';
import pannaMobile from './assets/images/image-panna-cotta-mobile.jpg';
import pannaTablet from './assets/images/image-panna-cotta-tablet.jpg';
import pannaDesktop from './assets/images/image-panna-cotta-desktop.jpg';
import tiramisuMobile from './assets/images/image-tiramisu-mobile.jpg';
import tiramisuTablet from './assets/images/image-tiramisu-tablet.jpg';
import tiramisuDesktop from './assets/images/image-tiramisu-desktop.jpg';
import waffleMobile from './assets/images/image-waffle-mobile.jpg';
import waffleTablet from './assets/images/image-waffle-tablet.jpg';
import waffleDesktop from './assets/images/image-waffle-desktop.jpg';
import { useState } from 'react';



const CartIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
);

const DecrementButton = ({ onClick }) => (
    <button className='decrement__button' onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="15"
            height="2" fill="none" viewBox="0 0 24 24">
            <path fill="#000000" d="M0 .375h10v1.25H0V.375Z" />
        </svg>
    </button>
);

const IncrementButton = ({ onClick }) => (
    <button className='increment__button' onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="10"
            height="10" fill="none" viewBox="0 0 10 10">
            <path fill="#000" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
        </svg>
    </button>
);

const RemoveIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
        <path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" /></svg>
);

const EmptyCard = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="none" viewBox="0 0 128 128">
        <path fill="#260F08" d="M8.436 110.406c0 1.061 4.636 2.079 12.887 2.829 8.252.75 19.444 1.171 31.113 1.171 11.67 0 22.861-.421 31.113-1.171 8.251-.75 12.887-1.768 12.887-2.829 0-1.061-4.636-2.078-12.887-2.828-8.252-.75-19.443-1.172-31.113-1.172-11.67 0-22.861.422-31.113 1.172-8.251.75-12.887 1.767-12.887 2.828Z"
            opacity=".15" /><path fill="#87635A" d="m119.983 24.22-47.147 5.76 4.32 35.36 44.773-5.467a2.377 2.377 0 0 0 2.017-1.734c.083-.304.104-.62.063-.933l-4.026-32.986Z" /><path fill="#AD8A85" d="m74.561 44.142 47.147-5.754 1.435 11.778-47.142 5.758-1.44-11.782Z" /><path fill="#CAAFA7" d="M85.636 36.78a2.4 2.4 0 0 0-2.667-2.054 2.375 2.375 0 0 0-2.053 2.667l.293 2.347a3.574 3.574 0 0 1-7.066.88l-1.307-10.667 14.48-16.88c19.253-.693 34.133 3.6 35.013 10.8l1.28 10.533a1.172 1.172 0 0 1-1.333 1.307 4.696 4.696 0 0 1-3.787-4.08 2.378 2.378 0 1 0-4.72.587l.294 2.346a2.389 2.389 0 0 1-.484 1.755 2.387 2.387 0 0 1-1.583.899 2.383 2.383 0 0 1-1.755-.484 2.378 2.378 0 0 1-.898-1.583 2.371 2.371 0 0 0-1.716-2.008 2.374 2.374 0 0 0-2.511.817 2.374 2.374 0 0 0-.493 1.751l.293 2.373a4.753 4.753 0 0 1-7.652 4.317 4.755 4.755 0 0 1-1.788-3.17l-.427-3.547a2.346 2.346 0 0 0-2.666-2.053 2.4 2.4 0 0 0-2.08 2.667l.16 1.173a2.378 2.378 0 1 1-4.72.587l-.107-1.28Z" /><path stroke="#fff"
                stroke-linecap="round" stroke-linejoin="round" stroke-width=".974" d="m81.076 28.966 34.187-4.16" /><path fill="#87635A" d="M7.45 51.793c-.96 8.48 16.746 17.44 39.466 19.947 22.72 2.506 42.08-2.16 43.04-10.667l-3.947 35.493c-.96 8.48-20.24 13.334-43.04 10.667S2.463 95.74 3.423 87.18l4.026-35.387Z" />
        <path fill="#AD8A85" d="M5.823 65.953c-.96 8.453 16.746 17.44 39.573 20.027 22.827 2.586 42.053-2.187 43.013-10.667L87.076 87.1c-.96 8.48-20.24 13.333-43.04 10.666C21.236 95.1 3.53 86.22 4.49 77.74l1.334-11.787Z" />
        <path fill="#CAAFA7" d="M60.836 42.78a119.963 119.963 0 0 0-10.347-1.627c-24-2.667-44.453 1.893-45.333 10.373l-2.133 18.88a3.556 3.556 0 1 0 7.066.8 3.574 3.574 0 1 1 7.094.8l-.8 7.094a5.93 5.93 0 1 0 11.786 1.333 3.556 3.556 0 0 1 7.067.8l-.267 2.347a3.573 3.573 0 0 0 7.094.826l.133-1.2a5.932 5.932 0 1 1 11.787 1.36l-.4 3.52a3.573 3.573 0 0 0 7.093.827l.933-8.267a1.174 1.174 0 0 1 1.307-.906 1.146 1.146 0 0 1 1.04 1.306 5.947 5.947 0 0 0 11.813 1.334l.534-4.72a3.556 3.556 0 0 1 7.066.8 3.573 3.573 0 0 0 7.094.826l1.786-15.546a2.373 2.373 0 0 0-2.08-2.667L44.143 55.74l16.693-12.96Z" />
        <path fill="#87635A" d="m59.156 57.66 1.68-14.88-16.827 13.173 15.147 1.707Z" /><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width=".974" d="M9.796 52.06c-.667 5.866 16.24 12.586 37.733 15.04 14.774 1.68 27.867.906 34.854-1.654" />
    </svg>
)

const desserts = [
    {
        id: 1,
        logo: {
            mobile: waffleMobile,
            tablet: waffleTablet,
            desktop: waffleDesktop
        },
        description: 'Waffle with Berries',
        name: 'Waffle',
        price: 6.50
    },
    {
        id: 2,
        logo: {
            mobile: cremeMobile,
            tablet: cremeTablet,
            desktop: cremeDesktop
        },
        description: 'Vanilla Bean Crème Brûlée',
        name: 'Crème Brûlée',
        price: 7.00
    },
    {
        id: 3,
        logo: {
            mobile: macaronMobile,
            tablet: macaronTablet,
            desktop: macaronDesktop
        },
        description: 'Macaron Mix of Five',
        name: 'Macaron',
        price: 8.00
    },
    {
        id: 4,
        logo: {
            mobile: tiramisuMobile,
            tablet: tiramisuTablet,
            desktop: tiramisuDesktop
        },
        description: 'Classic Tiramisu',
        name: 'Tiramisu',
        price: 5.50
    },
    {
        id: 5,
        logo: {
            mobile: baklavaMobile,
            tablet: baklavaTablet,
            desktop: baklavaDesktop
        },
        description: 'Pistachio Baklava',
        name: 'Baklava',
        price: 4.00
    },
    {
        id: 6,
        logo: {
            mobile: macaronMobile,
            tablet: macaronTablet,
            desktop: macaronDesktop
        },
        description: 'Macaron Mix of Five',
        name: 'Macaron',
        price: 8.00
    },
    {
        id: 7,
        logo: {
            mobile: meringueMobile,
            tablet: meringueTablet,
            desktop: meringueDesktop
        },
        description: 'Lemon Meringue Pie',
        name: 'Pie',
        price: 5.00
    },
    {
        id: 8,
        logo: {
            mobile: macaronMobile,
            tablet: macaronTablet,
            desktop: macaronDesktop
        },
        description: 'Macaron Mix of Five',
        name: 'Macaron',
        price: 8.00
    },
    {
        id: 9,
        logo: {
            mobile: cakeMobile,
            tablet: cakeTablet,
            desktop: cakeDesktop
        },
        description: 'Red Velvet Cake',
        name: 'Cake',
        price: 4.50
    },
    {
        id: 10,
        logo: {
            mobile: brownieMobile,
            tablet: brownieTablet,
            desktop: brownieDesktop
        },
        description: 'Salted Caramel Brownie',
        name: 'Brownie',
        price: 4.50
    },
    {
        id: 11,
        logo: {
            mobile: pannaMobile,
            tablet: pannaTablet,
            desktop: pannaDesktop
        },
        description: 'Vanilla Panna Cotta',
        name: 'Panna Cotta',
        price: 6.50
    },
]

function Dessert() {
    const [count, setCount] = useState(0)
    const [selectedItems, setSelectedItems] = useState(new Set());
    const [productCount, setProductCount] = useState(0)

    const [productCounts, setProductCounts] = useState({});

    const handleIncrement = (id) => {
        setCount(count + 1)
        setProductCounts(prev => ({
            ...prev,
            [id]: (prev[id] || 0) + 1
        }));
    };

    const handleRemoveItem = (id) => {
        setProductCounts(prev => {
            const newCounts = { ...prev };
            delete newCounts[id];
            return newCounts;
        });
        setSelectedItems(prev => {
            const newSet = new Set(prev);
            newSet.delete(id);
            return newSet;
        });
        setCount(count - productCounts[id]); // Mettre à jour le compteur total
    };

    /* const handleDecrement = (id) => {
        setProductCounts(prev => ({
            ...prev,
            [id]: Math.max((prev[id] || 0) - 1, 0) // Empêche les valeurs négatives
        }));
    }; */
    const handleDecrement = (id) => {
        setCount(count - 1)
        setProductCounts(prev => {
            const newCount = (prev[id] || 0) - 1;
            if (newCount <= 0) {
                const newCounts = { ...prev };
                delete newCounts[id];
                return newCounts;
            }
            return {
                ...prev,
                [id]: newCount
            };
        });
    };

    const handleAddToCart = (id) => {
        setCount(count + 1)

        /* setSelectedItems(prev => {
            const newSet = new Set(prev)
            if(newSet.has(id)) {
                setCount(count - 1);
                newSet.delete(id)
            } else {
                setCount(count + 1);
                newSet.add(id)
            }
            return newSet
        }) */
        setSelectedItems(prev => {
            const newSet = new Set(prev);
            newSet.add(id);
            return newSet;
        });
        setProductCounts(prev => ({
            ...prev,
            [id]: 1
        }));
    }
    // Calculer le total du panier
    const calculateTotal = () => {
        return Object.entries(productCounts).reduce((total, [id, quantity]) => {
            const dessert = desserts.find(d => d.id === parseInt(id));
            return total + (dessert.price * quantity);
        }, 0);
    };

    // Ajoutez l'état pour gérer l'affichage de la modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Ajoutez ces fonctions pour gérer la modal
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    /* <img src={dessert.logo} className={`img__tag ${productCounts[dessert.id] ? 'selected' : ''}`} alt={dessert.name} /> */

    return (
        <>
            <div id='root'>
                <div className="title__text">
                    <h1>Desserts</h1>
                </div>
                <div className="container">

                    <div className='body__element '>
                        {desserts.map((dessert) => (
                            <div key={dessert.id}>
                                <div className='img__tag__div'>
                                    <img
                                        srcSet={`
                                            ${dessert.logo.mobile} 375w,
                                            ${dessert.logo.tablet} 768w,
                                            ${dessert.logo.desktop} 1440w
                                        `}
                                        sizes="(max-width: 375px) 375px,
                                        (max-width: 768px) 768px,
                                        1440px"
                                        src={dessert.logo.desktop}
                                        className={`img__tag ${productCounts[dessert.id] ? 'selected' : ''}`}
                                        alt={dessert.name}
                                    />

                                    {(!productCounts[dessert.id] || productCounts[dessert.id] === 0)
                                        ? (
                                            <button className="add__to__cart" onClick={() => handleAddToCart(dessert.id)}>
                                                <CartIcon />
                                                Add to Cart
                                            </button>
                                        ) : (<button className="selected__item">
                                            <DecrementButton onClick={() => handleDecrement(dessert.id)} />
                                            {productCounts[dessert.id] || 1}
                                            <IncrementButton onClick={() => handleIncrement(dessert.id)} />
                                        </button>
                                        )}
                                </div>

                                <div className='name__tag'>
                                    <p>{dessert.description}</p>
                                    <p>{dessert.name}</p>
                                </div>
                                <div className='price__tag'>
                                    <p>${dessert.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='menu__choosen'>
                        <h1 className='cart__text__title'>Your Cart ({count})</h1>
                        {Object.keys(productCounts).length > 0 ? (
                            Object.entries(productCounts).map(([id, quantity]) => {
                                const dessert = desserts.find(d => d.id === parseInt(id));
                                const itemTotal = dessert.price * quantity;

                                return (
                                    <div key={dessert.id} className="cart-item">
                                        <div className="cart-item-name"> <strong>{dessert.name}</strong></div>
                                        <div className="cart-item-quantity">x{quantity}</div>
                                        <div className="cart-item-price">${dessert.price.toFixed(2)}</div>
                                        <div className="cart-item-total">${itemTotal.toFixed(2)}</div>
                                        <button
                                            className="remove-item-button"
                                            onClick={() => handleRemoveItem(dessert.id)}
                                        >
                                            <RemoveIcon />
                                        </button>
                                    </div>

                                );
                            })

                        ) : (
                            <div>
                                <div className='empty__card'>
                                    <EmptyCard />
                                </div>
                                <div id='empty__text'>
                                    <p>Your added items will appear here.</p>
                                </div>
                            </div>

                        )}

                        {Object.keys(productCounts).length > 0 && (
                            <div>
                                <div className="cart-total">
                                    <strong>Total: ${calculateTotal().toFixed(2)}</strong>
                                </div>


                                <div id='confirm__order__btn'>
                                    <button onClick={openModal}>Confirm Order</button>
                                </div>
                            </div>

                        )}
                    </div>
                </div>
            </div>

            {isModalOpen && (
            /* 
            src={dessert.logo.desktop}
            className={`img__tag ${productCounts[dessert.id] ? 'selected' : ''}`}
            alt={dessert.name}
            */ 
            <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Confirmation de commande</h2>
                        <div className="modal-items">
                            {Object.entries(productCounts).map(([id, quantity]) => {
                                const dessert = desserts.find(d => d.id === parseInt(id));
                                return (
                                    <div key={id} className="modal-item">
                                        <div>
                                            <img src={dessert.logo.desktop} className={`img__tag__modal `} />
                                        </div>
                                        <div className='modal-item-second'>
                                            <div>
                                                <span className='name__tag__modal'>{dessert.name}</span>
                                            </div>
                                            <div>
                                                <span className='quantity__tag__modal'>x{quantity}</span>
                                                <span className='price__tag'> @ ${dessert.price} </span>
                                            </div>
                                        </div>
                                        <div>
                                            <span>${(dessert.price * quantity).toFixed(2)}</span>
                                        </div>

                                    </div>
                                );
                            })}
                            <div className="modal-total">
                                <strong>Total: ${calculateTotal().toFixed(2)}</strong>
                            </div>
                        </div>
                        <div className="modal-actions">
                            <button onClick={closeModal}>Annuler</button>
                            <button onClick={() => {
                                // Ajoutez ici la logique de confirmation
                                closeModal();
                            }}>Confirmer</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Dessert;
/* 
<div>
        <button
        variant="outline" 
    className="add__to__cart w-full justify-center">
    🛒
    Add to Cart</button>
</div>

<div className='add__to__cart__div'>
                                        <button
                                            variant="outline"
                                            className="min__to__cart w-full justify-center">
                                            -</button>
                                                <span>1</span>
                                            <button
                                            variant="outline" 
                                            className="plus__to__cart w-full justify-center">
                                            +</button>
                                    </div>*/
/* <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-4 w-4 mr-2"
                                            >
                                                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                                                <path d="M3 6h18" />
                                                <path d="M16 10a4 4 0 0 1-8 0" />
                                            </svg> */
/* 
<div>
                                <div className='img__tag__div'>
                                    <img src={baklava} className='img__tag' alt='baklava' />
                                </div>
                                <div className='name__tag'>
                                    <p>Name</p>
                                </div>
                                <div className='price__tag'>
                                    <p>Price</p>
                                </div>
                            </div>
                            <div>
                                <div className='img__tag__div'>
                                    <img src={baklava} className='img__tag' alt='baklava' />
                                </div>
                                <div className='name__tag'>
                                    <p>Name</p>
                                </div>
                                <div className='price__tag'>
                                    <p>Price</p>
                                </div>
                            </div> */