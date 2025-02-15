import React from "react";
import { Link } from "react-router-dom";
import { inst, sectionHeaders, buttons } from "../data";
import { useLanguage } from "../context/LanguageContext";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
	const { language } = useLanguage();

	return (
		<section
			id='instructors'
			className={`section`}>
			<div
				className='sectionHeaders'
				data-aos='fade-up'>
				{sectionHeaders[language].trainers}
			</div>

			<div className='flex flex-col tab:flex-row gap-5 justify-center items-center '>
				{inst.map((instructor) => (
					<Link
						to={`/trainers/${instructor.id}`}
						data-aos='flip-right'
						data-aos-duration='1500'>
						<InstructorCard
							instructor={instructor[language]}
							all={true}
						/>
					</Link>
				))}
			</div>
		</section>
	);
};

export default Instructors;
