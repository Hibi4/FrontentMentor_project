import './extension.css';
import logo from './assets/images/logo.svg';
import sun from './assets/images/icon-sun.svg';
import moon from './assets/images/icon-moon.svg';
import { useState } from 'react';
import data from './data.json';


function Extension() {
    const [extensions, setExtensions] = useState(Array.isArray(data) ? data : []);
    const [filter, setFilter] = useState('all'); // 'all' | 'active' | 'inactive'
    const [isDarker, setDarker] = useState(false);

    const handleDarkerToggle = () => {
        setDarker(!isDarker);
    }

    const handleToggle = (name) => {
        setExtensions(prev => prev.map(item => (
            item.name === name ? { ...item, isActive: !item.isActive } : item
        )));
    };

    return (
        <>
            {/* <div className={ `header-base ${isDarker ? 'header-dark' : 'body-light'}` }> */}
            <div className={`body-base ${isDarker ? 'body-dark' : 'body-light'} ` }>
                {/* <div className={`header ${isDarker ? '' */}
                <div className={` header-base ${isDarker ? 'header-dark' : 'header-light'} ` }>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className={`sun-logo ${isDarker ? 'sun-logo-dark' : 'sun-logo-light'}`} onClick={handleDarkerToggle}>
                        { isDarker ? <img src={sun} alt="sun" /> : <img src={moon} alt="sun" /> }
                    </div>
                </div>
            {/* end header */}
            {/* start Extension list */ }
            <div className='extension-list-tag'>
                <div className='extension-list-text' style={{fontFamily:'verdana', fontSize:'20px', fontWeight: 'bold', color: 'white'}}>
                    <p className={`extensions-title ${isDarker ? 'extensions-title-dark' : 'extensions-title-light'} }`}> Extensions List</p>
                </div>
                {/* `extensions-title ${isDarker ? 'extensions-title-dark' : 'extensions-title-light'} }`}> */ }
                <div className={`buttons-extensions ${isDarker ? 'buttons-extensions-dark' : 'buttons-extensions-light'}`}>
                    <div>
                        <button 
                            onClick={() => setFilter('all')} 
                            className={filter === 'all' ? 'active' : ''}
                            aria-pressed={filter==='all'}>
                            ALL
                        </button>
                    </div>
                    <div>
                        <button 
                            onClick={() => setFilter('active')} 
                            className={filter === 'active' ? 'active' : ''}
                            aria-pressed={filter==='active'}>
                            Active
                        </button>
                    </div>
                    <div>
                        <button 
                            onClick={() => setFilter('inactive')} 
                            className={filter === 'inactive' ? 'active' : ''}
                            aria-pressed={filter==='inactive'}>
                            Inactive
                        </button>
                    </div>
                </div>
            </div>
            {/* end Extension list */}
            
            {/* body main page */}
            
            <div className='extensions-names'>
                    {Array.isArray(extensions) && extensions
                        .filter(item => filter === 'all' ? true : filter === 'active' ? item.isActive : !item.isActive)
                        .map(item => (
                            
                        <div className={`container ${isDarker ? 'container-darker' : 'container-light'}`} key={item.name}>
                            <div className='container-elements'>
                                <div className='first-div-tag'>
                                    <div className='logo'>
                                        <img src={item.logo} alt={item.name} />
                                    </div>
                                    { /* {` buttons-extensions ${isDarker ? 'buttons-extensions-dark' : 'buttons-extensions-light'}` } */ }
                                    <div className={`content ${isDarker ? 'content-darker' : 'content-light'} `}>
                                        <h3>{item.name}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>

                            </div>
                            <div className='remove-tag'>
                                <div>
                                    <button type='button' className='remove-btn'>Remove</button>
                                </div>
                                <div className='status'>
                                    <label className='switch'>
                                        <input type='checkbox' checked={item.isActive} onChange={() => handleToggle(item.name)} />
                                        <span className='slider round'></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            </div>
            
        </>
    ) 
}
export default Extension;
/* https://coreui.io/blog/how-to-loop-inside-react-jsx/ */ 