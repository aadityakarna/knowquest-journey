
import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          
          <p className="text-muted-foreground mb-6">
            By using the Personalized Learning Platform, you agree to these Terms of Service.
          </p>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
              <p>
                By signing up or using this platform, you agree to abide by these terms. If you do not agree, please do not use the platform.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">2. User Responsibilities</h2>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>You must be at least 8 years old to use the platform.</li>
                <li>You agree to provide accurate registration details.</li>
                <li>Do not use the platform for illegal activities, spamming, or disrupting services.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">3. Learning Content & Roadmaps</h2>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Learning resources and roadmaps are provided for educational purposes only.</li>
                <li>We do not guarantee employment or certification unless explicitly mentioned.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">4. Account & Termination</h2>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Users are responsible for maintaining the security of their accounts.</li>
                <li>We reserve the right to terminate accounts that violate our policies.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">5. Disclaimers & Liability</h2>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>The platform is provided "as-is" without guarantees of uninterrupted service.</li>
                <li>We are not responsible for third-party content linked from our site.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">6. Modifications</h2>
              <p>
                These terms may be updated. Continued use of the platform means you accept the changes.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">7. Governing Law</h2>
              <p>
                These terms are governed by the laws.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">8. Contact Us</h2>
              <p>
                For questions, email us from the contact details provided on <a href="/contact" className="text-primary hover:underline">Contact Us</a> page.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
