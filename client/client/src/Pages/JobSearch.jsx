import { useState, useEffect } from 'react';
import { Search, MapPin, Briefcase, Bookmark, BookmarkCheck, DollarSign, Calendar } from 'lucide-react';

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
        await fetch(`http://localhost:5000/api/jobs/save/${jobId}`, {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${token}` }
        });
        setSavedJobs(savedJobs.filter(id => id !== jobId));
      } else {
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 p-8">
      {/* Header with Blue Gradient */}
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-3">
          Find Your Dream Job
        </h1>
        <p className="text-blue-700 text-lg">Discover opportunities that match your skills and passion</p>
      </div>

      {/* Search Filters - Blue Theme */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border-t-4 border-blue-500">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search Input */}
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-blue-500" size={20} />
              <input
                type="text"
                placeholder="Job title or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Location Input */}
          <div>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-blue-500" size={20} />
              <input
                type="text"
                placeholder="Location..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Job Type Filter */}
          <div>
            <select
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-blue-900"
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
          className="mt-6 w-full md:w-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <Search className="inline mr-2 bg-none" size={18} />
          Search Jobs
        </button>
      </div>

      {/* Results Count */}
      {!isLoading && jobs.length > 0 && (
        <div className="mb-4 text-blue-700 font-medium">
          Found {jobs.length} job{jobs.length !== 1 ? 's' : ''}
        </div>
      )}

      {/* Job Listings */}
      <div className="space-y-5">
        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600 mx-auto mb-4"></div>
            <p className="text-blue-700 font-medium">Loading amazing opportunities...</p>
          </div>
        ) : jobs.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-12 text-center">
            <div className="text-blue-300 mb-4">
              <Briefcase size={64} className="mx-auto" />
            </div>
            <p className="text-blue-700 text-lg font-medium">No jobs found</p>
            <p className="text-blue-500 mt-2">Try adjusting your search criteria</p>
          </div>
        ) : (
          jobs.map((job) => (
            <div 
              key={job._id} 
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all p-6 border-l-4 border-blue-500 hover:border-blue-600 transform hover:-translate-y-1"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  {/* Job Title & Company */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-blue-900 mb-2 hover:text-blue-700 transition">
                      {job.title}
                    </h3>
                    <p className="text-blue-600 font-semibold text-lg">{job.company}</p>
                  </div>
                  
                  {/* Job Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="flex items-center gap-2 text-sm bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg">
                      <MapPin size={16} />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-2 text-sm bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg">
                      <Briefcase size={16} />
                      {job.jobType}
                    </span>
                    <span className="flex items-center gap-2 text-sm bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1.5 rounded-lg font-semibold shadow-sm">
                      <DollarSign size={16} />
                      {job.salary}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-4 leading-relaxed line-clamp-2">
                    {job.description}
                  </p>

                  {/* Requirements Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {job.requirements.slice(0, 5).map((req, index) => (
                      <span 
                        key={index} 
                        className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium border border-blue-300"
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bookmark Icon */}
                <button
                  onClick={() => handleSaveJob(job._id)}
                  className="ml-4 p-2 rounded-lg hover:bg-blue-50 transition"
                >
                  {savedJobs.includes(job._id) ? (
                    <BookmarkCheck size={28} className="text-blue-600" />
                  ) : (
                    <Bookmark size={28} className="text-blue-400 hover:text-blue-600" />
                  )}
                </button>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-5 pt-5 border-t border-blue-100">
                <button
                  onClick={() => handleApply(job._id)}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-semibold shadow-md hover:shadow-lg"
                >
                  Apply Now
                </button>
                <button className="border-2 border-blue-500 text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-50 transition font-semibold">
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

export {JobSearch};
