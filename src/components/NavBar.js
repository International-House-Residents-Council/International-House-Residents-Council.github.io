import React, {useState} from 'react';
import styled from 'styled-components';
import {sections} from '../data/sections';
import { NavHashLink } from 'react-router-hash-link';

const NavWrapper = styled.div`
    a {
        text-decoration: none;
    }
    @media only screen and (max-width: 758px){
        display: none;
    }
`;

const HorizontalNav = styled.div`
    left: 275px;
    top:0px;
    z-index:100;
    width: 100%;
    background-color: transparent !important;
    border-radius: none; 
    position: ${props => props.isSection ? 'absolute' : 'absolute'};
`;

const Tab = styled.a`
    display: inline-block;
    text-align:right;
    align-items: center;
    justify-content: space-between;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    color: ${props => props.currentSection ? '#F8BEB9' : 'white'};
    font-weight: ${props => props.currentSection ? 700 : 400};
    div {
        width: 7rem;
        font-size:15px;
    }
    :hover {
        color: #F8BEB9;
        cursor:pointer;
    }
`;

const NavText = styled.div`
    font-style: normal;
    margin-right:1.5rem;
    text-transform: uppercase;
`;

const NavBar = ({isSection}) => {
    const [currentSection, setSection] = useState("/");
    return(
        <NavWrapper>
            <HorizontalNav isSection={isSection}>
            {sections.map((section, index) => (
                <NavHashLink smooth to={section.url}>
                    <Tab currentSection = {currentSection == section.url} onClick = {() => setSection(section.url)} key={index}>
                        <NavText>{section.title} {currentSection==section.url}</NavText>  
                    </Tab>
                </NavHashLink>
            ))}
            </HorizontalNav>
        </NavWrapper>
        
    );
};

export default NavBar;