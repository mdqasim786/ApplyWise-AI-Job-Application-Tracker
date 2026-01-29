import { useState, useEffect } from 'react';
import { Search, MapPin, Briefcase, Bookmark, BookmarkCheck } from 'lucide-react';

function JobSearch() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('All');
  const [isLoading, setIsLoading] = useState(false);
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
    fetchSavedJobs();
  }, []);

  const fetchJobs = async (search = '', loc = '', type = 'All') => {
    setIsLoading(true);
    try {
      const queryParams = new URLSearchParams({
        ...(search && { search }),
        ...(loc && { location: loc }),
        ...(type !== 'All' && { jobType: type })
      });

      const response = await fetch(`http://localhost:5000/api/jobs?${queryParams}`);
      const data = await response.json();
      
      if (response.ok) {
        setJobs(data.jobs);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSavedJobs = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const response = await fetch('http://localhost:5000/api/jobs/saved/all', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await response.json();
      if (response.ok) {
        setSavedJobs(data.map(item => item.jobId._id));
      }
    } catch (error) {
      console.error("Error fetching saved jobs:", error);
    }
  };

  const handleSearch = () => {
    fetchJobs(searchTerm, location, jobType);
  };

  const handleSaveJob = async (jobId) => {
    const token = localStorage.getItem('token');
    
    const isSaved = savedJobs.includes(jobId);

    try {
      if (isSaved) {
        // Unsave
        await fetch(`http://localhost:5000/api/jobs/save/${jobId}`, {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${token}` }
        });
        setSavedJobs(savedJobs.filter(id => id !== jobId));
      } else {
        // Save
        await fetch('http://localhost:5000/api/jobs/save', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ jobId })
        });
        setSavedJobs([...savedJobs, jobId]);
      }
    } catch (error) {
      console.error("Error saving job:", error);
    }
  };

  const handleApply = async (jobId) => {
    const token = localStorage.getItem('token');
    
    try {
      const response = await fetch('http://localhost:5000/api/jobs/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ 
          jobId,
          coverLetter: '',
          resumeUsed: ''
        })
      });

      const data = await response.json();
      if (response.ok) {
        alert("Application submitted successfully!");
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Error applying to job");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Find Your Dream Job</h1>
        <p className="text-gray-600">Discover opportunities that match your skills</p>
      </div>

      {/* Search Filters */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search Input */}
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Job title or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Location Input */}
          <div>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Location..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Job Type Filter */}
          <div>
            <select
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>All</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Internship</option>
              <option>Remote</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="mt-4 w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Search Jobs
        </button>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {isLoading ? (
          <p className="text-center text-gray-600">Loading jobs...</p>
        ) : jobs.length === 0 ? (
          <p className="text-center text-gray-600">No jobs found</p>
        ) : (
          jobs.map((job) => (
            <div key={job._id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
                  <p className="text-gray-600 mb-3">{job.company}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="flex items-center gap-1 text-sm text-gray-600">
                      <MapPin size={16} />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-600">
                      <Briefcase size={16} />
                      {job.jobType}
                    </span>
                    <span className="text-sm font-semibold text-green-600">
                      {job.salary}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>

                  {/* Requirements Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.requirements.slice(0, 4).map((req, index) => (
                      <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bookmark Icon */}
                <button
                  onClick={() => handleSaveJob(job._id)}
                  className="ml-4 text-gray-400 hover:text-yellow-500 transition"
                >
                  {savedJobs.includes(job._id) ? (
                    <BookmarkCheck size={24} className="text-yellow-500" />
                  ) : (
                    <Bookmark size={24} />
                  )}
                </button>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => handleApply(job._id)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Apply Now
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition">
                  View Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export { JobSearch };