import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function getWindowWidth() {
    const { innerWidth } = window;
    return innerWidth;
}
function getDistanceTop() {
    const { screenY } = window;
    return screenY;
}

const Logo = ({logoColor="text-black"}) => {
    
    return (
        <Link href="/">
            <a
                className={`
            ${logoColor}
            cursor-pointer font-poppins font-semibold text-xl md:text-2xl lg:text-3xl text-center`}
            >
                PlanWeb
            </a>
        </Link>
    );
};

const NavigationDesktop = ({ menu }) => {
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
                    {menu.map((element, i) => (
                        <li key={i}>
                            <Link href={element.link} >
                                <a>{element.title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

const NavigationMobile = ({ menu }) => {
    //Naviggation open/close
    const navigationCheck = useRef(null);
    const handleNav = () => {
        if (navigationCheck.current.checked === true) {
            navigationCheck.current.checked = false;
        }
    };

    const { pathname } = useRouter();

    //Color of the logo on mobile home
    const [ logoColor, setLogoColor ] = useState("text-black");
    const [windowWidth, setWindoWidth] = useState();
    
    useEffect(() => {
        setWindoWidth(window.innerWidth);
        //console.log(`window.innerWidth: ${window.innerWidth}`);
        //console.log(`windowWidth initial is: ${windowWidth}`);
        if (windowWidth < 768 && pathname==="/") {
            setLogoColor("text-white");
        } else {
            setLogoColor("text-black");
        }
    },[windowWidth, pathname]);

    function resizeHandler(){
        let ww = getWindowWidth()
        //console.log(ww)
        if(windowWidth < 768 && ww > 768 && pathname==="/"){
            setWindoWidth(ww);
        } else if(windowWidth > 768 && ww < 768 && pathname==="/") {
            setWindoWidth(ww);
        } else {
            return
        }
    }

    useEffect(()=>{
        window.addEventListener("resize", resizeHandler);
        return()=>{
            window.removeEventListener("resize",resizeHandler);
        }
    })


    //If the user is in the home, the mobile menu should be white the firts 650px on VH so the menu can be visible
    // white-mobile-menu
    const [ menuWhite, setMenuWhite ] = useState('')

    function mobileMenuColorInHome() {
        if (window !== undefined && pathname==="/") {
          let windowHeight = window.scrollY;
          windowHeight < 650 ? setMenuWhite('white-mobile-menu') : setMenuWhite('');
        }
    };

    useEffect( ()=> {
        window.addEventListener("scroll", 
            mobileMenuColorInHome
        )
        return () => {
            window.removeEventListener('scroll', mobileMenuColorInHome())
        }
    })

    



    return (
        <>
            <div className="logo-mobile">
                <Logo logoColor={logoColor} />
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
                    <span className={`navbar__responsive--icon  ${menuWhite}`}>&nbsp;</span>
                </label>

                <div className="navbar__responsive--background">&nbsp;</div>

                <div className="navbar__responsive--nav">
                    <ul className="navbar__responsive--list">
                        {menu.map((element, i) => (
                            <li key={i} className="navbar__responsive--item">
                                <Link href={element.link}>
                                    <a
                                        onClick={handleNav}
                                        className="navbar__responsive--link"
                                    >
                                        {element.title}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

const Navigation = ({ menu, cta }) => {

    



    return (
        <>
            <NavigationDesktop menu={menu} cta={cta} />
            <NavigationMobile menu={menu} />
        </>
    );
};

export default Navigation;
