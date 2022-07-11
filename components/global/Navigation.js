import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Logo = () => {

    return(
        <Link href="/">
        <img style={{cursor:"pointer"}} src="/logo.png" alt="smooth design logo" />
        </Link>
    )
}


const NavigationDesktop = ({ menu, cta }) => {

    const {route} = useRouter();
    //Sticky Navigation
    // const [stickyClass, setStickyClass] = useState('relative');

    // useEffect(() => {
    //   window.addEventListener('scroll', stickNavbar);
  
    //   return () => {
    //     window.removeEventListener('scroll', stickNavbar);
    //   };
    // }, []);
  
    // const stickNavbar = () => {
    //   if (window !== undefined) {
    //     let windowHeight = window.scrollY;
    //     windowHeight > 500 ? setStickyClass('sticky') : setStickyClass('relative');
    //   }
    // };
    
    //Should put ${stickyClass} in Header tag
    //End Sticky navigation

    return (
        <header className={`desktop__header `}>
            <div className="desktop__logo">

            <Logo />

            </div>
            <nav className="desktop__nav">
                <ul>
                    {
                        menu.map((element, i) => (
                            <Link href={element.link} key={i}>
                                <a className={(route === element.link) ? 'underline underline__orange' : ''}>{element.title}</a>
                            </Link>
                        ))
                    } 
                </ul>
            </nav>
            <Link href={cta.link}>
            <a
                className="desktop__cta "
                >
                {cta.title}
            </a>
                </Link>
        </header>
    );
};

const NavigationMobile = ({menu}) => {
    const navigationCheck = useRef(null);



    const handleNav = () => {
        if(navigationCheck.current.checked === true){
            navigationCheck.current.checked=false;
        }
    }


    return (
        <>
            <div className="logo-mobile">
                <Logo />
            </div>

            <div className="navbar__responsive d-n">
                <input
                    ref={navigationCheck}
                    type="checkbox"
                    className="navbar__responsive--checkbox"
                    id="navi-toggle"
                />

                <label
                    htmlFor="navi-toggle"
                    className="navbar__responsive--button"
                >
                    <span className="navbar__responsive--icon">&nbsp;</span>
                </label>

                <div className="navbar__responsive--background">&nbsp;</div>

                <div className="navbar__responsive--nav">
                    <ul className="navbar__responsive--list">
            {
                menu.map((element,i) => (
                        <li key={i} className="navbar__responsive--item">
                            <Link href={element.link}>
                                <a onClick={handleNav} className="navbar__responsive--link">
                                    {element.title}
                                </a>
                            </Link>
                        </li>
                ))
            }
                        
                        <Link href="/contact">
                                <a onClick={handleNav} className="navbar__responsive--link">
                                    Contacto
                                </a>
                            </Link>
                    </ul>
                </div>
            </div>
        </>
    );
};

const Navigation = ({menu, cta}) => {
    return (
        <>
            <NavigationDesktop menu={menu} cta={cta}/>
            <NavigationMobile menu={menu}/>
        </>
    );
};

export default Navigation;