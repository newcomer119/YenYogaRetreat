import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useLanguage } from "../context/LanguageContext";
import { buttons, prices } from "../data";

// Reusable Input Component
const InputField = ({ id, type, value, label, error, onChange }) => (
	<div className='flex flex-col justify-end w-full h-full big:text-2xl'>
		<label
			className='ml-1 mb-1 block text-headings2 font-semibold'
			htmlFor={id}>
			{label}
		</label>
		<input
			type={type}
			id={id}
			value={value}
			onChange={onChange}
			className={`w-full border ${
				error ? "border-red-500" : "border-gray-500"
			} p-3 rounded-sm bg-highlight2 bg-opacity-20`}
			required
		/>
		{error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
	</div>
);

const CourseSelection = ({ course, isOpen, onClose }) => {
	const { language } = useLanguage();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		age: "",
		paymentMode: "",
		transactionId: "",
		amountPaid: "",
		billingAddress: "",
	});
	const [errors, setErrors] = useState({});
	const price = prices[course.id];

	// Handle input changes
	const handleInputChange = (e) => {
		const { id, value } = e.target;
		setFormData((prev) => ({ ...prev, [id]: value }));
		// Clear errors when the user starts typing
		if (errors[id]) {
			setErrors((prev) => ({ ...prev, [id]: "" }));
		}
	};

	// Validate form fields
	const validateForm = () => {
		const newErrors = {};
		if (!formData.name) newErrors.name = "Full Name is required";
		if (!formData.email) {
			newErrors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "Invalid email address";
		}
		if (!formData.phone) newErrors.phone = "Phone Number is required";
		if (!formData.age) newErrors.age = "Age is required";
		if (!formData.paymentMode)
			newErrors.paymentMode = "Payment Mode is required";
		if (!formData.transactionId)
			newErrors.transactionId = "Transaction ID is required";
		if (!formData.amountPaid) newErrors.amountPaid = "Amount Paid is required";
		if (!formData.billingAddress)
			newErrors.billingAddress = "Billing Address is required";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0; // Return true if no errors
	};

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateForm()) {
			alert("Form submitted:", formData);
			// Add your submission logic here (e.g., API call)
		}
	};

	return (
		<Modal
			open={isOpen}
			onClose={onClose}
			center
			blockScroll={false}
			styles={{
				modal: {
					background: "none",
					maxHeight: "90dvh",
					padding: "0",
				},
			}}>
			<div className='h-full w-full overflow-y-scroll rounded-lg formBg'>
				<h2 className='formHeader'>
					{buttons[language].bookNow} - {course[language].title}
				</h2>
				<form
					onSubmit={handleSubmit}
					className='form'>
					{/* Personal Information */}
					<div className='grid grid-cols-1 tab:grid-cols-2 gap-4 pb-4 mb-4 border-b border-dotted'>
						<InputField
							id='name'
							type='text'
							value={formData.name}
							label='Full Name'
							error={errors.name}
							onChange={handleInputChange}
						/>
						<InputField
							id='email'
							type='email'
							value={formData.email}
							label='Email'
							error={errors.email}
							onChange={handleInputChange}
						/>
						<InputField
							id='phone'
							type='tel'
							value={formData.phone}
							label='Phone Number'
							error={errors.phone}
							onChange={handleInputChange}
						/>
						<InputField
							id='age'
							type='text'
							value={formData.age}
							label='Age'
							error={errors.age}
							onChange={handleInputChange}
						/>
					</div>

					{/* Payment Information */}
					<div className='pb-4 mb-4 border-b border-dotted flex flex-col'>
						<div className='w-max bg-primary p-4 rounded-md border border-gray'>
							<p className='text-lg font-bold text-black'>Transfer to:</p>
							<div className='mt-2 text-sm text-gray-700'>
								<ul>
									<li>Tên tài khoản: NGUYỄN THỊ YẾN</li>
									<li>Số tài khoản: 0061 0010 44821</li>
									<li>Tại Ngân Hàng Vietcombank, Nha Trang.</li>
									<li>
										Nội dung: Họ tên + số điện thoại + 200H Online/offline
									</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Payment Mode and Transaction ID */}
					<div className='grid grid-cols-1 tab:grid-cols-2 gap-4 pb-4 mb-4 border-b border-dotted'>
						<InputField
							id='amountPaid'
							type='text'
							value={formData.amountPaid}
							label='Amount Paid'
							error={errors.amountPaid}
							onChange={handleInputChange}
						/>
						<InputField
							id='transactionId'
							type='text'
							value={formData.transactionId}
							label='Transaction ID/Ref No.'
							error={errors.transactionId}
							onChange={handleInputChange}
						/>
						<InputField
							id='paymentMode'
							type='text'
							value={formData.paymentMode}
							label='Mode of Payment (Visa, Bank Transfer, etc.)'
							error={errors.paymentMode}
							onChange={handleInputChange}
						/>
						<InputField
							id='billingAddress'
							type='text'
							value={formData.billingAddress}
							label='Billing Address'
							error={errors.billingAddress}
							onChange={handleInputChange}
						/>
					</div>

					<div className='mt-6 py-4 text-xs text-subtext text-right space-y-1'>
						<div>
							* Add Transaction Details as follows: Full Name + Contact No. +
							Course Name.
						</div>
						<div>
							** Please check everything carefully before submitting. You will
							receive a Confirmation email once payment is confirmed.
						</div>
					</div>

					<div className='flex justify-center'>
						<button
							type='submit'
							className='bg-cta2 text-white border border-cta2 font-semibold py-2 px-6 rounded-md hover:bg-bg2 hover:text-cta2 hover:scale-[1.01] transition-all'>
							{buttons[language].submit}
						</button>
					</div>
				</form>
			</div>
		</Modal>
	);
};

export default CourseSelection;
