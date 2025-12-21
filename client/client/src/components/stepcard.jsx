function StepCard({ id, title, description, icon, iconBgColor, iconHoverColor }) {
  return (
    <div className="relative bg-white shadow-xl rounded-2xl p-6 sm:p-7 transition-all duration-300 
                    hover:shadow-2xl hover:-translate-y-3 border-2 border-blue-200 hover:border-blue-500 
                    hover:cursor-pointer group">
      {/* Step Number Badge */}
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 text-white rounded-full 
                      flex items-center justify-center text-xl font-bold shadow-lg 
                      group-hover:scale-110 transition-transform">
        {id}
      </div>
      
      {/* Icon */}
      <div className={`w-14 h-14 ${iconBgColor} rounded-xl flex items-center justify-center 
                       text-3xl mb-4 ${iconHoverColor} group-hover:scale-110 transition-all`}>
        {icon}
      </div>
      
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-500 
                     transition-colors">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default StepCard;