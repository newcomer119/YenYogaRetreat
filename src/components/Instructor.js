import React from "react";
import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { TbFaceIdError } from "react-icons/tb";
import { buttons, sectionHeaders, inst } from "../data";
import InstructorCard from "./InstructorCard";

const Instructor = () => {
	const { id } = useParams();
	const instructor = inst.find((ins) => ins.id === id);
	const { language } = useLanguage();

	if (!instructor) {
		return (
			<div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
				<TbFaceIdError
					size={60}
					className='text-red-100'
				/>
				<h1 className='text-3xl font-bold text-gray-800 mb-6'>
					{sectionHeaders[language].trainerNotFound}
				</h1>
				<Link to='/trainers'>
					<button className='px-6 py-3 bg-green-200 text-white rounded-lg shadow-md hover:bg-green-700 transition-all'>
						{buttons[language].viewTrainers}
					</button>
				</Link>
			</div>
		);
	}

	const QualificationsSection = () => {
		return (
			<div className='grid grid-cols-1 tab2:grid-cols-2 big:grid-cols-3 gap-1 tab:gap-2'>
				{instructor[language].qualifications.map((qual, index) => (
					<div
						key={index}
						className='p-4 bg-light text-headings1 rounded-lg hover:scale-[1.02] transition-all border border-gray-400'>
						<p className='text-lg font-semibold'>{qual}</p>
					</div>
				))}
			</div>
		);
	};

	const BioSection = () => {
		return (
			<div className='max-w-[1000px]'>
				<blockquote className='border-l-4 border-primary px-4 text-primary italic text-xl bg-gradient-to-r from-bg1 py-3'>
					{instructor[language].bio}
				</blockquote>
			</div>
		);
	};

	const RightSection = () => {
		return (
			<div className='tab:col-span-2 flex flex-col gap-8 text-left'>
				<QualificationsSection />
				<BioSection />
				<div className='flex gap-4 justify-center tab:justify-start'>
					<Link to='/trainers'>
						<button className='px-6 py-3 text-cta2 font-semibold rounded-lg border border-cta2 shadow hover:bg-cta2 hover:text-white transition-all duration-300'>
							{buttons[language].viewAll}
						</button>
					</Link>
					<Link to='/trainers'>
						<button className='px-6 py-3 text-cta2 font-semibold rounded-lg border border-cta2 shadow hover:bg-cta2 hover:text-white transition-all duration-300'>
							{buttons[language].viewCourses}
						</button>
					</Link>
				</div>
			</div>
		);
	};

	return (
		<section className='top-section'>
			<div className='sectionHeaders'>
				{sectionHeaders[language].aboutTrainer} {instructor[language].name}
			</div>
			<div className='grid grid-cols-1 lap:grid-cols-3 gap-12 items-start'>
				{/* Left Section */}
				<div className='col-span-1 flex justify-center'>
					<InstructorCard
						instructor={instructor[language]}
						all={false}
					/>
				</div>
				{/* Right Section */}
				<RightSection />
			</div>
		</section>
	);
};

export default Instructor;
