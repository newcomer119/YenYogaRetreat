import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import CourseSelection from "./CourseSelection";

const CourseCard = ({ course }) => {
	const { language } = useLanguage();
	const [showForm, setShowForm] = useState(false);

	// Convert 'vn' to 'vi' to match Sanity schema
	const langKey = language === 'vn' ? 'vi' : language;

	console.log('Original language:', language);
	console.log('Converted language key:', langKey);
	console.log('Course title structure:', course.title);

	return (
		<>
			<div className="w-full max-w-sm bg-white rounded-lg shadow-lg overflow-hidden group relative">
				{course.imageUrl && (
					<img
						className="w-full h-48 object-cover"
						src={course.imageUrl}
						alt={course.title[langKey]}
					/>
				)}
				<div className="p-5">
					<h3 className="text-xl font-bold mb-2">{course.title[langKey]}</h3>
					<p className="text-gray-600 mb-4">{course.description[langKey]}</p>
					<div className="flex justify-between items-center mb-4">
						<span className="text-gray-500">{course.duration[langKey]}</span>
						<span className="text-blue-600 font-bold">{course.price[langKey]}</span>
					</div>
					<ul className="space-y-2">
						{course.features?.map((feature, index) => (
							<li key={index} className="flex items-center">
								<svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
								</svg>
								{feature[langKey]}
							</li>
						))}
					</ul>
				</div>
				<div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
					<button
						onClick={() => setShowForm(true)}
						className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
					>
						Book Now
					</button>
				</div>
			</div>
			
			<CourseSelection 
				course={course}
				isOpen={showForm}
				onClose={() => setShowForm(false)}
			/>
		</>
	);
};

export default CourseCard;
