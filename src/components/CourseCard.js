import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import CourseSelection from "./CourseSelection";
import { Link } from "react-router-dom";
import { buttons } from "../data";

const CourseCard = ({ course, index }) => {
	const { language } = useLanguage();
	const [showForm, setShowForm] = useState(false);
	const [mobile, setMobile] = useState(window.innerWidth <= 769);

	useEffect(() => {
		const handleResize = () => {
			setMobile(window.innerWidth <= 1025);
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// Convert 'vn' to 'vi' to match Sanity schema
	const langKey = language === "vn" ? "vi" : language;

	return (
		<div
			className={`relative flex flex-col min-w-72 max-w-[400px] bg-bg2 rounded-b-lg shadow-lg`}
			// data-aos="fade-up"
			// data-aos-delay={50 * index}
		>
			{/* Image Section */}
			<div className='relative'>
				<img
					src={course.imageUrl}
					alt={course.title[langKey]}
					className='w-full object-cover object-center'
				/>
				{!mobile && (
					<div className='absolute inset-0 flex justify-center items-center gap-4 opacity-0 hover:opacity-100 bg-primary bg-opacity-40 transition-all duration-200'>
						<button
							onClick={() => setShowForm(true)}
							className='bg-cta1 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-hover1 transition-all duration-300'>
							{buttons[language].bookNow}
						</button>
						<Link
							to={`/course-details/${index+1}`}
							className='bg-light text-headings2 py-2 px-4 rounded-lg shadow-lg hover:bg-hover2 hover:text-white transition-all'>
							{buttons[language].moreInfo}
						</Link>
					</div>
				)}
				<div className='absolute top-1 right-2 bg-red-100 text-white font-bold text-sm px-3 py-1 rounded-lg '>
					{course.price[langKey]}
				</div>
			</div>

			{/* Text Section */}
			<div className='p-4 divide-y divide-dotted divide-gray flex flex-col justify-between h-full'>
				<div>
					<div className='text-base tab:text-lg tab2:text-xl big:text-2xl font-bold mb-2 leading-tight text-primary line-clamp-2'>
						<Link
							to={`/course-details/${index+1}`}
							className='hover:text-headings1'>
							{course.title[langKey]}
						</Link>
					</div>
					<p className='text-xs tab1:text-base big:text-lg font-medium line-clamp-2 text-body mb-2'>
						{course.description[langKey]}
					</p>
				</div>

				<div className='text-xs tab2:text-sm mt-2 text-body pt-4'>
					{mobile && (
						<div className='flex justify-center items-center gap-4 '>
							<button
								className='bg-cta1 text-white py-2 px-4 rounded-lg'
								onClick={() => setShowForm(true)}>
								{buttons[language].bookNow}
							</button>
							<Link
								to={`/course-details/${index+1}`}
								className='bg-highlight2 text-headings2 py-2 px-4 rounded-lg'>
								{buttons[language].moreInfo}
							</Link>
						</div>
					)}
				</div>
			</div>
			<CourseSelection
				course={course}
				isOpen={showForm}
				onClose={() => setShowForm(false)}
			/>
		</div>
	);
};

export default CourseCard;
