import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import imgg from "../../assets/images/imgg.jpg";
import aboutCardImg from "../../assets/images/aboutCardImg.png";

const About = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto relative">
                <div className="flex justify-between gap-6 lg:gap-8 flex-col lg:flex-row">
                    {/* Container for the about image */}
                    <div className="relative w-full lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 flex justify-center lg:justify-start">
                        <img src={imgg} alt="About" className="w-3/4 lg:w-[80%] xl:w-[70%] h-auto" />
                        <div className="absolute bottom-4 w-[200px] md:w-[250px] right-[-5%] md:right-[-5%] lg:right-[-10%] xl:right-[-15%]">
                            <img src={aboutCardImg} alt="About Card" className="w-full h-auto mb-20" />
                        </div>
                    </div>
                    {/* Container for the text content */}
                    <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 flex flex-col justify-center">
                        <h2 className="heading text-3xl lg:text-4xl font-semibold mb-4">Votre partenaire de confiance pour des consultations en ligne</h2>
                        <p className="text_para text-lg mb-6">
                            Nous facilitons votre accès à des conseils professionnels personnalisés grâce à notre plateforme intuitive. Que vous ayez besoin d'une expertise spécifique ou de conseils généraux, nos experts qualifiés sont là pour vous aider à chaque étape de votre parcours.
                        </p>
                        <Link to="/your-target-url">
                            <button className="btn bg-blue-600 text-white py-2 px-4 mt-20 rounded">En savoir plus</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;