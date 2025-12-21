import Header from '../components/header.jsx';
import useMobileMenu from '../hooks/useMobileMenu';
import PageHeader from '../components/pageheader.jsx';
import StepCard from '../components/stepcard.jsx';
import { steps } from '../data/stepsdata.js';

function Works(){
  const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenu();

  return (
    <>
      <Header 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <div className="bg-gradient-to-b from-blue-300 via-blue-200 to-gray-200 min-h-screen">
        <div className="max-w-6xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6">
          
          {/* Header Section */}
          <PageHeader 
            badge="Simple & Effective"
            title="How ApplyWise"
            titleHighlight="Works"
            description="A simple, secure workflow designed for real job seekers"
          />

          {/* Steps Cards */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-10 sm:mt-12 mb-10'>
            {steps.map((step) => (
              <StepCard key={step.id} {...step} />
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-10 sm:mt-10 text-center bg-white rounded-2xl shadow-2xl p-4 sm:p-8 border-2 border-blue-200">
          <p className="text-gray-600 max-w-xl mx-auto">
            🔒 All your data is private, encrypted, and accessible only to you.
          </p>
        </div>
        </div>
      </div>
    </>
  );
}

export { Works };