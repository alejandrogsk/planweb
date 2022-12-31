
import Link from 'next/link'
import React from 'react'

const Footer = ({menu}) => {



  return (
    <footer className="max-w-[1540px] mx-auto bg-custom-black grid items-center	 gap-4 md:gap-8  grid-cols-1 md:grid-cols-[1fr_1fr_1fr] grid-rows-3 md:grid-rows-2 py:12 md:py-20 px-6 md:px-12 lg:px-16">
        <ul className="flex flex-col items-center md:flex-row col-start-1 col-end-2 md:col-start-2 md:col-end-4 row-start-2 row-end-3 md:row-start-1 row-end-2 justify-self-center md:justify-self-end	flex">
            {
                menu.map((element, index)=> (
                    <Link key={index} href={element.link} legacyBehavior >
                        <a className="text-white text-base uppercase font-normal first:ml-0 ml-0 md:ml-4 first:mt-0 mt-4 md:mt-0">{element.title}</a>
                    </Link>
                ))
            }
        </ul>

        <Link href="/">

        
        <div className="flex justify-center	md:justify-start">
        <svg width="153" height="34" viewBox="0 0 153 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_683_79)">
<path d="M55.025 13.8C55.025 14.6833 54.8167 15.5167 54.4 16.3C53.9833 17.0833 53.3167 17.725 52.4 18.225C51.4833 18.7083 50.3083 18.95 48.875 18.95H45.725V26H42.875V8.625H48.875C50.2083 8.625 51.3333 8.85833 52.25 9.325C53.1833 9.775 53.875 10.3917 54.325 11.175C54.7917 11.9583 55.025 12.8333 55.025 13.8ZM48.875 16.625C49.9583 16.625 50.7667 16.3833 51.3 15.9C51.8333 15.4 52.1 14.7 52.1 13.8C52.1 11.9 51.025 10.95 48.875 10.95H45.725V16.625H48.875ZM60.5932 7.5V26H57.7432V7.5H60.5932ZM63.385 19.05C63.385 17.6667 63.6683 16.4417 64.235 15.375C64.8183 14.3083 65.6016 13.4833 66.585 12.9C67.585 12.3 68.685 12 69.885 12C70.9683 12 71.91 12.2167 72.71 12.65C73.5266 13.0667 74.1766 13.5917 74.66 14.225V12.225H77.535V26H74.66V23.95C74.1766 24.6 73.5183 25.1417 72.685 25.575C71.8516 26.0083 70.9016 26.225 69.835 26.225C68.6516 26.225 67.5683 25.925 66.585 25.325C65.6016 24.7083 64.8183 23.8583 64.235 22.775C63.6683 21.675 63.385 20.4333 63.385 19.05ZM74.66 19.1C74.66 18.15 74.46 17.325 74.06 16.625C73.6766 15.925 73.1683 15.3917 72.535 15.025C71.9016 14.6583 71.2183 14.475 70.485 14.475C69.7516 14.475 69.0683 14.6583 68.435 15.025C67.8016 15.375 67.285 15.9 66.885 16.6C66.5016 17.2833 66.31 18.1 66.31 19.05C66.31 20 66.5016 20.8333 66.885 21.55C67.285 22.2667 67.8016 22.8167 68.435 23.2C69.085 23.5667 69.7683 23.75 70.485 23.75C71.2183 23.75 71.9016 23.5667 72.535 23.2C73.1683 22.8333 73.6766 22.3 74.06 21.6C74.46 20.8833 74.66 20.05 74.66 19.1ZM88.2283 12C89.3117 12 90.2783 12.225 91.1283 12.675C91.995 13.125 92.67 13.7917 93.1533 14.675C93.6367 15.5583 93.8783 16.625 93.8783 17.875V26H91.0533V18.3C91.0533 17.0667 90.745 16.125 90.1283 15.475C89.5117 14.8083 88.67 14.475 87.6033 14.475C86.5367 14.475 85.6867 14.8083 85.0533 15.475C84.4367 16.125 84.1283 17.0667 84.1283 18.3V26H81.2783V12.225H84.1283V13.8C84.595 13.2333 85.1867 12.7917 85.9033 12.475C86.6367 12.1583 87.4117 12 88.2283 12ZM120.139 8.625L114.989 26H111.764L108.114 12.85L104.239 26L101.039 26.025L96.1137 8.625H99.1387L102.739 22.775L106.639 8.625H109.839L113.464 22.7L117.089 8.625H120.139ZM135.114 18.775C135.114 19.2917 135.081 19.7583 135.014 20.175H124.489C124.573 21.275 124.981 22.1583 125.714 22.825C126.448 23.4917 127.348 23.825 128.414 23.825C129.948 23.825 131.031 23.1833 131.664 21.9H134.739C134.323 23.1667 133.564 24.2083 132.464 25.025C131.381 25.825 130.031 26.225 128.414 26.225C127.098 26.225 125.914 25.9333 124.864 25.35C123.831 24.75 123.014 23.9167 122.414 22.85C121.831 21.7667 121.539 20.5167 121.539 19.1C121.539 17.6833 121.823 16.4417 122.389 15.375C122.973 14.2917 123.781 13.4583 124.814 12.875C125.864 12.2917 127.064 12 128.414 12C129.714 12 130.873 12.2833 131.889 12.85C132.906 13.4167 133.698 14.2167 134.264 15.25C134.831 16.2667 135.114 17.4417 135.114 18.775ZM132.139 17.875C132.123 16.825 131.748 15.9833 131.014 15.35C130.281 14.7167 129.373 14.4 128.289 14.4C127.306 14.4 126.464 14.7167 125.764 15.35C125.064 15.9667 124.648 16.8083 124.514 17.875H132.139ZM140.769 14.275C141.252 13.6083 141.911 13.0667 142.744 12.65C143.594 12.2167 144.536 12 145.569 12C146.786 12 147.886 12.2917 148.869 12.875C149.852 13.4583 150.627 14.2917 151.194 15.375C151.761 16.4417 152.044 17.6667 152.044 19.05C152.044 20.4333 151.761 21.675 151.194 22.775C150.627 23.8583 149.844 24.7083 148.844 25.325C147.861 25.925 146.769 26.225 145.569 26.225C144.502 26.225 143.552 26.0167 142.719 25.6C141.902 25.1833 141.252 24.65 140.769 24V26H137.919V7.5H140.769V14.275ZM149.144 19.05C149.144 18.1 148.944 17.2833 148.544 16.6C148.161 15.9 147.644 15.375 146.994 15.025C146.361 14.6583 145.677 14.475 144.944 14.475C144.227 14.475 143.544 14.6583 142.894 15.025C142.261 15.3917 141.744 15.925 141.344 16.625C140.961 17.325 140.769 18.15 140.769 19.1C140.769 20.05 140.961 20.8833 141.344 21.6C141.744 22.3 142.261 22.8333 142.894 23.2C143.544 23.5667 144.227 23.75 144.944 23.75C145.677 23.75 146.361 23.5667 146.994 23.2C147.644 22.8167 148.161 22.2667 148.544 21.55C148.944 20.8333 149.144 20 149.144 19.05Z" fill="white"/>
<rect y="8" width="20" height="20" rx="10" fill="white"/>
<rect x="14" y="8" width="20" height="20" rx="10" fill="#FFF507"/>
</g>
<defs>
<clipPath id="clip0_683_79">
<rect width="153" height="34" fill="white"/>
</clipPath>
</defs>
</svg>


        </div>
</Link>

        <span className="text-white text-base row-start-3 md:row-start-2 row-end-4 md:row-end-3 col-start-1 md:col-start-3 col-end-2 md:col-end-4 justify-self-center md:justify-self-end	font-poppins font-medium">Copyright PlanWeb | 2022.</span>
    </footer>
  )
}

export default Footer