import { useState, useEffect } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  Trash2,
  FileText,
  Building2
} from 'lucide-react';

function Applications() {
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState('All');
  const [stats, setStats] = useState({
    total: 0,
    applied: 0,
    underReview: 0,
    shortlisted: 0,
    rejected: 0,
    accepted: 0
  });

  useEffect(() => {
    fetchApplications();
  }, []);

  useEffect(() => {
    filterApplications();
  }, [statusFilter, applications]);

  const fetchApplications = async () => {
    setIsLoading(true);
    const token = localStorage.getItem('token');

    try {
      const response = await fetch('http://localhost:5000/api/jobs/applications/my', {
        headers: { Authorization: `Bearer ${token}` }
      });

      const data = await response.json();
      if (response.ok) {
        setApplications(data);
        calculateStats(data);
      }
    } catch (error) {
      console.error("Error fetching applications:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const calculateStats = (apps) => {
    setStats({
      total: apps.length,
      applied: apps.filter(a => a.status === 'Applied').length,
      underReview: apps.filter(a => a.status === 'Under Review').length,
      shortlisted: apps.filter(a => a.status === 'Shortlisted').length,
      rejected: apps.filter(a => a.status === 'Rejected').length,
      accepted: apps.filter(a => a.status === 'Accepted').length
    });
  };

  const filterApplications = () => {
    if (statusFilter === 'All') {
      setFilteredApplications(applications);
    } else {
      setFilteredApplications(
        applications.filter(app => app.status === statusFilter)
      );
    }
  };

  const handleWithdraw = async (applicationId) => {
    if (!window.confirm('Are you sure you want to withdraw this application?')) {
      return;
    }

    const token = localStorage.getItem('token');

    try {
      const response = await fetch(
        `http://localhost:5000/api/jobs/applications/${applicationId}`,
        {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      if (response.ok) {
        alert('Application withdrawn successfully');
        fetchApplications(); // Refresh list
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      alert('Error withdrawing application');
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Applied':
        return <Clock className="text-blue-500" size={20} />;
      case 'Under Review':
        return <AlertCircle className="text-yellow-500" size={20} />;
      case 'Shortlisted':
        return <CheckCircle className="text-green-500" size={20} />;
      case 'Rejected':
        return <XCircle className="text-red-500" size={20} />;
      case 'Accepted':
        return <CheckCircle className="text-green-600" size={20} />;
      default:
        return <Clock className="text-gray-500" size={20} />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Applied':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Shortlisted':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'Rejected':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'Accepted':
        return 'bg-green-200 text-green-900 border-green-400';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-3">
          My Applications
        </h1>
        <p className="text-blue-700 text-lg">Track your job application journey</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <div className="bg-white rounded-xl shadow-md p-4 border-t-4 border-blue-500">
          <p className="text-gray-600 text-sm mb-1">Total</p>
          <p className="text-3xl font-bold text-blue-600">{stats.total}</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 border-t-4 border-blue-400">
          <p className="text-gray-600 text-sm mb-1">Applied</p>
          <p className="text-3xl font-bold text-blue-500">{stats.applied}</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 border-t-4 border-yellow-400">
          <p className="text-gray-600 text-sm mb-1">Under Review</p>
          <p className="text-3xl font-bold text-yellow-600">{stats.underReview}</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 border-t-4 border-green-400">
          <p className="text-gray-600 text-sm mb-1">Shortlisted</p>
          <p className="text-3xl font-bold text-green-600">{stats.shortlisted}</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 border-t-4 border-red-400">
          <p className="text-gray-600 text-sm mb-1">Rejected</p>
          <p className="text-3xl font-bold text-red-600">{stats.rejected}</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 border-t-4 border-green-500">
          <p className="text-gray-600 text-sm mb-1">Accepted</p>
          <p className="text-3xl font-bold text-green-700">{stats.accepted}</p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-xl shadow-md p-4 mb-6 border-l-4 border-blue-500">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setStatusFilter('All')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              statusFilter === 'All'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
            }`}
          >
            All ({stats.total})
          </button>

          <button
            onClick={() => setStatusFilter('Applied')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              statusFilter === 'Applied'
                ? 'bg-blue-500 text-white shadow-md'
                : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
            }`}
          >
            Applied ({stats.applied})
          </button>

          <button
            onClick={() => setStatusFilter('Under Review')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              statusFilter === 'Under Review'
                ? 'bg-yellow-500 text-white shadow-md'
                : 'bg-yellow-50 text-yellow-700 hover:bg-yellow-100'
            }`}
          >
            Under Review ({stats.underReview})
          </button>

          <button
            onClick={() => setStatusFilter('Shortlisted')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              statusFilter === 'Shortlisted'
                ? 'bg-green-500 text-white shadow-md'
                : 'bg-green-50 text-green-700 hover:bg-green-100'
            }`}
          >
            Shortlisted ({stats.shortlisted})
          </button>

          <button
            onClick={() => setStatusFilter('Rejected')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              statusFilter === 'Rejected'
                ? 'bg-red-500 text-white shadow-md'
                : 'bg-red-50 text-red-700 hover:bg-red-100'
            }`}
          >
            Rejected ({stats.rejected})
          </button>

          <button
            onClick={() => setStatusFilter('Accepted')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              statusFilter === 'Accepted'
                ? 'bg-green-600 text-white shadow-md'
                : 'bg-green-50 text-green-700 hover:bg-green-100'
            }`}
          >
            Accepted ({stats.accepted})
          </button>
        </div>
      </div>

      {/* Applications List */}
      <div className="space-y-5">
        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600 mx-auto mb-4"></div>
            <p className="text-blue-700 font-medium">Loading your applications...</p>
          </div>
        ) : filteredApplications.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-12 text-center">
            <div className="text-blue-300 mb-4">
              <FileText size={64} className="mx-auto" />
            </div>
            <p className="text-blue-700 text-lg font-medium">No applications found</p>
            <p className="text-blue-500 mt-2">
              {statusFilter === 'All' 
                ? 'Start applying to jobs to see them here!'
                : `No applications with status "${statusFilter}"`}
            </p>
          </div>
        ) : (
          filteredApplications.map((app) => (
            <div
              key={app._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 border-l-4 border-blue-500"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  {/* Job Title & Company */}
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">
                    {app.jobId?.title || 'Job Title'}
                  </h3>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold mb-3">
                    <Building2 size={18} />
                    <span>{app.jobId?.company || 'Company'}</span>
                  </div>

                  {/* Job Details */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="flex items-center gap-2 text-sm bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg">
                      <MapPin size={16} />
                      {app.jobId?.location || 'Location'}
                    </span>
                    <span className="flex items-center gap-2 text-sm bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg">
                      <Briefcase size={16} />
                      {app.jobId?.jobType || 'Job Type'}
                    </span>
                    <span className="flex items-center gap-2 text-sm bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg">
                      <Calendar size={16} />
                      Applied on {formatDate(app.appliedDate)}
                    </span>
                  </div>
                </div>

                {/* Status Badge */}
                <div className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold border-2 ${getStatusColor(app.status)}`}>
                  {getStatusIcon(app.status)}
                  <span>{app.status}</span>
                </div>
              </div>

              {/* Cover Letter Preview */}
              {app.coverLetter && (
                <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm font-semibold text-blue-900 mb-2">Cover Letter:</p>
                  <p className="text-sm text-gray-700 line-clamp-2">{app.coverLetter}</p>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-blue-100">
                <button className="flex-1 border-2 border-blue-500 text-blue-700 px-6 py-2 rounded-lg hover:bg-blue-50 transition font-semibold">
                  View Job Details
                </button>
                
                {['Applied', 'Under Review'].includes(app.status) && (
                  <button
                    onClick={() => handleWithdraw(app._id)}
                    className="flex items-center gap-2 bg-red-50 border-2 border-red-500 text-red-700 px-6 py-2 rounded-lg hover:bg-red-100 transition font-semibold"
                  >
                    <Trash2 size={16} />
                    Withdraw
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export { Applications };