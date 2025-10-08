import React, { useEffect, useState } from "react";

// ✅ Move outside component
const courseList = [
  {
    title: "Introduction to Japanese",
    level: "Beginner",
    points: 200,
    videos: 24,
    price: "Free",
    fee: "$0",
    image:
      "https://images.unsplash.com/photo-1554774853-b415df9eeb92?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Advanced English Grammar",
    level: "Advanced",
    points: 450,
    videos: 32,
    price: "Premium",
    fee: "$49",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Spanish Conversation Basics",
    level: "Intermediate",
    points: 310,
    videos: 18,
    price: "Free",
    fee: "$0",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Korean Language Essentials",
    level: "Beginner",
    points: 180,
    videos: 20,
    price: "Premium",
    fee: "$39",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "French Pronunciation Mastery",
    level: "Intermediate",
    points: 290,
    videos: 22,
    price: "Free",
    fee: "$0",
    image:
      "https://images.unsplash.com/photo-1508051123996-69f8caf4891e?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Chinese for Daily Conversation",
    level: "Beginner",
    points: 240,
    videos: 26,
    price: "Premium",
    fee: "$35",
    image:
      "https://images.unsplash.com/photo-1580795478698-86f35e4f2c51?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "British & American English Differences",
    level: "Advanced",
    points: 400,
    videos: 30,
    price: "Premium",
    fee: "$45",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca03dfd4c?auto=format&fit=crop&w=800&q=60",
  },
];

const Courses = ({ selectedValue , searchValue = "" }) => {
  const [FilterList, setFilterList] = useState(courseList);

  const levelColors = {
    Beginner: "bg-green-100 text-green-700",
    Intermediate: "bg-yellow-100 text-yellow-700",
    Advanced: "bg-red-100 text-red-700",
  };

  const priceColors = {
    Free: "bg-blue-100 text-blue-700",
    Premium: "bg-purple-100 text-purple-700",
  };

  useEffect(() => {
    let filtered = courseList;

    if(selectedValue === 'All'){
      filtered 
    }

    if (selectedValue !== "All") {
      filtered = filtered.filter(
        (course) =>
          course.level === selectedValue || course.price === selectedValue
      );
    }

    if (searchValue.trim() !== "") {
      filtered = filtered.filter((course) =>
        course.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    console.log(searchValue + selectedValue);
    
    console.log(filtered);
    
    setFilterList(filtered);
  }, [selectedValue, searchValue]);

  return (
    <div className="max-w-[1400px] mx-auto bg-white rounded-xl p-8 mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {FilterList.map((course, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-md transition-all duration-300"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 truncate">
                {course.title}
              </h3>

              <div className="flex gap-2 mb-4">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${levelColors[course.level]}`}
                >
                  {course.level}
                </span>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${priceColors[course.price]}`}
                >
                  {course.price}
                </span>
              </div>

              <div className="flex justify-between text-sm text-gray-600 mb-3">
                <p>🎬 {course.videos} Videos</p>
                <p>⭐ {course.points} pts</p>
              </div>

              <p className="text-sm font-medium text-gray-700 mb-5">
                Course Fee: {course.fee}
              </p>

              <button className="w-full text-sm py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
                View Course
              </button>
            </div>
          </div>
        ))}

        {FilterList.length === 0 && (
          <p className="text-center col-span-full text-gray-500">
            No courses found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Courses;
