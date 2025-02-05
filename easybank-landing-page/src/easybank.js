import './easybank.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import bookmark from './images/logo-bookmark.svg'
import hero from './images/illustration-hero.svg'
import features__bookmark__logo from './images/illustration-features-tab-1.svg'
import logo__chrome from './images/logo-chrome.svg'
import logo__firefox from './images/logo-firefox.svg'
import logo__opera from './images/logo-opera.svg'
import icon__fb from './images/icon-facebook.svg'
import icon__twitter from './images/icon-twitter.svg'
//import { Button } from 'bootstrap';

function Easybank() {
    return (
        <div>
            {/* header part */}
            <div className='header'>
                <div className='header-logo'>
                    <img src={bookmark} alt='bookmark-logo' />
                </div>
                <div className='header-link'>
                    <Nav
                        activeKey="/home"
                        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    >
                        <Nav.Item>
                            <Nav.Link href="/home">Features</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Pricing</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Contact</Nav.Link>
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
            <div className='features'>
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
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item>
                        <Nav.Link href="/home">Simple Bookmarking</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Speedy Searching</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Easy Sharing</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <div className='features-bookmark'>
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
            </div>
            <div className='extensions'>
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
            <div className='extensions'>
                <div>
                    <h1>
                        Frequently Asked Questions
                    </h1>
                </div>
                <div>
                    <p>
                        Here are some of FAQ's. If you have any other questions you would like answered please.
                        Please feel free to email us.
                    </p>
                </div>
                <div></div>
                <div>
                    <Button variant="primary" id='more-info-btn'>More info</Button>
                </div>
            </div>
            <div className='footer'>
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
                        <input type='text' id='footer-textInput' placeholder='enter your email adress' />
                        <Button variant="danger" id='footerBtn'>Contact us</Button>
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
