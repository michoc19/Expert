import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.jpeg';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai';

const socialLinks = [
  {
    path: "https://www.youtube.com/@khabirycom",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://web.facebook.com/khabirycom/?_rdc=1&_rdr",
    icon: <AiFillFacebook className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/khabirycom/",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/company/khabirycom/",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/blog",
    display: "Blog",
  },
];
const quickLinks03 = [
  {
    path: "/",
    display: "Contactez-nous",
  },
  {
    path: "/",
    display: "Politique de confidentialité",
  },
  

];
const quickLinks02 = [
  {
    path: "/find-an-Expert",
    display: "Find an Expert",
  },
  {
    path: "/",
    display: "Request an Appointment",
  },
  {
    path: "/",
    display: "Get an opinion",
  },
];


const Footer = ({ year }) => {
  return (
    <footer className="pb-16 pt-10">
      <div className="container mx-auto">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-8">
          <div>
            <img src={Logo} alt="Logo" />
            <p className="text-sm leading-7 font-normal text-gray-600 mt-4">
              © {year} Khabiry. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-3 mt-4">
            {socialLinks.map((link, index) => (
              <a
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="w-9 h-9 border border-solid border-gray-400 rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Quick Links</h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>I want to</h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Support</h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
