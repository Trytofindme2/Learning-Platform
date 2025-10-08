import React, { useState } from 'react';
import CoursesCard from '../../components/courses-card/courses-card';
import SearchBar from '../../components/courses-card/search-bar';

const Courses = () => {

  const [searchValue,setsearchValue] = useState('');
  const [selectedValue,setselectedValue] = useState('All')

  return (
    <div className="min-h-screen py-8">
      <SearchBar searchValueFun={setsearchValue} selectedValueFun={setselectedValue}/>

      <div className="mt-8">
        <CoursesCard selectedValue={selectedValue} searchValue={searchValue}/>
      </div>
    </div>
  );
};

export default Courses;
