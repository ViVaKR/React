import React, { useState, useEffect } from 'react';
import JobListing from './JobListing';

const JobListings = ({ isHome = false }) => {
  //
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Json Server 로 부터 데이터 가져오기
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('http://localhost:59999/jobs');
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        // 데이터를 가져오는 중에 오류가 발생했습니다.
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  //
  return (
    <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>{isHome ? 'Recent Jobs' : 'Brows Jobs'}</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {jobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
