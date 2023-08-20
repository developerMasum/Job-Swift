

const DemoForm = () => {
  const countries = [
    "Select Country",
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "India",
    "Japan",
    "Brazil",
    "Mexico",
    "Italy",
    "Spain",
    "China",
    "South Korea",
  ];
  return (
    <div className="mx-auto max-w-[500px] bg-white p-6 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Get Free Demo</h2>
      <form>
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <input
              type="text"
              className="w-full p-2 border focus:border-green-400 focus:ring focus:ring-green-200 rounded"
              placeholder="First Name"
            />
          </div>
          <div className="flex-1">
            <input
              type="text"
              className="w-full p-2 border focus:border-green-400 focus:ring focus:ring-green-200 rounded"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="mb-4">
          <input
            type="email"
            className="w-full p-2 border focus:border-green-400 focus:ring focus:ring-green-200 rounded"
            placeholder="Email Address"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            className="w-full p-2 border focus:border-green-400 focus:ring focus:ring-green-200 rounded"
            placeholder="Job Title"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            className="w-full p-2 border focus:border-green-400 focus:ring focus:ring-green-200 rounded"
            placeholder="Company Name"
          />
        </div>
        {/* Other form fields */}
        {/* ... */}
        <div className="flex space-x-4">
          <div className="flex-1">
            <input
              type="tel"
              className="w-full p-2 border focus:border-green-400 focus:ring focus:ring-green-200 rounded"
              placeholder="Phone Number"
            />
          </div>
          <div className="flex-1">
            <select className="w-full p-2 border focus:border-green-400 focus:ring focus:ring-green-200 rounded">
              <option value="">Employee Count</option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              {/* Add more options */}
            </select>
          </div>
        </div>
        <div className="mb-4">
          <select
            className="w-full p-2 border bg-white focus:border-green-400 focus:ring focus:ring-green-200 rounded"
          >
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        {/* Other form fields */}
        {/* ... */}
        <div className="mb-4">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          >
            Get Free Demo
          </button>
        </div>
      </form>
    </div>
  );
};

export default DemoForm;
