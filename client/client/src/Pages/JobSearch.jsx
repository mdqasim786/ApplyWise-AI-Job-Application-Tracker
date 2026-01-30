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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 p-4 md:p-8">
      {/* Header */}
      <div className="mb-8 text-center px-2">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-3">
          Find Your Dream Job
        </h1>
        <p className="text-blue-700 text-sm md:text-lg">Discover opportunities that match your skills and passion</p>
      </div>

      {/* Search Filters - Responsive Grid */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-4 md:p-6 mb-8 border-t-4 border-blue-500">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-3.5 text-blue-500" size={18} />
              <input
                type="text"
                placeholder="Job title or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <MapPin className="absolute left-3 top-3.5 text-blue-500" size={18} />
              <input
                type="text"
                placeholder="Location..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          <div>
            <select
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white text-blue-900"
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

        <button
          onClick={handleSearch}
          className="mt-4 w-full md:w-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md active:scale-95 transition-transform"
        >
          <Search className="inline mr-2" size={18} />
          Search Jobs
        </button>
      </div>

      {/* Results Container */}
      <div className="max-w-4xl mx-auto">
        {!isLoading && jobs.length > 0 && (
          <div className="mb-4 text-blue-700 font-medium px-2">
            Found {jobs.length} job{jobs.length !== 1 ? 's' : ''}
          </div>
        )}

        <div className="space-y-4">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600 mx-auto mb-4"></div>
              <p className="text-blue-700">Loading opportunities...</p>
            </div>
          ) : jobs.length === 0 ? (
            <div className="bg-white rounded-2xl p-10 text-center shadow-sm">
              <Briefcase size={48} className="mx-auto text-blue-200 mb-4" />
              <p className="text-blue-700 font-medium">No jobs found</p>
            </div>
          ) : (
            jobs.map((job) => (
              <div 
                key={job._id} 
                className="bg-white rounded-2xl shadow-md p-5 md:p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-1 truncate">
                      {job.title}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-4">{job.company}</p>
                    
                    {/* Meta Tags - Wrap on Mobile */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="flex items-center gap-1.5 text-xs md:text-sm bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md">
                        <MapPin size={14} /> {job.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs md:text-sm bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md">
                        <Briefcase size={14} /> {job.jobType}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs md:text-sm bg-blue-600 text-white px-2.5 py-1 rounded-md font-medium">
                        <DollarSign size={14} /> {job.salary}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-2">
                      {job.description}
                    </p>

                    {/* Requirements Tags - Hidden on very small screens or scrollable */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleSaveJob(job._id)}
                    className="ml-2 p-2 hover:bg-blue-50 rounded-full"
                  >
                    {savedJobs.includes(job._id) ? (
                      <BookmarkCheck size={24} className="text-blue-600" />
                    ) : (
                      <Bookmark size={24} className="text-blue-300" />
                    )}
                  </button>
                </div>

                {/* Responsive Actions - Stacked on Mobile */}
                <div className="flex flex-col sm:flex-row gap-3 mt-4 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => handleApply(job._id)}
                    className="flex-1 bg-blue-600 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                  >
                    Apply Now
                  </button>
                  <button className="flex-1 border-2 border-blue-600 text-blue-600 px-6 py-2.5 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export { JobSearch };
