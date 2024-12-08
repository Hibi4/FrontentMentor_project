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
    <button onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="15"
            height="2" fill="none" viewBox="0 0 24 24">
            <path fill="#000000" d="M0 .375h10v1.25H0V.375Z" />
        </svg>
    </button>
);

const IncrementButton = ({ onClick }) => (
    <button onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="10"
            height="10" fill="none" viewBox="0 0 10 10">
            <path fill="#000" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
        </svg>
    </button>
);

const RemoveIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
        <path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
);

const desserts = [
    {
        id: 1,
        logo: waffle,
        description: 'Waffle with Berries',
        name: 'Waffle',
        price: 6.50
    },
    {
        id: 2,
        logo: creme,
        description: 'Vanilla Bean Crème Brûlée',
        name: 'Crème Brûlée',
        price: 7.00
    },
    {
        id: 3,
        logo: macaron,
        description: 'Macaron Mix of Five',
        name: 'Macaron',
        price: 8.00
    },
    {
        id: 4,
        logo: tiramisu,
        description: 'Classic Tiramisu',
        name: 'Tiramisu',
        price: 5.50
    },
    {
        id: 5,
        logo: baklava,
        description: 'Pistachio Baklava',
        name: 'Baklava',
        price: 4.00
    },
    {
        id: 6,
        logo: macaron,
        description: 'Macaron Mix of Five',
        name: 'Macaron',
        price: 8.00
    },
    {
        id: 7,
        logo: meringue,
        description: 'Lemon Meringue Pie',
        name: 'Pie',
        price: 5.00
    },
    {
        id: 8,
        logo: macaron,
        description: 'Macaron Mix of Five',
        name: 'Macaron',
        price: 8.00
    },
    {
        id: 9,
        logo: cake,
        description: 'Red Velvet Cake',
        name: 'Cake',
        price: 4.50
    },
    {
        id: 10,
        logo: brownie,
        description: 'Salted Caramel Brownie',
        name: 'Brownie',
        price: 4.50
    },
    {
        id: 11,
        logo: panna,
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

    return (
        <div id='root'>
            <div className="title__text">
                <h1>Desserts</h1>
            </div>
            <div className="container">

                <div className='body__element '>
                    {desserts.map((dessert) => (
                        <div key={dessert.id}>
                            <div className='img__tag__div'>
                                <img src={dessert.logo} className={`img__tag ${productCounts[dessert.id] ? 'selected' : ''}`} alt={dessert.name} />
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
                    {Object.entries(productCounts).map(([id, quantity]) => {
                        const dessert = desserts.find(d => d.id === parseInt(id));
                        const itemTotal = dessert.price * quantity;

                        return (
                            <div key={id} className="cart-item">
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
                    })}
                    <div className="cart-total">
                        <strong>Total: ${calculateTotal().toFixed(2)}</strong>
                    </div>
                    {Object.keys(productCounts).length > 0 && (
                        <div id='confirm__order__btn'>
                            <button>Confirm Order</button>
                        </div>
                    )}
                </div>
            </div>
        </div>


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