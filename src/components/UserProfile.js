import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const UserProfile = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "courseSelections"));
        const coursesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        const sortedCourses = coursesData.sort((a, b) => b.timestamp.toDate() - a.timestamp.toDate());
        setCourses(sortedCourses);
      } catch (e) {
        console.error("Error fetching courses: ", e);
        setError("Error fetching courses. Please try again.");

      } finally {

        setLoading(false);

      }

    };


    fetchCourses();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-8">

      <h2 className="text-3xl text-center font-bold mb-6">User Profile</h2>
      <h3 className="text-xl font-bold mb-4">Purchased Courses</h3>
      <ul className="space-y-4">
        {courses.map(course => (
          <li key={course.id} className="p-4 border border-gray-300 rounded-md">

            <h4 className="font-semibold">{course.selectedCourse}</h4>
            <p>Date of Purchase: {course.timestamp.toDate().toLocaleString()}</p>

            {/* Add more course details as needed */}
          </li>

        ))}
      </ul>
    </div>

  );
};

export default UserProfile;
