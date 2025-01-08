import React from "react";
import { useLocation } from "react-router-dom";
import { nav } from "../data";
import { useLanguage } from "../context/LanguageContext";

const Nav = () => {
	const location = useLocation();
	const { language } = useLanguage();

	return (
		<nav className='hidden tab2:block mx-auto'>
			<ul className='flex'>
				{nav.map((item, index) => {
					const isActive = location.pathname === item[language].href;
					return (
						<li
							key={index}
							className='relative group mx-3 lap:mx-4'>
							<a
								id='navlinks'
								href={item[language].href}
								className={`${
									isActive ? "font-black" : "font-bold"
								} inline-block transition-colors duration-300 pb-0.5 text-center text-xs lap:text-base leading-4 
                  `}>
								{item[language].name}
								<span
									className={`absolute left-0 bottom-0 w-full h-0.5 transform origin-left transition-transform duration-300 ease-out
                    ${
											isActive
												? "scale-x-100"
												: "scale-x-0 group-hover:scale-x-100"
										}`}
									style={{ marginTop: "0px" }}
								/>
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Nav;
