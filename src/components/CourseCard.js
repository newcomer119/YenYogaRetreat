import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { buttons } from "../data";
import { useLanguage } from "../context/LanguageContext";
import CourseSelection from "./CourseSelection";

const CourseCard = ({ course, index }) => {
	const { language } = useLanguage();
	const [mobile, setMobile] = useState(window.innerWidth <= 769);
	const { id, image } = course;
	const { title, summary, type } = course[language];

	useEffect(() => {
		const handleResize = () => {
			setMobile(window.innerWidth <= 1025);
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const getDates = (x) => {
		if (!type[x]) {
			return "Not Available";
		}
		const { startDate, endDate } = type[x];
		return `${startDate} - ${endDate}`;
	};

	const [isOpen, setIsOpen] = useState(false);

	const handleBookNow = () => {
		setIsOpen(true);
	};

	return (
		<div
			className={`relative flex flex-col min-w-72 max-w-[400px] bg-bg2 rounded-b-lg shadow-lg`}
			// data-aos="fade-up"
			// data-aos-delay={50 * index}
		>
			{/* Image Section */}
			<div className='relative'>
				<img
					src={image}
					alt={title}
					className='w-full object-cover object-center h-72'
				/>
				{!mobile && (
					<div className='absolute inset-0 flex justify-center items-center gap-4 opacity-0 hover:opacity-100 bg-primary bg-opacity-40 transition-all duration-200'>
						<button
							onClick={handleBookNow}
							className='bg-cta1 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-hover1 transition-all duration-300'>
							{buttons[language].bookNow}
						</button>
						<Link
							to={`/courses/${id}`}
							className='bg-light text-headings2 py-2 px-4 rounded-lg shadow-lg hover:bg-hover2 hover:text-white transition-all'>
							{buttons[language].moreInfo}
						</Link>
					</div>
				)}
			</div>

			{/* Text Section */}
			<div className='p-4 divide-y divide-dotted divide-gray flex flex-col justify-between h-full'>
				<div>
					<div className='text-base tab:text-lg tab2:text-xl big:text-2xl font-bold mb-2 leading-tight text-primary line-clamp-2'>
						<Link
							to={`/courses/${id}`}
							className='hover:text-headings1'>
							{title}
						</Link>
					</div>
					<p className='text-xs tab1:text-base big:text-lg font-medium line-clamp-2 text-body mb-2'>
						{summary}
					</p>
				</div>

				<div className='text-xs tab2:text-sm mt-2 text-body'>
					<div className='pt-1 tab2:pt-2'>
						<span className='text-sm tab2:text-base font-medium text-cta1'>
							{buttons[language].online} :{" "}
						</span>
						{getDates("online")}
					</div>
					<div className='pb-3 tab2:pb-5'>
						<span className='text-sm tab2:text-base font-medium text-accent1'>
							{buttons[language].offline}:{" "}
						</span>
						{getDates("offline")}
					</div>
					{mobile && (
						<div className='flex justify-center items-center gap-4'>
							<button
								className='bg-cta1 text-white py-2 px-4 rounded-lg'
								onClick={handleBookNow}>
								{buttons[language].bookNow}
							</button>
							<Link
								to={`/courses/${id}`}
								className='bg-highlight2 text-headings2 py-2 px-4 rounded-lg'>
								{buttons[language].moreInfo}
							</Link>
						</div>
					)}
				</div>
			</div>
			<CourseSelection
				course={course}
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			/>
		</div>
	);
};

export default CourseCard;
