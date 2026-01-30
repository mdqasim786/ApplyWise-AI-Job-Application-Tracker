function Help() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-blue-500 p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4 sm:mb-6">Help & Support</h1>
        
        {/* FAQs Section */}
        <section className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3 sm:mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3 sm:space-y-4">
            <div className="bg-gray-600 p-4 sm:p-6 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="font-medium text-white mb-2 text-sm sm:text-base">How do I reset my password?</h3>
              <p className="text-white text-sm sm:text-base">Go to the Profile page, click on 'Change Password', and follow the instructions.</p>
            </div>
            <div className="bg-gray-600 p-4 sm:p-6 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="font-medium text-white mb-2 text-sm sm:text-base">How do I track my job applications?</h3>
              <p className="text-white text-sm sm:text-base">Navigate to the Applications tab to see all your submitted applications and their status updates.</p>
            </div>
            <div className="bg-gray-600 p-4 sm:p-6 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="font-medium text-white mb-2 text-sm sm:text-base">How can I contact support?</h3>
              <p className="text-white text-sm sm:text-base">Use the contact form below or email us at <span className="text-blue-300 font-medium break-all">support@applywise.com</span>.</p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3 sm:mb-4">Contact Support</h2>
          <div className="bg-gray-600 p-4 sm:p-6 rounded-xl shadow-md">
            <form className="space-y-4">
              <div>
                <label className="block text-white font-medium mb-1 text-sm sm:text-base">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-3 sm:px-4 py-2 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-1 text-sm sm:text-base">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-3 sm:px-4 py-2 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-1 text-sm sm:text-base">Message</label>
                <textarea
                  placeholder="Write your message..."
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Tips / Resources Section */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3 sm:mb-4">Tips & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-gray-600 p-4 sm:p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-medium text-white mb-2 text-sm sm:text-base">Resume Tips</h3>
              <p className="text-white text-sm sm:text-base">Make sure your resume is concise, highlights your skills, and matches the job description.</p>
            </div>
            <div className="bg-gray-600 p-4 sm:p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-medium text-white mb-2 text-sm sm:text-base">Interview Preparation</h3>
              <p className="text-white text-sm sm:text-base">Research the company, practice common interview questions, and dress professionally.</p>
            </div>
            <div className="bg-gray-600 p-4 sm:p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-medium text-white mb-2 text-sm sm:text-base">Job Search Strategy</h3>
              <p className="text-white text-sm sm:text-base">Set daily goals, track applications, and leverage networking to increase your chances.</p>
            </div>
            <div className="bg-gray-600 p-4 sm:p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-medium text-white mb-2 text-sm sm:text-base">Platform Guides</h3>
              <p className="text-white text-sm sm:text-base">Explore our tutorials and guides to make the most out of ApplyWise features.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export { Help };