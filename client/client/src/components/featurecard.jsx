function FeatureCard({ title, subtitle, items }) {
  return (
    <div className="bg-white shadow-xl rounded-lg p-6 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-blue-500 cursor-pointer">
      <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
      <h3 className="text-lg font-semibold text-blue-500">{subtitle}</h3>
      <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FeatureCard;
