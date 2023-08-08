import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

function getWindowWidth() {
    const { innerWidth } = window;
    return innerWidth;
}


const Logo = () => {
    // return (
    //     <Link href="/">
    //         <a
    //             className={`
    //         ${logoColor}
    //         cursor-pointer font-poppins font-semibold text-xl md:text-2xl lg:text-3xl text-center`}
    //         >
    //             PlanWeb
    //         </a>
    //     </Link>
    // );

    //Color of the logo on mobile home
    const { pathname } = useRouter();
    const [ logoSrc, setLogoSrc ] = useState("/logo.svg");
    const [windowWidth, setWindoWidth] = useState();

    
   
    useEffect( () => {
        setWindoWidth(window.innerWidth);
        if((pathname==="/publicidad-digital") || ( pathname === "/contacto" && windowWidth <= 400 )  ){
            setLogoSrc("/logo-white.svg");
        } else {
            setLogoSrc("/logo.svg")
        }

        return() => setLogoSrc("/logo.svg")
    },[ windowWidth, pathname ]);

    function resizeHandler(){
        let ww = getWindowWidth()
        //console.log(ww)
        //setWindoWidth(ww)
        if(ww <= 550 && pathname==="/contacto" ){
            setLogoSrc("/logo-white.svg");
        } else if(ww > 400 &&pathname==="/contacto") {
            setLogoSrc("/logo.svg")
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


    return (
        <Link href="/" legacyBehavior>
            <a
                className={`
            cursor-pointer font-poppins font-semibold text-xl md:text-2xl lg:text-3xl text-center`}
            >
                <Image
                    alt="Planweb logo"
                    src={logoSrc}
                    height={34} width={156}
                />
            </a>
        </Link>
    );
};

const NavigationDesktop = ({ menu }) => {
    return (
        <header className={`desktop__header max-w-[1540px] xxl:px-0 mx-auto`}>
            <div className="desktop__logo">
                <Logo />
            </div>

            <nav className="desktop__nav">
                <ul>
                    
                    {menu.map((element, i) => (
                        <li key={i}>
                        <Link href={element.link} legacyBehavior>
                           
                            {
                                <a >{element.title}</a>
                            }
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
    //End Navigation open/close
    return (
        <>
            <div className="logo-mobile">
                <Logo  />
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
                    <span className={`navbar__responsive--icon  `}>&nbsp;</span>
                </label>

                <div className="navbar__responsive--background">&nbsp;</div>

                <div className="navbar__responsive--nav">
                    <ul className="navbar__responsive--list">
                        {menu.map((element, i) => (
                            <li key={i} className="navbar__responsive--item">
                            <Link href={element.link} legacyBehavior>
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
