import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ImageCarousel from "../components/ImageCarousel";
import i1 from "../images/apts/1.jpg";
import i2 from "../images/apts/2.jpg";
import i3 from "../images/apts/3.png";
import i4 from "../images/apts/4.jpg";
import i5 from "../images/apts/5.jpg";
import i6 from "../images/apts/6.jpg";
import i7 from "../images/apts/7.jpg";
import i8 from "../images/apts/8.jpg";
import i9 from "../images/apts/9.jpg";

/*
    Simple home page for the webapp
    When selecting Room og User search a search bar will appear
    when hitting search, the page redirects to the Search page
*/

const Home : React.FC = () => {

    const roomimages = [
        i1, i2, i3, i4, i5, i6, i7, i8, i9
        ];

    return (
        <>
            <Navbar />
            <HeroSection/>
            <ImageCarousel images={roomimages}/>
            <Footer />
        </>
    );
}

export default Home;
