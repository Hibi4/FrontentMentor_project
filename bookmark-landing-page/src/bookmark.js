import './bookmark.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import bookmark from './images/logo-bookmark.svg'
import hero from './images/illustration-hero.svg'
import features__bookmark__logo from './images/illustration-features-tab-1.svg'
import speedy__search__logo from './images/illustration-features-tab-2.svg'
import share__bookmark__logo from './images/illustration-features-tab-3.svg'
import logo__chrome from './images/logo-chrome.svg'
import logo__firefox from './images/logo-firefox.svg'
import logo__opera from './images/logo-opera.svg'
import icon__fb from './images/icon-facebook.svg'
import icon__twitter from './images/icon-twitter.svg'

import { useEffect, useState } from 'react';

function Easybank() {

    const [activePanel, setActivePanel] = useState(null);
    const [activeFeature, setActiveFeature] = useState('bookmark');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [email, setEmail] = useState('');

    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('keydown', handleEscapeKey);

            const scrollY = window.scrollY;
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
        } else {
            document.body.style.overflow = '';

            if (document.body.style.position === 'fixed') {
                const scrollY = parseInt(document.body.style.top || '0', 10) * -1;
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                window.scrollTo(0, scrollY);
            }
        }

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
        };
    }, [isMenuOpen]);

    const CloseIcon = () => (
        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd" />
        </svg>
    );

    const MenuIcon = () => (
        <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fillRule="evenodd" /></svg>
    );

    const toggleAccordion = (index) => {
        setActivePanel(activePanel === index ? null : index);
    };

    const validateEmail = (email) => {
        // Simple regex for email validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const handleSubmit = () => {
        if(validateEmail(email)) {
            setEmail('Mail valid');
            alert("Mail valid");
        } else {
            setEmail('Please enter a valid mail.');
            alert("Please enter a valid mail.");
        }
    }

    return (
        <div>
            {/* header part */}
            <div className='header'>
                <div className='header-logo'>
                    <img src={bookmark} alt='bookmark-logo' />
                </div>
                {/* start button menu mobile */}

                <div className='mobile-menu' onClick={() =>
                    setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <CloseIcon /> : <MenuIcon />}

                    {isMenuOpen && (
                        <div className="mobile-menu-overlay">
                            {/* close button */}
                            <div className='mobile-menu-header'>
                                <div className='mobile-menu-header-picture'>
                                    <img src={bookmark} alt='bookmark-logo' className='white-logo' />
                                </div>
                                <div>
                                    <button
                                        className="close-menu-button"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <CloseIcon style={{ fontSize: 30, color: '#fff' }} />
                                    </button>
                                </div>
                            </div>

                            {/* Menu links */}
                            <nav className="mobile-nav">
                                <Nav
                                    activeKey="/link not working yet"
                                >
                                    <Nav.Item>
                                        <Nav.Link href="/link not working yet">Features</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="/link not working yet">Pricing</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="/link not working yet">Contact</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Button variant="/link not working yet">Login</Button>
                                    </Nav.Item>
                                </Nav>
                            </nav>
                        </div>
                    )}

                </div>
                {/* end menu mobile */}
                <div className='header-link'>
                    <Nav
                        activeKey="/link not working yet"
                        
                    >
                        <Nav.Item>
                            <Nav.Link href="#features">Features</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="" href='#pricing'>Pricing</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="" href='#contact'>Contact</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Button variant="danger">Login</Button>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>

            <div className='main'>
                <div className='bookmark-text'>
                    <div className='bookmark-text-title'>
                        <h1>A simple bookmark Manager</h1>
                    </div>
                    <div className='bookmark-text-description'>
                        <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and
                            see your site load instantly. Try it for free.
                        </p>
                    </div>
                    <div className='bookmark-btn'>
                        <Button variant="primary" id='chrome-btn'>Get it on Chrome</Button>
                        <Button variant="secondary" id='firefox-btn'>Get it on Firefox</Button>
                    </div>

                </div>
                <div className='bookmark-picture'>
                    <img src={hero} alt='hero' />
                </div>
            </div>
            <div className='features' id='features'>
                <div>
                    <h2 className='features-title'>Features</h2>
                </div>
                <div className='features-description'>
                    <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks
                        sync between your devices so you can access them on the go.
                    </p>
                </div>
            </div>
            <div className='bookmark-link'>
                <Nav
                    activeKey={activeFeature}
                    onSelect={(selectedKey) => setActiveFeature(selectedKey)}
                >
                    <Nav.Item>
                        <Nav.Link eventKey="bookmark" className='link'>Simple Bookmarking</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="speedy" className='link'>Speedy Searching</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="sharing" className='link'>Easy Sharing</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <div className='features-bookmark'>
                {/* bookmark speed */}
                {activeFeature === 'bookmark' && (
                    <>
                        <div className='features-bookmark-logo'>
                            <img src={features__bookmark__logo} alt='features-bookmark-logo' />
                        </div>
                        <div className='features-bookmark-description'>
                            <div>
                                <h1>Bookmark in one click</h1>
                            </div>
                            <div>
                                <p>
                                    organize your bookmarks however you like. Our simple drag-and-drop interface gives you
                                    complete control over how you manage your favourite sites.
                                </p>
                            </div>
                            <div>
                                <Button variant="primary" id='more-info-btn'>More info</Button>
                            </div>
                        </div>
                    </>
                )}
                {activeFeature === 'speedy' && (
                    <>
                        { /* speedy search */}
                        <div className='features-bookmark-logo'>
                            <img src={speedy__search__logo} alt='speedy search' />
                        </div>
                        <div className='features-bookmark-description'>
                            <div>
                                <h1>Intelligent search</h1>
                            </div>
                            <div>
                                <p>
                                    organize your bookmarks however you like. Our simple drag-and-drop interface gives you
                                    complete control over how you manage your favourite sites.
                                </p>
                            </div>
                            <div>
                                <Button variant="primary" id='more-info-btn'>More info</Button>
                            </div>
                        </div>
                    </>
                )}

                { /* speedy share bookmark */}
                {(activeFeature === 'sharing' &&
                    <>
                        <div className='features-bookmark-logo'>
                            <img src={share__bookmark__logo} alt='share bookmark' />
                        </div>
                        <div className='features-bookmark-description'>
                            <div>
                                <h1>Share bookmarks</h1>
                            </div>
                            <div>
                                <p>
                                    Easily share your bookmarks and collections with others. Create
                                    a shareable link that you can send at the click of the button.
                                </p>
                            </div>
                            <div>
                                <Button variant="primary" id='more-info-btn'>More info</Button>
                            </div>
                        </div>
                    </>
                )}

            </div>
            <div className='extensions' id='pricing'>
                <div>
                    <h1>
                        Download the extension
                    </h1>
                </div>
                <div>
                    <p>
                        We've got more browsers in the pipeline. Please don't let us know if you have got a favourite
                        you would like us to prioritize.
                    </p>
                </div>
                <div className='extensions-browsers'>
                    <div className='extensions-browsers-div'>
                        <div>
                            <img src={logo__chrome} alt='logo-chrome' />
                        </div>
                        <div>
                            <h4>
                                Add to Chrome
                            </h4>
                            <p>Minimum version 62</p>
                        </div>
                        <div>
                            <Button variant="primary" id='more-info-btn-extensions'>More info</Button>
                        </div>
                    </div>
                    <div className='extensions-browsers-div'>
                        <div>
                            <img src={logo__firefox} alt='logo-firefox' />
                        </div>
                        <div>
                            <h4>
                                Add to Chrome
                            </h4>
                            <p>Minimum version 62</p>
                        </div>
                        <div>
                            <Button variant="primary" id='more-info-btn-extensions'>More info</Button>
                        </div>
                    </div>
                    <div className='extensions-browsers-div'>
                        <div>
                            <img src={logo__opera} alt='logo-opera' />
                        </div>
                        <div>
                            <h4>
                                Add to Chrome
                            </h4>
                            <p>Minimum version 62</p>
                        </div>
                        <div>
                            <Button variant="primary" id='more-info-btn-extensions'>More info</Button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='questions'>
                <div>
                    <h1>
                        Frequently Asked Questions
                    </h1>
                </div>
                <div>
                    <p>
                        Here are some of FAQ's. If you have any other questions you would like answered please.
                        <br /> Please feel free to email us.
                    </p>
                </div>
                <div className='accordion-questions'>
                    <hr />
                    <button className={`accordion ${activePanel === 0 ? 'active' : ''}`} onClick={() => toggleAccordion(0)}>
                        <span className='accordion-span-questions'>What is Bookmark?</span>
                        <span className="accordion-icon">{activePanel === 0 ? '-' : '+'}</span>
                    </button>
                    <div className={`panel ${activePanel === 0 ? 'show' : ''}`}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <hr />

                    <button className={`accordion ${activePanel === 1 ? 'active' : ''}`} onClick={() => toggleAccordion(1)}>
                        <span className='accordion-span-questions'>How can I request a new browser?</span>
                        <span className="accordion-icon">{activePanel === 1 ? '-' : '+'}</span>
                    </button>
                    <div className={`panel ${activePanel === 1 ? 'show' : ''}`}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                            ea commodo consequat.</p>
                    </div>
                    <hr />
                    <button className={`accordion ${activePanel === 2 ? 'active' : ''}`} onClick={() => toggleAccordion(2)}>
                        <span className='accordion-span-questions'>Is there a mobile app?</span>
                        <span className="accordion-icon">{activePanel === 2 ? '-' : '+'}</span>
                    </button>
                    <div className={`panel ${activePanel === 2 ? 'show' : ''}`}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.</p>
                    </div>
                    <hr />
                    <button className={`accordion ${activePanel === 3 ? 'active' : ''}`} onClick={() => toggleAccordion(3)}>
                        <span className='accordion-span-questions'>What about other Chromium browsers?</span>
                        <span className="accordion-icon">{activePanel === 3 ? '-' : '+'}</span>
                    </button>
                    <div className={`panel ${activePanel === 3 ? 'show' : ''}`}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.</p>
                    </div>
                    <hr />
                </div>
                <div>
                    <Button variant="primary" id='more-info-btn'>More info</Button>
                </div>
            </div>
            <div className='footer' id='contact'>
                <div className='footer-description'>
                    <div>
                        <p>35 000 + Already joined</p>
                    </div>
                    <div>
                        <p>
                            Stay up-to-date with what we're doing
                        </p>
                    </div>
                    <div className='footer-contact'>
                        <input type='text' id='footer-textInput' placeholder='enter your email adress'
                         value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Button variant="danger" id='footerBtn' onClick={() => {handleSubmit()} }>Contact us</Button>
                        
                    </div>
                    <div className='footer-bookmark'>
                        <div className='footer-bookmark-features'>
                            <div>
                                <img src={bookmark} alt='bookmark-logo-footer' />
                            </div>
                            <div>
                                <p>Features</p>
                            </div>
                            <div>
                                <p>Pricing</p>
                            </div>
                            <div>
                                <p>Contact</p>
                            </div>
                        </div>
                        <div className='footer-bookmark-social-media'>
                            <div>
                                <img src={icon__fb} alt='bookmark-logo-footer' />
                            </div>
                            <div>
                                <img src={icon__twitter} alt='bookmark-logo-footer' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Easybank;
