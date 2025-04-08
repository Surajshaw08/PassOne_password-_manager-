import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-slate-100 text-gray-800 p-6 md:p-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">About Us</h1>
        <p className="text-base md:text-lg leading-relaxed mb-6">
          Welcome to <span className="text-green-500 font-semibold">PassOne</span> — your secure and simple password manager. 
          We aim to help individuals and businesses securely store and manage their passwords in one place. Our mission is to 
          offer a user-friendly, reliable, and safe solution for protecting your digital identity.
        </p>

        <h2 className="text-2xl font-semibold text-green-500 mb-2">Why Choose Us?</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
          <li>Military-grade encryption for all your stored passwords.</li>
          <li>Clean, minimal, and responsive UI for all screen sizes.</li>
          <li>Open-source, so you know exactly how your data is handled.</li>
          <li>Fast and easy login with JWT authentication.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-500 mb-2">Our Vision</h2>
        <p className="text-base md:text-lg leading-relaxed">
          We believe in transparency, simplicity, and privacy. Our vision is to become the go-to platform for managing personal 
          credentials securely, without compromising on ease-of-use or performance.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
