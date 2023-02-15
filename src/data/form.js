import { React} from 'react';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import MobileNavBar from '../components/MobileNavBar';
import ihouse from './ihouse.jpg';
import globe from './globe.png';

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    font-family: "Roboto", "Helvetica Neue", sans-serif;
`;

const Logo = styled.div`
    display: flex;
    align-items: left;
    justify-content: left;
    margin-top: 20px;
    margin-left: 50px;
    margin-bottom: 30px;
`;

const Image = styled.img`
    align-items: center;
    display: flex;
    justify-content: center;
    width: 50px;
    height: 50px;
`;

const Line = styled.div`
    width: 93.75%;
    height: 0.063rem;
    margin-top: 0%;
    background-color: white;
    align-self: center;
`;

const Wrapper =styled.div`
    display: flex;
`;

const Photo = styled.div`
    display: flex;
    width: 60%;
    height: 60%;
    margin-left: 7.3%;
    position: relative;
    margin-bottom: 9.375vw;
    margin-top: 2%;
`;

const Title = styled.div`
    display: flex;
    position: absolute;
    margin-top: 24%; 
    color: white;
    margin-left: 40%;
    font-family: "EB Garamond";
    font-weight: 600;
    line-height: 5rem;
    font-size: 6vw;
    text-align: right;

`;

const Home = () => {

    return (
        <HomeContainer>
                <Logo><Image src = {globe} alt = "Columbia Spectator logo" ></Image></Logo>
                <MobileNavBar/>
                <Line></Line>
                <Wrapper>
                    <Photo><img src = {ihouse} alt = "black history month graphic" width = "100%"></img></Photo>
                    <Title>International House<br></br>Residents' Council</Title>
                </Wrapper>
                <NavBar/>
                <MobileNavBar/>
        </HomeContainer>
    );
};
export default form;