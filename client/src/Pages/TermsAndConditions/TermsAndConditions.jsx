import React from 'react';

function TermsAndConditions() {
  // Get the current date
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-3xl font-semibold mb-4">Terms and Conditions</h1>

        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing or using the Job Swift website, you agree to comply with and be bound by these Terms and Conditions.
        </p>

        <h2 className="text-xl font-semibold mb-2">2. Intellectual Property</h2>
        <p className="mb-4">
          All content on this website, including text, images, graphics, logos, and software, is the property of Job Swift and protected by intellectual property laws.
        </p>

        <h2 className="text-xl font-semibold mb-2">3. Privacy Policy</h2>
        <p className="mb-4">
          Your use of our website is also governed by our <a href="/privacy-policy">Privacy Policy</a>.
        </p>

        <h2 className="text-xl font-semibold mb-2">4. Limitation of Liability</h2>
        <p className="mb-4">
          Job Swift shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
        </p>

        {/* Add more sections as needed */}
        
        <h2 className="text-xl font-semibold mb-2">5. Contact Information</h2>
        <p className="mb-4">
          If you have any questions about these terms and conditions, please contact us at [Your Contact Information].
        </p>

        <p className="mb-4">
          Last updated: {currentDate}
        </p>
      </div>
    </div>
  );
}

export default TermsAndConditions;
