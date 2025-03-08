
import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Cookies Policy</h1>
          
          <p className="text-muted-foreground mb-6">
            Our website uses cookies to enhance your experience.
          </p>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device to improve website functionality.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">2. Types of Cookies We Use</h2>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><span className="font-medium">Essential Cookies:</span> Necessary for login and core features.</li>
                <li><span className="font-medium">Performance Cookies:</span> Help analyze site traffic and improve the platform.</li>
                <li><span className="font-medium">Functional Cookies:</span> Remember preferences and settings.</li>
                <li><span className="font-medium">Third-Party Cookies:</span> Used for analytics and security monitoring.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">3. Managing Cookies</h2>
              <p>
                You can disable cookies in your browser settings, but some features may not work properly.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">4. Changes to This Policy</h2>
              <p>
                We may update this policy. Please review it periodically.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">5. Contact Us</h2>
              <p>
                For cookie-related inquiries, reach out to us using our contact details from <a href="/contact" className="text-primary hover:underline">Contact Us</a> page.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiesPolicy;
