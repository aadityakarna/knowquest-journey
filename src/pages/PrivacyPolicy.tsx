
import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          
          <p className="text-muted-foreground mb-6">
            Welcome to the Personalized Learning Platform. Your privacy is important to us, and this policy explains how we collect, use, and protect your personal data.
          </p>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
              <p>We collect the following types of data:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <span className="font-medium">Personal Information:</span> Name, email address, account credentials, and any details you provide when signing up.
                </li>
                <li>
                  <span className="font-medium">Usage Data:</span> Your interactions with the platform, including course selections, progress tracking, and learning preferences.
                </li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
              <p>We use collected data to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Personalize your learning experience and recommend resources.</li>
                <li>Track progress and suggest improvements in your learning roadmap.</li>
                <li>Improve our platform's performance and security.</li>
                <li>Communicate with you regarding updates, notifications, or support.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">3. Data Sharing & Security</h2>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>We do not sell or share your data with unauthorized third parties.</li>
                <li>We use encryption and secure servers to protect your information.</li>
                <li>Third-party services (e.g., analytics, payment processors) may have access to limited data.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">4. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Access, update, or delete your personal data.</li>
                <li>Opt out of marketing emails.</li>
                <li>Request a copy of your data.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">5. Cookies</h2>
              <p>
                We use cookies for functionality and analytics. You can disable cookies in your browser settings, but some features may not work properly.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">6. Policy Updates</h2>
              <p>
                We may update this policy periodically. Users will be notified of significant changes.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">7. Contact Us</h2>
              <p>
                For privacy concerns, you can check our contact details on <a href="/contact" className="text-primary hover:underline">Contact Us</a> page.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
