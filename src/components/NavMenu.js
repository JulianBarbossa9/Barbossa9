import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
`;

const NavMenu = () => {
    return (  
        <NavMenuStyle>
            <ul>
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