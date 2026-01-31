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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-200 to-blue-200 p-4 md:p-8">
      {/* Header */}
      <div className="mb-8 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-3">
          My Applications
        </h1>
        <p className="text-blue-700 text-sm md:text-lg">Track your job application journey</p>
      </div>

      {/* Statistics Cards - Responsive Grid (2 columns on mobile, 3 on tablet, 6 on desktop) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-8">
        {[
          { label: 'Total', value: stats.total, color: 'border-blue-500', text: 'text-blue-600' },
          { label: 'Applied', value: stats.applied, color: 'border-blue-400', text: 'text-blue-500' },
          { label: 'Under Review', value: stats.underReview, color: 'border-yellow-400', text: 'text-yellow-600' },
          { label: 'Shortlisted', value: stats.shortlisted, color: 'border-green-400', text: 'text-green-600' },
          { label: 'Rejected', value: stats.rejected, color: 'border-red-400', text: 'text-red-600' },
          { label: 'Accepted', value: stats.accepted, color: 'border-green-500', text: 'text-green-700' },
        ].map((stat, i) => (
          <div key={i} className={`bg-white rounded-xl shadow-sm p-3 md:p-4 border-t-4 ${stat.color}`}>
            <p className="text-gray-500 text-xs md:text-sm mb-1 uppercase font-bold tracking-wider">{stat.label}</p>
            <p className={`text-2xl md:text-3xl font-bold ${stat.text}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Filter Bar - Horizontal Scroll on Mobile */}
      <div className="bg-white rounded-xl shadow-md p-2 md:p-4 mb-6 border-l-4 border-blue-500">
        <div className="flex overflow-x-auto pb-2 md:pb-0 no-scrollbar gap-2 md:flex-wrap">
          {['All', 'Applied', 'Under Review', 'Shortlisted', 'Rejected', 'Accepted'].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm md:text-base font-medium transition flex-shrink-0 ${
                statusFilter === status
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
              }`}
            >
              {status} ({status === 'All' ? stats.total : stats[status.charAt(0).toLowerCase() + status.slice(1).replace(' ', '')]})
            </button>
          ))}
        </div>
      </div>

      {/* Applications List */}
      <div className="max-w-5xl mx-auto space-y-4">
        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-blue-700">Fetching applications...</p>
          </div>
        ) : filteredApplications.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-10 text-center">
            <FileText size={48} className="mx-auto text-blue-200 mb-4" />
            <p className="text-blue-800 font-semibold">No applications found</p>
          </div>
        ) : (
          filteredApplications.map((app) => (
            <div
              key={app._id}
              className="bg-white rounded-2xl shadow-md p-5 md:p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                <div className="flex-1 w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-1 leading-tight">
                    {app.jobId?.title || 'Job Title'}
                  </h3>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm md:text-base mb-3">
                    <Building2 size={16} />
                    <span>{app.jobId?.company || 'Company'}</span>
                  </div>

                  {/* Metadata Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className="flex items-center gap-1.5 text-xs bg-blue-50 text-blue-700 px-2.5 py-1.5 rounded-lg">
                      <MapPin size={14} /> {app.jobId?.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs bg-blue-50 text-blue-700 px-2.5 py-1.5 rounded-lg">
                      <Calendar size={14} /> {formatDate(app.appliedDate)}
                    </span>
                  </div>
                </div>

                {/* Status Badge - Auto-width on mobile */}
                <div className={`flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full md:rounded-lg text-xs md:text-sm font-bold border ${getStatusColor(app.status)}`}>
                  {getStatusIcon(app.status)}
                  <span className="uppercase">{app.status}</span>
                </div>
              </div>

              {/* Cover Letter Preview - Compact on Mobile */}
              {app.coverLetter && (
                <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="text-[10px] uppercase font-black text-blue-400 mb-1">Cover Letter Snippet</p>
                  <p className="text-sm text-gray-700 line-clamp-2 italic">"{app.coverLetter}"</p>
                </div>
              )}

              {/* Action Buttons - Stack on mobile */}
              <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-gray-100">
                <button className="flex-1 bg-white border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition font-bold text-sm">
                  View Job Details
                </button>
                
                {['Applied', 'Under Review'].includes(app.status) && (
                  <button
                    onClick={() => handleWithdraw(app._id)}
                    className="flex items-center justify-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition font-bold text-sm border-2 border-transparent"
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