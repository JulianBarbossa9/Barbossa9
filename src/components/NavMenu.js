import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md'

const NavMenuStyle = styled.div`
    position: fixed;
    z-index: 100;
    top:0;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    background: var(--dark-bg);

    ul{
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
        text-align: center;

        li {
            display: inline-block; /**Los posicióna verticalmente */
            border-radius: 9px;
            transition: 0.3s ease background-color;
            &:hover {
                background-color: var(--deep-dark);
            }
        }

        a{
            display: inline-block;
            font-family:'RobotoMono Regular';
            padding: 1rem 1.5rem;
            color: var(--gray-1);
            outline: none;

        }
        .active{
            color: var(--white);
        }
    }
    .mobile-menu-icon{
        position: absolute;
        right: 3rem;
        top:1rem;
        width: 2rem;
        cursor: pointer;
        display: none;
        outline: none;
    }
    .closeNavIcon{
        display: none;

    }
    @media only screen and (max-width: 768px){
        .mobile-menu-icon {
            display: block;
            width: 1.5rem;
        }
        .navItems{
            --top:1rem;
            transition: 0.3s ease transform;
            background-color: var(--deep-dark);
            padding: 2rem;
            width: 90%;
            max-width: 300px;
            border-radius: 12px;
            position: absolute;
            right: 1rem;
            top:var(--top);
            .closeNavIcon {
                display: block;
                width: 1.5rem;
                margin: 0 0 0 auto;
                cursor: pointer;
                *{
                    pointer-events: none;
                }
            }
            li{
                display: block;
                margin-bottom: 0.5rem;
            }
        }
        
    }
`;

const NavMenu = () => {
    return (  
        <NavMenuStyle>
            <div className="mobile-menu-icon">
            <MdMenu />
            </div>
            <ul className="navItems">

                <div className="closeNavIcon">
                    <MdClose />
                </div>

                <li>
                    <NavLink to="/" exact> Home </NavLink>
                </li>

                <li>
                    <NavLink to="/about"> About </NavLink>
                </li>

                <li>
                    <NavLink to="/proyects"> Proyects </NavLink>
                </li>

                <li>
                    <NavLink to="/contact"> Contact </NavLink>
                </li>
            </ul>
        </NavMenuStyle>
    );
}
 
export default NavMenu;