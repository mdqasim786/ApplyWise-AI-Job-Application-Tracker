import Header from '../components/header.jsx';

function Features(){
  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-blue-300 to-white">
        <div className="max-w-6xl mx-auto py-10 px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Features Page
          </h1>
          <p className="text-gray-700">
            This is where the features of the application will be showcased.
          </p>
        </div>
      </div>
    </>
  );
}

export { Features };