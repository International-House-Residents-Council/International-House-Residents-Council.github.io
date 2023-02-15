import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';


const Container = styled.div` // container for all components
    width: 100vw;
    background: linear-gradient(#5F193E, #3F132e, #1D132b); 
`;

const HeaderDiv = styled.div`
    color: white;
    font-family: EB Garamond;
    font-size: 70px;
    font-weight: 600;
    line-height: 91px;
    letter-spacing: 0em;
    text-align: left;
    display: flex;

    @media screen and (max-width: 768px) {
        justify-content: center;
        align-items: center;
    }
`;

const Header = styled.div`
    font-family: 'EB Garamond';
    font-style: normal;
    font-weight: 600;
    font-size: 70px;
    line-height: 91px;
    text-transform: capitalize;
    justify-content: center;
`;

const AllRectangles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  position: relative;
  height: 100%;
  padding-top: 25px;
    @media screen and (max-width: 768px) {
        margin: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Rectangle = styled.div`
  height: 100%;
  width: 100%;
  margin: 15px;
`;

const Rectangle1 = styled(Rectangle)`
    display: flex;
    background-color: #7A5470;
    height: 526px;
    width: 887px;
    left: 0px;
    top: 0px;
    margin: 10px;
    margin-left: -275px;
    z-index: 1;
    @media screen and (max-width: 768px) {
        height: 182px;
        width: 380px;
        justify-content: center;
        margin-left: 0px;
    }
`;

const Column1 = styled.div`
    width: 50%;
    background-color: #7A5470;
    border: 2px #7A5470;
    position: relative;
    border-color: #7A5470;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

const MainImage1 = styled.div`
    height: 55%;
    position: absolute;
    width: 350px;
    background-position: center;
    background-size: cover;
    background-image: url(${props => props.src});
    z-index: 2;
    margin-top: 50px;
    left: 25px;
    @media screen and (max-width: 768px) {
        height: 103.80228424072266px;
        width: 70%;
        left: 7.658203125px;
        top: 23.1826171875px; 
        margin-top: 0px;
        margin-left: 20px;
    }
`;

const OffSetRectangle1 = styled.div`
    background: #907388;
    height: 55%;
    position: absolute;
    width: 350px;
    z-index: 1;
    margin-left: 100px;
    top: 150px;
    @media screen and (max-width: 768px) {
            height: 101.38021850585938px;
            width: 123.5020751953125px;
            left: 40.84765625px;
            top: 55.01513671875px;
            margin-top: 5px;
            margin-left: 20px;
    } 
`;

const ArticleInfo1 = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'EB Garamond';
    text-transform: capitalize;
    font-style: normal;
    font-weight: 600;
    color: white;
    margin-right: 100px;
    margin-bottom: 0px;
    margin-top: 30px;
    margin-left: -15px;
    @media screen and (max-width: 768px) {
        margin-right: -600px;
        position: relative;
        margin-top: 10px;
        margin-left:-10px;
    }
`;

const ArticleTitle1= styled(ArticleInfo1)`
    font-size: 40px;
    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`;

const ArticleAuthor1= styled(ArticleInfo1)`
    font-size: 16px;
    margin-top: 0px;
    @media screen and (max-width: 768px) {
        font-size: 8px;
        margin-top: 0px;
    }

`;

const MainImage2 = styled.div`
    height: 293px;
    position: absolute;
    margin-left: 260px;
    width: 387px;
    margin-top: -125px;
    background-position: center;
    background-size: cover;
    background-image: url(${props => props.src});
    z-index: 2;
    left: 25px;
    @media screen and (max-width: 768px) {
        display: none;
    } 
`;

const Rectangle2 = styled.div`
    background: #5F415B;
    width: 683px;
    height:356px;
    margin-top:60px;
    margin-left:-237px;
    margin-bottom: 25px;
    @media screen and (max-width: 768px) {
        display: none;
    } 
`;

const OffSetRectangle2 = styled.div`
    background: #70586D;
    position: absolute;
    height: 293px;
    width: 387px;
    left: 375px;
    top: -50px;
    margin-top: 13px;
    z-index: 1;
    @media screen and (max-width: 768px) {
        display: none;
    } 
`;

const Column2 = styled.div`
    width: 35%;
    background-color: #5F415B;
    border-color: #5F415B;
    border: 2px;
    position: relative;
    border-radius: 0px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const ArticleInfo2 = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'EB Garamond';
    text-transform: capitalize;
    font-style: normal;
    font-weight: 600;
    position: relative;
    color: white;
    margin-left: -50px;
    margin-top: px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const ArticleTitle2= styled(ArticleInfo2)`
    font-size: 40px;
    margin-top: 0px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const ArticleAuthor2= styled(ArticleInfo2)`
    font-size: 16px;
    margin-top: 0px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const form = () => {
    return (
        <Container id = "section">
            <NavBar isSection/>
            <HeaderDiv><Header>UNIVERSITY</Header></HeaderDiv>
            <AllRectangles>

            <Rectangle1>
                <Column1>
                    <MainImage1 src="https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTk0OTA1OTY4ODg1MTE0Mzky/hero-crop-gettyimages-459534214.jpg"></MainImage1>
                    <OffSetRectangle1></OffSetRectangle1>
                </Column1>
                <Column1>
                    <ArticleInfo1> 
                        <ArticleTitle1>Article Title</ArticleTitle1>
                        <ArticleAuthor1>By Some Person's Name</ArticleAuthor1>
                    </ArticleInfo1>
                </Column1>
            </Rectangle1>

            <Rectangle2>
                <Column2>
                    <ArticleInfo2> 
                        <ArticleTitle2>Article Title</ArticleTitle2>
                        <ArticleAuthor2>By Some Person's Name</ArticleAuthor2>
                    </ArticleInfo2>
                </Column2>               
                <Column2>
                    <MainImage2 src="https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTk0OTA1OTY4ODg1MTE0Mzky/hero-crop-gettyimages-459534214.jpg"></MainImage2>
                    <OffSetRectangle2></OffSetRectangle2>
                </Column2>

            </Rectangle2>

            <Rectangle1>
                <Column1>
                    <MainImage1 src="https://upload.wikimedia.org/wikipedia/commons/0/05/Martin_Luther_King%2C_Jr..jpg"></MainImage1>
                    <OffSetRectangle1></OffSetRectangle1>
                </Column1>
                <Column1>
                    <ArticleInfo1> 
                        <ArticleTitle1>Article Title</ArticleTitle1>
                        <ArticleAuthor1>By Some Person's Name</ArticleAuthor1>
                    </ArticleInfo1>
                </Column1>
            </Rectangle1>

            <Rectangle2>
                <Column2>
                    <ArticleInfo2> 
                        <ArticleTitle2>Article Title</ArticleTitle2>
                        <ArticleAuthor2>By Some Person's Name</ArticleAuthor2>
                    </ArticleInfo2>
                </Column2>
                <Column2>
                    <MainImage2 src="https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTk0OTA1OTY4ODg1MTE0Mzky/hero-crop-gettyimages-459534214.jpg"></MainImage2>
                    <OffSetRectangle2></OffSetRectangle2>
                </Column2>
            </Rectangle2>
            </AllRectangles>
        </Container>
    );
};  
export default form;