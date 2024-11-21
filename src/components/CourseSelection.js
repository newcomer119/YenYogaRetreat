import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const CourseSelection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [referral, setReferral] = useState("");
  const [retreat, setRetreat] = useState("");
  const [healthChallenges, setHealthChallenges] = useState("");
  const [goal, setGoal] = useState("");
  const [questions, setQuestions] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false); // New state for form submission status

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setFormSubmitted(false);

    try {
      // Add the form data to the Firestore collection
      await addDoc(collection(db, "courseSelections"), {
        name,
        email,
        dob,
        phone,
        address,
        referral,
        retreat,
        healthChallenges,
        goal,
        questions,
        selectedCourse,
        timestamp: new Date(),
      });

      setFormSubmitted(true);

      // Reset form fields
      setName("");
      setEmail("");
      setDob("");
      setPhone("");
      setAddress("");
      setReferral("");
      setRetreat("");
      setHealthChallenges("");
      setGoal("");
      setQuestions("");
      setSelectedCourse("");

      // Reload the page after successful submission
      window.location.reload();
    } catch (e) {
      console.error("Error adding document: ", e);
      setError("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-[16px] bg-blue-900 py-8 px-4">
      <div className="container mx-auto bg-blue-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl text-center text-black font-bold mb-6">
          Course Selection
        </h2>

        {formSubmitted && (
          <p className="text-green-500 text-center mb-4">
            Form submitted successfully!
          </p>
        )}

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label className="block mb-2 text-black font-bold" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-black font-bold" htmlFor="dob">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-black font-bold"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-black font-bold"
                htmlFor="address"
              >
                Mailing Address
              </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-md"
                required
              />
            </div>
          </div>

          {/* Referral and Retreat */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label
                className="block mb-2 text-black font-bold"
                htmlFor="referral"
              >
                How did you hear about the course?
              </label>
              <select
                id="referral"
                value={referral}
                onChange={(e) => setReferral(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-md"
                required
              >
                <option value="friend">Friend Referral</option>
                <option value="facebook">Facebook</option>
                <option value="workshop">Workshop</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-black font-bold"
                htmlFor="retreat"
              >
                Will you be attending the Retreat and Graduation Ceremony?
              </label>
              <select
                id="retreat"
                value={retreat}
                onChange={(e) => setRetreat(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-md"
                required
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          {/* Health and Goal */}
          <div className="mb-4">
            <label
              className="block mb-2 text-black font-bold"
              htmlFor="healthChallenges"
            >
              Do you have any health or mental challenges you would like to
              share to better support you during the course?
            </label>
            <textarea
              id="healthChallenges"
              value={healthChallenges}
              onChange={(e) => setHealthChallenges(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md"
              rows="4"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-black font-bold" htmlFor="goal">
              What is your primary goal for this course?
            </label>
            <textarea
              id="goal"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md"
              rows="4"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-black font-bold"
              htmlFor="questions"
            >
              Do you need additional information about the course? Please leave
              any questions here
            </label>
            <textarea
              id="questions"
              value={questions}
              onChange={(e) => setQuestions(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md"
              rows="4"
            ></textarea>
          </div>

          {/* Course Selection */}
          <div className="bg-blue-800 p-4 rounded-md shadow-lg">
            <h3 className="text-xl text-black font-bold mb-4">
              Select a Course
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  name: "Kundalini Yoga & Mantra Foundation",
                  description:
                    "A foundation course focusing on the principles of Kundalini Yoga and the power of mantra chanting.",
                },
                {
                  name: "Yoga & Meditation Lifestyle",
                  description:
                    "Learn to incorporate yoga and meditation into your daily life for holistic wellness.",
                },
                {
                  name: "Advanced Kundalini Yoga",
                  description:
                    "An advanced-level course to deepen your practice of Kundalini Yoga.",
                },
                {
                  name: "Retreat & Wellness",
                  description:
                    "A rejuvenating retreat focusing on relaxation, wellness, and mindfulness.",
                },
              ].map((course, index) => (
                <div
                  key={index}
                  className="p-4 bg-white border border-gray-300 rounded-md shadow-sm hover:shadow-lg cursor-pointer"
                  onClick={() => setSelectedCourse(course.name)}
                >
                  <h4 className="font-semibold text-gray-800">{course.name}</h4>
                  <p className="text-gray-600">{course.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-black font-bold">
                Selected Course: {selectedCourse}
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-orange-500 text-black font-bold font-bold py-3 px-6 rounded-md hover:bg-orange-600 focus:outline-none"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseSelection;
