import React from 'react'
import Card from "./card"
const users = () => {
    const jobs = [
  {
    id: 1,
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    position: "Frontend Developer",
    jobType: "Full Time",
    level: "Fresher",
    salaryPerHour: "$30/hr",
    address: "Mountain View, CA, USA",
  },
  {
    id: 2,
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    position: "React Developer",
    jobType: "Part Time",
    level: "Fresher",
    salaryPerHour: "$28/hr",
    address: "Redmond, WA, USA",
  },
  {
    id: 3,
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    position: "Software Engineer",
    jobType: "Full Time",
    level: "Senior",
    salaryPerHour: "$55/hr",
    address: "Seattle, WA, USA",
  },
  {
    id: 4,
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    position: "UI Engineer",
    jobType: "Full Time",
    level: "Senior",
    salaryPerHour: "$60/hr",
    address: "Los Gatos, CA, USA",
  },
  {
    id: 5,
    brandLogo: "https://logo.clearbit.com/spotify.com",
    companyName: "Spotify",
    position: "Frontend Intern",
    jobType: "Part Time",
    level: "Fresher",
    salaryPerHour: "$20/hr",
    address: "Stockholm, Sweden",
  },
  {
    id: 6,
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    position: "React Engineer",
    jobType: "Full Time",
    level: "Senior",
    salaryPerHour: "$58/hr",
    address: "Menlo Park, CA, USA",
  },
  {
    id: 7,
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    position: "JavaScript Developer",
    jobType: "Full Time",
    level: "Fresher",
    salaryPerHour: "$32/hr",
    address: "San Jose, CA, USA",
  },
  {
    id: 8,
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    companyName: "Airbnb",
    position: "Frontend Engineer",
    jobType: "Part Time",
    level: "Senior",
    salaryPerHour: "$50/hr",
    address: "San Francisco, CA, USA",
  },
  {
    id: 9,
    brandLogo: "https://logo.clearbit.com/uber.com",
    companyName: "Uber",
    position: "Web Developer",
    jobType: "Full Time",
    level: "Fresher",
    salaryPerHour: "$27/hr",
    address: "San Francisco, CA, USA",
  },
  {
    id: 10,
    brandLogo: "https://logo.clearbit.com/linkedin.com",
    companyName: "LinkedIn",
    position: "Frontend Architect",
    jobType: "Full Time",
    level: "Senior",
    salaryPerHour: "$65/hr",
    address: "Sunnyvale, CA, USA",
  },
];


  return (
    <div className='parent'>
        {jobs.map((job)=>{
            return <Card 
      img={job.brandLogo}
      name={job.companyName}
      position={job.position}
      money ={job.salaryPerHour}
      address={job.address}
      jobType= {job.jobType}
      jobLevel={job.level}
      />
     
})}


    </div>
  )
}

export default users