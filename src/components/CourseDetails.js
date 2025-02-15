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
import DetailsImage1 from "../assets/img/DetailsImage/img1.jpg";
import DetailsImage2 from "../assets/img/DetailsImage/img2.jpg";
import DetailsImage3 from "../assets/img/DetailsImage/img3.jpg";
import DetailsImage4 from "../assets/img/DetailsImage/img4.jpg";
import DetailsImage5 from "../assets/img/DetailsImage/img5.jpg";
import DetailsImage6 from "../assets/img/DetailsImage/img6.jpg";
import DetailsImage7 from "../assets/img/DetailsImage/img7.jpg";
import DetailsImage8 from "../assets/img/DetailsImage/img8.jpg";
import DetailsImage9 from "../assets/img/DetailsImage/img9.jpg";
import DetailsImage10 from "../assets/img/DetailsImage/img10.jpg";
import DetailsImage11 from "../assets/img/DetailsImage/img11.jpg";
import DetailsImage12 from "../assets/img/DetailsImage/img12.jpg";
import DetailsImage13 from "../assets/img/DetailsImage/img13.jpg";
import DetailsImage14 from "../assets/img/DetailsImage/img14.jpg";
import { ImageModal } from "./Gallery";

const CourseDetails = () => {
	const [course, setCourse] = useState(null);
	const [loading, setLoading] = useState(true);
	const [showForm, setShowForm] = useState(false);
	const [results, setResults] = useState([]);
	const { language } = useLanguage();
	const { pathname } = useLocation();
	const id = pathname.split("/").pop() - 1;
	const langKey = language === "vn" ? "vi" : language;
	const [showSlider, setShowSlider] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Slider settings with continuous autoplay
	const sliderSettings = {
		dots: false, // Disable dots below the slider
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		centerMode: true,
		centerPadding: "60px",
		slidesToScroll: 1,
		autoplay: true, // Enable autoplay
		autoplaySpeed: 2000, // Set speed for autoplay (2 seconds)
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					centerPadding: "40px",
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					centerPadding: "20px",
				},
			},
		],
	};

	const handleViewCoursesClick = () => {
		setShowSlider(true);
		setIsModalOpen(false);
	};

	const handleAccommodationClick = () => {
		setShowSlider((prev) => !prev);
		setIsModalOpen(false);
	};

	const openModal = (image) => {
		setSelectedImage(image);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedImage(null);
	};

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

				const fetchedResults = await client.fetch(query);
				setResults(fetchedResults);
				setCourse(fetchedResults[id]);
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

	// Ensure course properties exist before accessing them
	const title = course.title ? course.title[langKey] : "Title not available";
	const description = course.description ? course.description[langKey] : "Description not available";
	const features = course.features && course.features.length > 1 ? course.features : ["Feature not available", "Feature not available"];

	console.log(course);

	return (
		<div className='top-section'>
			<div className='sectionHeaders text-cta2'>{title}</div>
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
						"{description}"
					</div>
					<div className='text-center text-lg pb-2 mb-2 '>{features[0][langKey]}</div>
				</div>
			</div>
			<div className="py-8 text-center">
				<h2 className="text-2xl font-semi-bold mb-4">Course Details</h2>
				<ul className="list-disc list-inside">
					{features.map((feature, index) => (
						<li key={index} className={`mb-2 ${index % 2 === 0 ? 'text-blue-600' : 'text-green-600'} font-bold text-lg`}>
							{feature[langKey]}
						</li>
					))}
				</ul>
			</div>

			<CourseSelection
				course={course}
				isOpen={showForm}
				onClose={() => setShowForm(false)}
			/>
			<div className="flex justify-center space-x-4 mt-4 mb-8">
				<button 
					className='px-6 py-3 bg-orange text-white rounded-lg shadow-md hover:bg-blue-500 transition-all'
					onClick={handleAccommodationClick}
				>
					Accommodation
				</button>
				<Link to='/courses'>
					<button 
						className='px-6 py-3 bg-green-300 text-white rounded-lg shadow-md hover:bg-green-500 transition-all'
						onClick={handleViewCoursesClick}
					>
						View Courses
					</button>
				</Link>
			</div>

			{/* Slider Modal */}
			{showSlider && (
				<div className="modal">
					<div className="modal-content">
						<Slider {...sliderSettings}>
							{[
								DetailsImage1,
								DetailsImage2,
								DetailsImage3,
								DetailsImage4,
								DetailsImage5,
								DetailsImage6,
								DetailsImage7,
								DetailsImage8,
								DetailsImage9,
								DetailsImage10,
								DetailsImage11,
								DetailsImage12,
								DetailsImage13,
								DetailsImage14,
							].map((image, index) => (
								<div key={index} className="px-2">
									<img
										src={image}
										alt={`Detail ${index + 1}`}
										className="rounded-lg shadow-md w-full h-80 object-cover transition-transform duration-300 transform focus:outline-none cursor-pointer"
									/>
								</div>
							))}
						</Slider>
					</div>
				</div>
			)}

			<ImageModal
				isOpen={isModalOpen}
				image={selectedImage}
				onClose={closeModal}
			/>
		</div>
	);
};

export default CourseDetails;


