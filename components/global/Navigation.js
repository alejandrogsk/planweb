import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Logo = () => {

    return(
        // <Link href="/">
        // <img style={{cursor:"pointer"}} src="/logo.png" alt="smooth design logo" />
        // </Link>

        <Link href="/">
            <a className="logo">
            <svg width="124" height="19" viewBox="0 0 124 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8558 5.95C12.8558 6.88333 12.6308 7.75833 12.1808 8.575C11.7474 9.39167 11.0558 10.05 10.1058 10.55C9.17243 11.05 7.9891 11.3 6.55576 11.3H3.63076V18H0.130762V0.55H6.55576C7.90576 0.55 9.05576 0.783333 10.0058 1.25C10.9558 1.71667 11.6641 2.35833 12.1308 3.175C12.6141 3.99167 12.8558 4.91667 12.8558 5.95ZM6.40576 8.475C7.37243 8.475 8.0891 8.25833 8.55576 7.825C9.02243 7.375 9.25576 6.75 9.25576 5.95C9.25576 4.25 8.30576 3.4 6.40576 3.4H3.63076V8.475H6.40576ZM19.0907 15.225H24.8407V18H15.5907V0.55H19.0907V15.225ZM38.0153 14.675H31.0653L29.9153 18H26.2403L32.5153 0.524998H36.5903L42.8653 18H39.1653L38.0153 14.675ZM37.0653 11.875L34.5403 4.575L32.0153 11.875H37.0653ZM60.3858 18H56.8858L48.9608 6.025V18H45.4608V0.524998H48.9608L56.8858 12.525V0.524998H60.3858V18Z" fill="black"/>
<path d="M87.4196 0.55L82.5446 18H78.4196L75.1446 5.575L71.7196 18L67.6196 18.025L62.9196 0.55H66.6696L69.7446 14.1L73.2946 0.55H77.1946L80.5446 14.025L83.6446 0.55H87.4196ZM93.455 3.375V7.75H99.33V10.525H93.455V15.15H100.08V18H89.955V0.524998H100.08V3.375H93.455ZM113.411 9.05C114.394 9.23333 115.202 9.725 115.836 10.525C116.469 11.325 116.786 12.2417 116.786 13.275C116.786 14.2083 116.552 15.0333 116.086 15.75C115.636 16.45 114.977 17 114.111 17.4C113.244 17.8 112.219 18 111.036 18H103.511V0.55H110.711C111.894 0.55 112.911 0.741666 113.761 1.125C114.627 1.50833 115.277 2.04167 115.711 2.725C116.161 3.40833 116.386 4.18333 116.386 5.05C116.386 6.06667 116.111 6.91667 115.561 7.6C115.027 8.28333 114.311 8.76667 113.411 9.05ZM107.011 7.75H110.211C111.044 7.75 111.686 7.56667 112.136 7.2C112.586 6.81667 112.811 6.275 112.811 5.575C112.811 4.875 112.586 4.33333 112.136 3.95C111.686 3.56667 111.044 3.375 110.211 3.375H107.011V7.75ZM110.536 15.15C111.386 15.15 112.044 14.95 112.511 14.55C112.994 14.15 113.236 13.5833 113.236 12.85C113.236 12.1 112.986 11.5167 112.486 11.1C111.986 10.6667 111.311 10.45 110.461 10.45H107.011V15.15H110.536ZM121.375 18.175C120.742 18.175 120.217 17.9833 119.8 17.6C119.4 17.2 119.2 16.7083 119.2 16.125C119.2 15.5417 119.4 15.0583 119.8 14.675C120.217 14.275 120.742 14.075 121.375 14.075C121.992 14.075 122.5 14.275 122.9 14.675C123.3 15.0583 123.5 15.5417 123.5 16.125C123.5 16.7083 123.3 17.2 122.9 17.6C122.5 17.9833 121.992 18.175 121.375 18.175Z" fill="#F84525"/>
</svg>

            </a>
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