import React, {useState} from 'react';
import styled from 'styled-components';
import { NavHashLink } from 'react-router-hash-link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { IconContext } from 'react-icons/lib';
import {sections} from '../data/sections';

const NavWrap = styled.div`
    color: white;
    position: absolute;
    top: 3rem;
    right: 0rem;
    @media only screen and (max-width: 1023px){
    display: flex;
    flex-direction: row;
    }
`;

const MobileNav = styled.div`
    display: none;
    padding: 0.25rem;
    @media only screen and (max-width: 1023px){
        display: flex;
        flex-direction: row;
    }
`;

const MobileMenu = styled.div`
    display: flex;
    width: 85%;
     padding: 1%;
     padding-right: 1%;
     text-align: right;
     font-family: 'Poppins', sans-serif;
     font-style: normal;
     font-weight: 800;
     font-size: 20px;
     line-height: 32px;
     background-color: #92718A;
     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
     border-radius: 20px;
     color: #F8BEB9;

    @media only screen and (max-width: 1023px){
        display: flex;
        flex-direction: column;
    }
`;

const MenuIcon = styled.div`
    margin-left: auto;
    margin-right:0.5rem;
    display: flex;
    color: ${props => props.color};
    .menu {
        font-size: 30px;
    }
`;

const Link = styled.a`
    font-size: 20px;
    padding: 1%;
    color: white;
    background-color: #92718A;
    border: 0px;
    border-radius: 3px;
    &:hover{
         color: #F8BEB9;
         cursor:pointer;
         font-weight: bold;
    }
`;

const MobileNavBar = () => {
    const [currentSection, setSection] = useState("/");
    const [show, setToggle] = useState(false);

    return (
        <NavWrap>
            <MobileNav>
                <MenuIcon>
                    <IconContext.Provider value={{ className: 'menu' }} >
                        {show ? <MdClose onClick={() => setToggle(!show)} /> : <GiHamburgerMenu onClick={() => setToggle(!show)} />}
                    </IconContext.Provider>
                </MenuIcon>
            </MobileNav>
            <MobileMenu>
                {sections.map((section, index) => {
                    return (
                        <>
                            {(show) ?
                                <NavHashLink smooth to={section.url}>
                                    <Link currentSection = {currentSection == section.url} onClick={() => setSection(section.url)} key={index}>
                                        {section.title}
                                    </Link>
                                </NavHashLink> : null}
                        </>
                    )
                })}
            </MobileMenu>
        </NavWrap>
    );
};

export default MobileNavBar;