import React from 'react';
import styled from 'styled-components';
import BlackBrainIcon from '../../assets/Black_Brain_Icon.png';
import WhiteBrainIcon from '../../assets/White_Brain_Icon.png';

const Container = styled.div`
    height: 120px;
    width: 100%;
    padding: 25px 15px 5px;
    display: flex;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 999;
    background: ${props => (props.noBackground ? 'none' : 'white')};
    color: ${props => (props.noBackground ? 'white' : '#333')};
    align-items: center;
    transition: transform 0.5s ease-in-out, all 0.5s;
    transform: ${props => `translate(0, ${props.slide})`};
`;

const Logo = styled.a`
    width: 70px;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 250px;
`;

const MenuItem = styled.li`
    display: inline-block;
    padding: 0px 20px;
    margin-bottom: 0px;
    transition: all 0.3s ease-in-out;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
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
    margin-left: 50px;
`;

const navlinks = ['Home', 'Courses', 'School of AI Map', 'Contact'];

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { slide: 0, lastScrollY: 0 };
    }

    componentWillMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

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
        const displayBackground = this.state.lastScrollY === 0;
        return (
            <Container
                slide={this.state.slide}
                noBackground={displayBackground}
            >
                <Logo>
                    <img
                        src={
                            displayBackground ? WhiteBrainIcon : BlackBrainIcon
                        }
                    />
                </Logo>
                <Nav>
                    {navlinks.map(name => (
                        <MenuItem>{name}</MenuItem>
                    ))}
                    <Login>Login</Login>
                </Nav>
            </Container>
        );
    }
}

export default NavBar;
