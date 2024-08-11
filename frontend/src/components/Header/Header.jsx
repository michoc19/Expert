import { useEffect, useRef,useContext } from 'react';
import Logo from '../../assets/images/Logo.jpeg';
import { NavLink, Link } from 'react-router-dom';
import userImg from '../../assets/images/userImg.png';
import { BiMenu } from "react-icons/bi";
import { authContext } from '../../context/AuthContex';

const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/experts',
    display: 'Find an Expert'
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/event',
    display: 'Event'
  },
  {
    path: '/contact',
    display: 'Contact'
  },
  
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const {user,role,token}=useContext(authContext);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);
    
  const toggleMenu = () => menuRef.current.classList.toggle('show_menu');
  return (
    <header className='header flex items-center' ref={headerRef}>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between'>
          <img src={Logo} alt='Logo' className='h-10' />
          <nav className='navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex items-center gap-8'>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-primaryColor text-[16px] leading-7 font-[600]'
                        : 'text-textColor text-[16px] leading-7 font-[500]'
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className='flex items-center gap-4'>
            { token && user ?  (<div className='flex items-center gap-2'>
                {/* Container for user photo and name, aligned horizontally */}
                <Link to={`${role === 'Expert' ? '/experts/profile/me' : '/users/profile/me'}`}>
                  {/* User photo */}
                  <figure className='w-[35px] h-[35px] rounded-full overflow-hidden'>
                    <img src={user.photo || userImg} className="w-full h-full object-cover" alt="User" />
                  </figure>
                </Link>
                {/* User name */}
                <div>
                  <Link to={`${role === 'Expert' ? '/experts/profile/me' : '/users/profile/me'}`}>
                    <h2 className='text-lg font-semibold'>{user ? user.FullName : 'Guest'}</h2>
                  </Link>
                </div>
              </div>
          ) : (
            <div>
              <Link to="/login">
                <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>
                  Login
                </button>
              </Link>
              <span className='md:hidden' ref={toggleMenu}>
                <BiMenu className='w-6 h-6 cursor-pointer' />
              </span>
            </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
