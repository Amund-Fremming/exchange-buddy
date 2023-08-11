import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import exchangeImage from "../images/trade.jpg";
import keyImage from "../images/exchange.jpg";
import groupImage from "../images/tull.jpg";

import amundImage from "../images/people/amund.jpg";
import amundImage2 from "../images/people/amund2.jpg";
import dennisImage from "../images/people/dennis.jpg";
import adrianImage from "../images/people/pff.jpg";
import haraldImage from "../images/people/harald.jpg";
import martinImage from "../images/people/martin.jpg";
import mosesImage from "../images/people/moses.jpg";
import sanderImage from "../images/people/sander.jpg";
import sindreImage from "../images/people/sindre.jpg";


const AboutUs: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="bg-gray-200 rounded-3xl mt-52 -mb-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 hover:shadow-2xl shadow-xl">
                <h1 className="text-3xl font-bold mb-6">About Us</h1>
                <div className="flex flex-column items-stretch gap-12">
                    <div className="sm:w-1/2">
                        <img src={keyImage} alt="House" className="w-full rounded-lg" />
                        <h3 className="font-bold mt-4">Our Mission</h3>
                        <p className="mt-2">
                            Our mission is to help people find their perfect exchange buddy.
                            We want to make it easy for people to solve the problem with rental
                            homes during an exchange term. The whole idea started when we sat down
                            at "Hectors Hybel" to dicuss ideas for a project. We wanted to make something
                            that would help people at our own age, and we thought that this would be a 
                            great idea. Step by step we have developed this idea into what it is today.
                            We are a team of 8 students from HVL, and we are all very excited to see
                            if our application can help people solve their living situasion during an
                            exchange term. In the long run we plan on scaling up our system up to a 
                            worldwide service, connection people and places all over the world. We
                            hope that you will enjoy our application, and that it will help you find
                            your exchanging, and possibly finding a new buddy, eaiser.
                        </p>
                    </div>
                    <div className="sm:w-1/2">
                        <img src={exchangeImage} alt="Agent" className="w-full rounded-lg" />
                        <h3 className="font-bold mt-4">The importance of our work</h3>
                        <p className="mt-2">
                            The reason why we think our work is important is because we think that 
                            everyone shoud experience living in a new country during their younger years.
                            Our ideology is that this leads to personal growth in many ways, and that overcoming 
                            the challenges of living in a new country is a great way to learn about yourself. We 
                            also know that people hiring for jobs, consider exchange students to be more attractive, 
                            because this is a sign of adaptability and a willingness to learn. In addition, we think
                            that it is important to be able to meet new people, and to be able to experience new cultures.
                            We think that this is a great way to learn about the world, and to learn about yourself.
                        </p>
                    </div>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mt-24 mb-4">Our Team</h2>
                    <div className="flex flex-col sm:flex-row gap-8">
                        <div className="sm:w-1/3">
                            <div className="bg-white text-center rounded-3xl shadow p-4 transition transform hover:-translate-y-1">
                                <img
                                    src={haraldImage}
                                    alt="Agent"
                                    className="w-full rounded-3xl mb-4"
                                />
                                <h3 className="text-xl font-bold mb-2">Harald Giskegjerde Nilsen</h3>
                                <p className="text-gray-500 mb-4">Project Leader</p>
                            </div>
                        </div>
                        <div className="sm:w-1/3">
                            <div className="bg-white text-center rounded-3xl shadow p-4 transition transform hover:-translate-y-1">
                                <img
                                    src={dennisImage}
                                    alt="Agent"
                                    className="w-full rounded-3xl mb-4"
                                />
                                <h3 className="text-xl font-bold mb-2">Dennis Osmani</h3>
                                <p className="text-gray-500 mb-4">Scrum-master</p>
                            </div>
                        </div>
                        <div className="sm:w-1/3">
                            <div className="bg-white text-center rounded-3xl shadow p-4 transition transform hover:-translate-y-1">
                                <img
                                    src={adrianImage}
                                    alt="Agent"
                                    className="w-full rounded-3xl mb-4"
                                />
                                <h3 className="text-xl font-bold mb-2">Adrian Berget</h3>
                                <p className="text-gray-500 mb-4">Chief Technology Officer (CTO)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8">

                    <div className="flex flex-col sm:flex-row gap-8">
                        <div className="sm:w-1/3" >
                            <div className="bg-white rounded-3xl text-center shadow p-4 transition transform hover:-translate-y-1">
                                <img
                                    src={sindreImage}
                                    alt="Agent"
                                    className="w-full rounded-3xl mb-4"
                                />
                                <h3 className="text-xl font-bold mb-2">Sindre Kjelsrud</h3>
                                <p className="text-gray-500 mb-4">Junior Developer</p>
                            </div>
                        </div>
                        <div className="sm:w-1/3">
                            <div className="bg-white rounded-3xl text-center shadow p-4 transition transform hover:-translate-y-1">
                                <img
                                    src={amundImage}
                                    alt="Agent"
                                    className="w-full rounded-3xl mb-4"
                                />
                                <h3 className="text-xl font-bold mb-2">Amund Fremming</h3>
                                <p className="text-gray-500 mb-4">Full stack CEO</p>
                            </div>
                        </div>
                        <div className="sm:w-1/3">
                            <div className="bg-white rounded-3xl text-center shadow p-4 transition transform hover:-translate-y-1">
                                <img
                                    src={martinImage}
                                    alt="Agent"
                                    className="w-full rounded-3xl mb-4"
                                />
                                <h3 className="text-xl font-bold mb-2">Martin Hansen</h3>
                                <p className="text-gray-500 mb-4">Chief Financial Officer (CFO) </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8" >
                    <div className="flex flex-col items-center justify-center sm:flex-row gap-8">
                        <div className="sm:w-1/3">
                            <div className="bg-white rounded-3xl text-center shadow p-4 transition transform hover:-translate-y-1">
                                <img
                                    src={sanderImage}
                                    alt="Agent"
                                    className="w-full rounded-3xl mb-4"
                                />
                                <h3 className="text-xl font-bold mb-2">Sander Fossedal</h3>
                                <p className="text-gray-500 mb-4">Tecnical Coordinator</p>
                            </div>
                        </div>
                        <div className="sm:w-1/3">
                            <div className="bg-white rounded-3xl text-center shadow p-4 transition transform hover:-translate-y-1">
                                <img
                                    src={mosesImage}
                                    alt="Agent"
                                    className="w-full rounded-3xl mb-4"
                                />
                                <h3 className="text-xl font-bold mb-2">Moses Wetes</h3>
                                <p className="text-gray-500 mb-4">Senior Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
}

export default AboutUs;