function PageHeader({ badge, title, titleHighlight, description }) {
  return (
    <div className="text-center mb-8 sm:mb-12">
      {badge && (
        <span className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1 text-xs sm:text-sm 
                         font-medium text-blue-700 bg-blue-100 rounded-full">
          {badge}
        </span>
      )}
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-4">
        {title} <span className="text-blue-500">{titleHighlight}</span>
      </h1>

      {description && (
        <p className="mt-4 sm:mt-5 max-w-2xl mx-auto text-base sm:text-lg md:text-xl 
                      text-gray-600 px-4">
          {description}
        </p>
      )}
    </div>
  );
}

export default PageHeader;