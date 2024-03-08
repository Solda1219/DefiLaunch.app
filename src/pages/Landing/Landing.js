import React, { useRef } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "../../component/Sidebar";
// import LogoDark from "../Images/Logo-Dark.png";
// import LaunchPadGraphic from "../../Images/LaunchPadGraphic.png";
// import { Link } from "react-router-dom";



const Container = styled.div`
  width: 100vw;
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  z-index: 1;
  opacity: 100;
  position: relative;
  .top-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }
  .top-container::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.85;
  }
  .mid-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: #5927b4;
  }
`;

const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 60px 12.5% 40px 12.5%;
  position: relative;
  @media screen and (max-width: 1000px) {
    padding: 60px 20px 40px 20px;
  }
  div {
    width: 68%;
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 1000px) {
      width: 100%;
    }
  }
  .rocket {
    position: absolute;
    right: 0;
    z-index: 1;
    top: 50px;
    height: 75em;
    width: 60em;
    opacity: 0.85;
    @media screen and (max-width: 1000px) {
      opacity: 0.5;
    }
  }
  .button-cont {
    display: flex;
    width: 100%;
    z-index: 2;
    a {
      text-decoration: none;
      border: 2px solid white;
      padding: 12.5px 15px;
      border-radius: 15px;
      font-size: 10px;
      font-weight: bold;
      color: white;
      text-transform: uppercase;
      margin-right: 10px;
      font-family: "Monument", sans-serif;
    }
    span {
      @media screen and (max-width: 1000px) {
      }
    }
  }
  h1 {
    font-size: 3.6rem;
    width: 90%;
    font-family: "Monument", sans-serif;
    z-index: 2;
    margin-bottom: 0;
    color: white;
    @media screen and (max-width: 550px) {
      font-size: 2.5rem;
    }
    @media screen and (max-width: 350px) {
      font-size: 2rem;
    }
  }
`;

const WelcomeContainer = styled.div`
  width: 100%;
  display: flex;
  z-index: 2;
  position: relative;
  padding: 0 12.5% 2.5vw 12.5%;
  @media screen and (max-width: 1000px) {
    padding: 0px 20px;
  }
  .coin {
    opacity: 1;
    position: absolute;
    left: 0;
    top: 450px;
    height: 60em;
    width: 45em;
    @media screen and (max-width: 1000px) {
      opacity: 0.5;
    }
    @media screen and (max-width: 750px) {
      /* display: none; */
    }
  }
  div {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 1000px) {
      width: 100%;
    }
  }
  img {
    width: 50%;
  }
  h1 {
    font-size: 1.3rem;
    width: 100%;
    color: white;
    font-family: "Monument", sans-serif;
  }
  .info-container {
    width: 100%;
    padding-bottom: 150px;
    padding-top: 50px;
    p:first-child {
      margin-top: 10px;
    }
    p {
      font-size: 1rem;
      font-family: "Archivo", sans-serif;
      z-index: 2;
      font-weight: 500;
      width: 90%;
      color: white;
      line-height: 30px;
      letter-spacing: 1px;
      margin-top: 15px;
    }
  }
`;

const WelcomeExtendedContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 30px 12.5% 50px 12.5%;
  @media screen and (max-width: 1000px) {
    padding: 30px 20px;
  }
  z-index: 3;
  div {
    width: 55%;
    display: flex;
    margin-left: auto;
    flex-wrap: wrap;
    @media screen and (max-width: 1000px) {
      width: 100%;
    }
  }
  p {
    font-size: 1rem;
    width: 90%;
    font-weight: 500;
    font-family: "Archivo", sans-serif;
    color: white;
    margin-top: 40px;
    margin-left: auto;
    line-height: 30px;
    letter-spacing: 1px;
    @media screen and (max-width: 1000px) {
      width: 100%;
      margin-left: none;
    }
  }
`;

const RoadmapContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 100px 12.5%;
  z-index: 8;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 1000px) {
    padding: 0px 20px;
  }
  h1 {
    font-size: 3.6rem;
    width: 90%;
    font-family: "Monument", sans-serif;
    z-index: 2;
    text-align: center;
    margin-bottom: 0;
    color: white;
    @media screen and (max-width: 1000px) {
      font-size: 2.5rem;
    }
  }
  .roadmap-container {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 50px;
    img {
      width: 70%;
      z-index: 8;
      @media screen and (max-width: 1200px) {
        width: 100%;
      }
      @media screen and (max-width: 850px) {
        width: 125%;
      }
      @media screen and (max-width: 650px) {
        width: 90vw;
      }
    }
  }
`;

const CRFContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 25px 12.5%;
  z-index: 5;
  position: relative;
  @media screen and (max-width: 1000px) {
    padding: 0px 50px;
  }
  img.coral-circle {
    right: -50px;
    top: -12.5%;
    height: 75em;
    width: 75em;
    z-index: 6;
    position: absolute;
    @media screen and (max-width: 1000px) {
      opacity: 0.5;
    }
  }
  .crf-content {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 1000px) {
      width: 100%;
    }
    h1 {
      font-size: 3.6rem;
      width: 90%;
      font-family: "Monument", sans-serif;
      z-index: 10;
      margin-bottom: 0;
      color: white;
      @media screen and (max-width: 1000px) {
        font-size: 2rem;
        width: 100%;
      }
    }
    p {
      font-size: 1rem;
      font-family: "Archivo", sans-serif;
      z-index: 10;
      font-weight: 500;
      width: 90%;
      color: white;
      line-height: 30px;
      letter-spacing: 1px;
      margin-top: 15px;
    }
    img {
      width: 90px;
      z-index: 7;
      margin-top: 20px;
    }
  }
`;

const EcosystemContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 200px 12.5% 25px 12.5%;
  z-index: 7;
  position: relative;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 1000px) {
    padding: 50px 20px;
  }
  .ecosystem-image-container {
    width: 100%;
    display: flex;
    justify-content: center;
    img {
      width: 60%;
      @media screen and (max-width: 1000px) {
        width: 100%;
      }
    }
  }
  h1 {
    font-size: 3.6rem;
    text-align: center;
    width: 90%;
    font-family: "Monument", sans-serif;
    z-index: 2;
    margin-bottom: 0;
    color: white;
    @media screen and (max-width: 1000px) {
      font-size: 2rem;
      width: 100%;
    }
  }
`;

const Landing = (props) => {
  const aboutRef = useRef(null);
  const crfRef = useRef(null);
  const roadmapRef = useRef(null);
  const ecosystemRef = useRef(null);
  const router = useRouter()

  useEffect(() => {
    if(!router) return
    if(router.location.hash === "#about") {
        aboutRef.current.scrollIntoView({ behavior: "smooth" })
    } else if(router.location.hash === "#crf") {
        crfRef.current.scrollIntoView({ behavior: "smooth" })
    } else if(router.location.hash === "#roadmap") {
        roadmapRef.current.scrollIntoView({ behavior: "smooth" })
    } else if(router.location.hash === "#ecosystem") {
        ecosystemRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [router, router.location.hash])

  return (
    <>
      <Container>
        <div className="top-container">
          <HeadingContainer>
            <div>
              <img alt="rocket" className="rocket" src="/assets/images/rocket.png"></img>
              <h1>Google info here.</h1>
              <div className="button-cont">
                <a href="https://drive.google.com/file/d/1RplnnnLDWe4dddio-xYOBUgGG9mQ_Hz-/view?usp=share_link" target="_blank" rel="noreferrer">
                  <span>Whitepaper</span>
                </a>
              </div>
            </div>
          </HeadingContainer>
          <WelcomeContainer ref={aboutRef} id="about">
            <div>
              <img alt="coin" src="assets/images/coin.png" className="coin" />
              <h1>WELCOME TO</h1>
              <img alt="logo" src="assets/images/logo-text.png" />
              <div className="info-container">
                <p>
                  Litle 1
                </p>
                <p>
                  Title 2
                </p>
              </div>
            </div>
          </WelcomeContainer>
          <WelcomeExtendedContainer>
            <div>
              <p>
               Paragraph 1
              </p>
              <p>
                Paragraph 2
              </p>
              <p>
                Paragraph 3
              </p>
            </div>
          </WelcomeExtendedContainer>
        </div>
        <div className="mid-container">
          <RoadmapContainer ref={roadmapRef} id="roadmap">
            <h1>ROADMAP</h1>
            <div className="roadmap-container">
              <img alt="roadmap" src="assets/images/roadmap.png" />
            </div>
          </RoadmapContainer>
          <CRFContainer ref={crfRef} id="crf">
            <img alt="coral" src="assets/images/coral-circle.png" className="coral-circle" />
            <div className="crf-content">
              <h1 style={{wordWrap: "inherit"}}>Heading text</h1>
              <p>
                Paragraph Text
              </p>
              <p>
                Paragraph text.
              </p>
              <img alt="crf" src="assets/images/crf-logo.png" />
            </div>
          </CRFContainer>
          <EcosystemContainer ref={ecosystemRef} id="ecosystem">
            <h1>THE ECOSYSTEM</h1>
            <div className="ecosystem-image-container">
              <img alt="ecosystem" src="assets/images/ecosystem.png" />
            </div>
          </EcosystemContainer>
          <div style={{ width: "100%", textAlign: "center", padding: "10px 0px", color: "white", fontFamily: "Archivo" }}>
            Contract Address: 0x0
          </div>
        </div>
      </Container>
    </>
  );
};

export default Landing;