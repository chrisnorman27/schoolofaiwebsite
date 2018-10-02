import React from 'react';
import styled from 'styled-components';
import HamburgerMenu from 'react-hamburger-menu';
import MediaQuery from 'react-responsive';
import BlackBrainIcon from '../../assets/Black_Brain_Icon.png';
import WhiteBrainIcon from '../../assets/White_Brain_Icon.png';

const Container = styled.div`
    height: 120px;
    width: 100%;
    padding: 25px 50px 5px;
    display: flex;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 999;
    background: ${props => (props.noBackground ? 'none' : 'white')};
    color: ${props => (props.noBackground ? 'white' : '#333')};
    align-items: center;
    justify-content: space-between;
    transition: all 0.2s, background 0.3s, transform 0.5s ease-in-out;
    transform: ${props => `translate(0, ${props.slide})`};

    @media (min-width: 700px) {
        padding: 25px 200px 5px;
    }
`;

const Logo = styled.a`
    width: 70px;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
`;

const MenuItem = styled.li`
    display: inline-block;
    padding: 0px 20px;
    margin-bottom: 0px;
    transition: all 0.3s ease-in-out;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    cursor: pointer;
`;

const Login = styled.button`
    height: 32px;
    padding: 5px 10px 23px;
    background-color: #0356e7;
    color: white;
    font-size: 13px;
    font-weight: 700;
    border: 0;
    padding: 6px 20px;
    line-height: 20px;
    display: inline-block;
    float: left;
    cursor: pointer;
`;

const FullScreenMenu = styled.div`
    transition: all 0.3s ease-in-out;
    width: 100%;
    min-height: 100vh;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const navlinks = ['Home', 'Courses', 'School of AI Map', 'Contact'];

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { slide: 0, lastScrollY: 0, showingMobileMenu: false };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleExpandHamburger = () => {
        console.log('clicked hambug');
        this.setState({ showingMobileMenu: !this.state.showingMobileMenu });
    };

    handleScroll = () => {
        const { lastScrollY } = this.state;
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            this.setState({ slide: '-120px' });
        } else {
            this.setState({ slide: '0px' });
        }
        this.setState({ lastScrollY: currentScrollY });
    };

    render() {
        const displayBackground =
            this.state.lastScrollY === 0 && !this.state.showingMobileMenu;
        const slideAble = !this.state.showingMobileMenu && this.state.slide;
        return (
            <MediaQuery minDeviceWidth={1024}>
                {matches => {
                    if (matches) {
                        return (
                            <Container
                                slide={slideAble}
                                noBackground={displayBackground}
                            >
                                <Logo>
                                    <img
                                        style={{
                                            cursor: 'pointer',
                                            marginBottom: '0'
                                        }}
                                        src={
                                            displayBackground
                                                ? WhiteBrainIcon
                                                : BlackBrainIcon
                                        }
                                        alt={'School of AI logo'}
                                    />
                                </Logo>

                                <Nav>
                                    {navlinks.map(name => (
                                        <MenuItem key={name}>{name}</MenuItem>
                                    ))}
                                    <div style={{ marginLeft: '50px' }}>
                                        <Login>Login</Login>
                                    </div>
                                </Nav>
                            </Container>
                        );
                    } else {
                        return (
                            <Container
                                slide={slideAble}
                                noBackground={displayBackground}
                            >
                                <Logo>
                                    <img
                                        style={{
                                            cursor: 'pointer',
                                            marginBottom: '0'
                                        }}
                                        src={
                                            displayBackground
                                                ? WhiteBrainIcon
                                                : BlackBrainIcon
                                        }
                                        alt={'School of AI logo'}
                                    />
                                </Logo>
                                <div style={{ zIndex: '10000' }}>
                                    <HamburgerMenu
                                        isOpen={this.state.showingMobileMenu}
                                        menuClicked={this.handleExpandHamburger}
                                        width={18}
                                        height={15}
                                        strokeWidth={2}
                                        color={
                                            displayBackground
                                                ? 'white'
                                                : 'black'
                                        }
                                        animationDuration={0.5}
                                    />
                                </div>
                                {this.state.showingMobileMenu ? (
                                    <FullScreenMenu
                                        show={this.state.showingMobileMenu}
                                    >
                                        {navlinks.map(name => (
                                            <MenuItem key={name}>
                                                {name}
                                            </MenuItem>
                                        ))}
                                        <div style={{ marginTop: '20px' }}>
                                            <Login>Login</Login>
                                        </div>
                                    </FullScreenMenu>
                                ) : null}
                            </Container>
                        );
                    }
                }}
            </MediaQuery>
        );
    }
}

export default NavBar;
