import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import heroimg01 from '../assets/images/heroimg01.jpg';
import heroimg02 from '../assets/images/heroimg02.jpeg';
import heroimg03 from '../assets/images/heroimg03.jpeg';
import icon1 from '../assets/images/icon1.png';
import icon2 from '../assets/images/icon2.png';
import faqImg from '../assets/images/faqImg.jpg'
import About from "../components/about/About";
import featureImg from "../assets/images/featureImg.jpg";
import ServiceList from "../components/Service/ServiceList";
import Testimonial from '../components/Testimonial/Testimonial';
import ExpertList from '../components/Experts/ExpertList';
import FaqList from '../components/Faq/FaqList';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className='hero_section pt-[60px] 2xl:h-[800px]'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[40px] items-center justify-between'>
            <div className='lg:w-[570px]'>
              <h1 className='text-[12px] leading-[46px] text-headingColor font-[800] md:text-[35px] md:leading-[45px]'>
                Votre partenaire de confiance pour des consultations en ligne.
              </h1>
              <p className='text_para'>
                Nous facilitons votre accès à des conseils professionnels personnalisés grâce à notre plateforme intuitive. Que vous ayez besoin d'une expertise spécifique ou de conseils généraux, nos experts qualifiés sont là pour vous aider à chaque étape de votre parcours.
              </p>
              <button className='btn'>Request an Appointment</button>
            </div>
            <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                  30+
                </h2>
                <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                <p className='text_para'>Experts</p>
              </div>
              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                  100%
                </h2>
                <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                <p className='text_para'>Users Satisfaction</p>
              </div>
            </div>
            <div className='flex gap-[30px] justify-end'>
              <div>
                <img className='w-full' src={heroimg01} alt='Expert consultation' />
              </div>
              <div className='mt-[30px]'>
                <img className='w-full mb-[30px]' src={heroimg02} alt='Online consultation' />
                <img className='w-full' src={heroimg03} alt='Consultation service' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">Providing the best consulting services</h2>
            <p className='text_para text-center'>Consulting Is More Than Giving Advice</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {/* Service 1 */}
            <div className="py-[30px] px-5 flex flex-col items-center">
              <div className="flex items-center justify-center">
                <img src={icon1} alt="Find an Expert" />
              </div>
              <div className="mt-[30px] text-center">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
                  Find an Expert
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4">
                  Commencez votre voyage en choisissant l'expert qui correspond le mieux à votre domaine ou problème spécifique, afin de recevoir les conseils personnalisés dont vous avez besoin.
                </p>
                <Link to="/experts" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] flex items-center justify-center group hover:bg-primaryColor hover:border-none mx-auto">
                  <BsArrowRight />
                </Link>
              </div>
            </div>
            {/* Service 2 */}
            <div className="py-[30px] px-5 flex flex-col items-center">
              <div className="flex items-center justify-center">
                <img src={icon2} alt="Book an Appointment" />
              </div>
              <div className="mt-[30px] text-center">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
                  Book an Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4">
                  Les utilisateurs peuvent choisir la date et l'heure qui leur conviennent pour leur session de consultation, facilitant ainsi l'organisation de rendez-vous adaptés à leurs horaires.
                </p>
                <Link to="/experts" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] flex items-center justify-center group hover:bg-primaryColor hover:border-none mx-auto">
                  <BsArrowRight />
                </Link>
              </div>
            </div>
            {/* Service 3 */}
            <div className="py-[30px] px-5 flex flex-col items-center">
              <div className="flex items-center justify-center">
                <img src={icon1} alt="Expert Consultation" />
              </div>
              <div className="mt-[30px] text-center">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
                  Expert Consultation
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4">
                  Commencez votre voyage en choisissant l'expert qui correspond le mieux à votre domaine ou problème spécifique, afin de recevoir les conseils personnalisés dont vous avez besoin.
                </p>
                <Link to="/experts" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] flex items-center justify-center group hover:bg-primaryColor hover:border-none mx-auto">
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Consultant Services Section */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our consultant services</h2>
            <p className="text_para text-center text-lg">
              Choisissez la catégorie de votre choix selon votre besoin
            </p>
          </div>
          <ServiceList />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="flex flex-col lg:flex-row items-center mt-[50px] lg:mt-0">
        <div className="xl:w-[670px] pl-[40px]">
          <h2 className="heading">
            COMMENT KHABIRY FONCTIONNE ?
          </h2>
          <ul className="pl-4 mt-[30px]">
            <li className="text_para text-lg">1. Sélectionnez l'expert idéal</li>
            <li className="text_para text-lg">2. Planifiez votre consultation</li>
            <li className="text_para text-lg">3. Consultez par vidéo</li>
          </ul>
          <Link to="/">
            <button className="btn">Learn More</button>
          </Link>
        </div>
        <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
          <img src={featureImg} className="w-3/4 mr-[40px]" alt="Feature" style={{ borderRadius: '15px' }} />
          {/*<div className="w-[150px] lg:w-[248px] bg-white absolute left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
            {/ Content inside the absolute div if needed /}
          </div>*/}
        </div>
      </section>
      <section>
  <div className="container">
    <div className="xl:w-[470px] mx-auto">
      <h2 className="heading text-center">Our great Experts</h2>
      <p className="text_para text-center text-lg">
      Consultez les meilleurs, sans vous déplacer
      </p>
    </div>
    <ExpertList/>
  </div>
</section>
<section>
  <div className="container">
    <div className="flex justify-between gap-[50px] lg:gap-0">
      <div className="w-1/2 hidden md:block mr-[30px] ml-[10px]" >
        <img src={faqImg} alt="" style={{ borderRadius: '10px' }} />
      </div>
      <div className="w-full md:w-1/2 mr-[20px]">
        <h2 className="heading mb-[25px]">
          Most questions by our beloved user
        </h2>
        <FaqList /> 
      </div>
    </div>
  </div>
</section>

      {/* Testimonial Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center text-3xl font-semibold mb-4">CLIENTS REVIEWS</h2>
            <p className="text_para text-center text-lg">
              Les domaines d’intervention de nos experts
            </p>
          </div>
          <Testimonial/>
        </div>
      </section>
    </>
  );
};

export default Home;