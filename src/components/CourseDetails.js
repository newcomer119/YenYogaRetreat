import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import CourseSelection from "./CourseSelection";
import Typical from "react-typical";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { client } from "../lib/sanity";
import { TbFaceIdError } from "react-icons/tb";
import { FaMapPin } from "react-icons/fa6";
import { buttons, sectionHeaders } from "../data";

const CourseDetails = () => {
	const [course, setCourse] = useState(null);
	const [loading, setLoading] = useState(true);
	const [showForm, setShowForm] = useState(false);
	const { language } = useLanguage();
	const { pathname } = useLocation();
	const id = pathname.split("/").pop() - 1;
	const langKey = language === "vn" ? "vi" : language;

	useEffect(() => {
		const fetchCourse = async () => {
			try {
				const query = `*[_type == "course" && isActive == true] | order(order asc) {
          "title": coalesce(${language === "vi" ? "titleVi" : "title"}, title),
          "description": coalesce(${
						language === "vi" ? "descriptionVi" : "description"
					}, description),
          duration,
          price,
          "imageUrl": image.asset->url,
          "features": coalesce(${
						language === "vi" ? "featuresVi" : "features"
					}, features)
        }`;

				const results = await client.fetch(query);
				// Set the course based on the id from the URL
				setCourse(results[id]);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching course:", error);
				setLoading(false);
			}
		};

		setLoading(true);
		fetchCourse();
	}, [language, id]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!course) {
		return (
			<div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
				<TbFaceIdError
					size={60}
					className='text-red-100'
				/>
				<h1 className='text-3xl font-bold text-gray-800 mb-6'>
					{sectionHeaders[language].courseNotFound}
				</h1>
				<Link to='/courses'>
					<button className='px-6 py-3 bg-green-200 text-white rounded-lg shadow-md hover:bg-green-700 transition-all'>
						{buttons[language].viewCourses}
					</button>
				</Link>
			</div>
		);
	}

	console.log(course);

	return (
		<div className='top-section'>
			<div className='sectionHeaders text-cta2'>{course.title[langKey]}</div>
			<div className='flex flex-col tab2:flex-row gap-8'>
				<div className='w-full tab2:w-1/2'>
					<div className='relative flex flex-col gap-4'>
						<img
							src={course.imageUrl}
							alt={course.title[langKey]}
							className='  w-full object-cover'
						/>
						<div className='absolute top-1 right-2 bg-red-100 text-white font-bold text-sm px-3 py-1 rounded-lg z-10'>
							{course.price[langKey]}
						</div>
						<div className='w-full flex justify-between gap-6 px-4'>
							<div className='flex gap-2 items-center'>
								<FaMapPin />
								<div className='text-wrap font-light text-sm'>
									{course.duration[langKey]}
								</div>
							</div>
							<button
								className='text-nowrap text-bold text-white text-xl animate-bounce bg-cta2 rounded-lg px-2 py-1'
								onClick={() => setShowForm(true)}>
								{buttons[language].bookNow}
							</button>
						</div>
					</div>
				</div>
				<div className='w-full tab2:w-1/2 text-body'>
					<div className='text-center font-semibold italic text-xl pb-2 mb-2 border-b border-dotted'>
						"{course.description[langKey]}"
					</div>
					<div className='text-center text-lg pb-2 mb-2 '>{course.features[0][langKey]}</div>
				</div>
			</div>
      <div>Course Details: {course.features[1][langKey]}</div>
      <div className="py-8">Certificate Requirements: yha p features 2 add krdio file m se requirements utha k</div>

      <div>Or fir yha accomodation</div>

      
      <div>last m baki courses ko map krdio jo phle se mapped ni header.button</div>

			<CourseSelection
				course={course}
				isOpen={showForm}
				onClose={() => setShowForm(false)}
			/>
		</div>
	);
};

export default CourseDetails;


