import {memo} from 'react'
import { CloseIcon, MenuIcon } from 'react-bootstrap'

// utilisation des memo pour éviter les re-renders
const Header = memo(({ isMenuOpen, setIsMenuOpen}) => {
    return (
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
                        </nav>
                    </div>
                )}

            </div>
            {/* end menu mobile */}
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
    )
})

// export default Header;