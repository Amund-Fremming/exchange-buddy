import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Faq() {
    return (
      <>
        <Navbar />
        <div className="flex items-center justify-center h-screen">
            <div className="bg-gray-200 rounded-xl shadow-xl hover:shadow-2xl justify-center">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold">
                        FAQ
                    </h2>
                    <p className="mt-4 mb-8 text-gray-600">
                        Frequently asked questions and their answers.
                    </p>
                    <div className="space-y-4">
                        <details className="w-full max-w-md rounded-lg ring-2 ring-green-900 transition transform hover:-translate-y-1">
                            <summary className="px-4 py-6">
                                How does the payment work?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                When you and another person agrees to share an apartment for the year, 
                                you write a contract so the person moving in sends the money to the initial renter
                                and this person will pay the rent to the landlord.
                            </p>
                        </details>
                        <details className="w-full max-w-md rounded-lg ring-2 ring-green-900 transition transform hover:-translate-y-1">
                            <summary className="px-4 py-6">
                            What happens if the owner of the apartment termniates the contract?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            in this case we cannot provide any insurance or guarantee, but we will try to help you find a new apartment.
                            </p>
                        </details>
                        <details className="w-full max-w-md rounded-lg ring-2 ring-green-900 transition transform hover:-translate-y-1">
                            <summary className="px-4 py-6">
                            What happens if the person moving in does not pay the rent?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 mt-4 text-gray-600">
                            Because of the contract, the person moving in is responsible for paying the rent ny law,
                            so normal insurances will not cover this. We will try to help you find a new person to move in.
                            </p>
                        </details>
                        <details className="w-full max-w-md rounded-lg ring-2 ring-green-900 transition transform hover:-translate-y-1">
                            <summary className="px-4 py-6">
                            No one wants to move in with me, what should I do?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            If you have problems getting someone to move in with you, we reccomend you to try to 
                            update your profile and article with better pictures and more information about yourself.
                            </p>
                        </details>
                        <details className="w-full max-w-md rounded-lg ring-2 ring-green-900 transition transform hover:-translate-y-1">
                            <summary className="px-4 py-6">
                            I want to switch apartments with someone in the city i am going to, how do i do that?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            If you want to switch apartments with someone in the city you are going to, you can do 
                            that by going to the search page and searching for the city you are going to, and choose
                            the opposite term of the one you are looking for.
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
      </>
    );
}

