export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
    <section className="w-11/12 max-w-5xl mx-auto py-24">
      <div className="inline-block mb-16 mt-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">
          Privacy Policy
        </h1>
        <hr className="border-gray-600 mb-4 border-t-2" />
      </div>
        <h2 className="text-2xl font-semibold mb-4">Cookie Policy</h2>
        <p className="mb-4">
          We primarily use first-party cookies and similar technologies to provide essential functionality 
          and improve your experience. Third-party cookies are only used with your explicit consent.
        </p>

        <h3 className="text-xl font-semibold mb-2">Cookie Categories</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Essential/Functional Cookies</h4>
            <p className="text-gray-600">
              These cookies are necessary for the website to function and cannot be switched off. 
              They are usually only set in response to actions you take such as setting your privacy preferences, 
              logging in, or filling in forms.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Analytics Cookies</h4>
            <p className="text-gray-600">
              These cookies allow us to count visits and traffic sources so we can measure and improve the performance 
              of our site. They help us to know which pages are the most and least popular and see how visitors move 
              around the site.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Marketing Cookies</h4>
            <p className="text-gray-600">
              These cookies may be set through our site by our advertising partners. They may be used by those 
              companies to build a profile of your interests and show you relevant adverts on other sites.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Personalization Cookies</h4>
            <p className="text-gray-600">
              These cookies enable the website to provide enhanced functionality and personalization. They may be 
              set by us or by third party providers whose services we have added to our pages.
            </p>
          </div>
        </div>

        <p className="mt-4">
          You can adjust your cookie preferences at any time by clicking the "Cookie Settings" link in the footer.
        </p>
      </section>

      {/* Rest of your privacy policy content */}
    </div>
  );
} 