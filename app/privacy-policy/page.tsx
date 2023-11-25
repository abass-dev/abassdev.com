import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abass Dev - Privacy policy",
  description: "Privacy policy | Abass Dev",
};

const PrivacyPolicy = () => {
  return (
    <div className="dark:text-gray-100 dark:bg-gray-900 grid grid-cols-1 px-5 md:px-20 xpt">
      <h1 className="text-3xl py-8 text-center">Privacy Policy</h1>

      <div className="shadow p-5">
        <h2 className="text-2xl mb-4">Privacy policy for abassdev.com</h2>
        <p>
          At abassdev.com, the privacy of our visitors is of utmost importance
          to us. This privacy policy outlines the types of personal information
          that is received and collected by abassdev.com and how it is used.
        </p>
      </div>

      <div className="shadow p-5">
        <h2 className="text-2xl mb-4">Information We Collect</h2>
        <p className="mb-3">
          We may collect personal information such as your name, email address,
          and other contact details when you fill out the contact form on our
          website. This information is collected solely for the purpose of
          communicating with you regarding your inquiry or request.
        </p>
        <p>
          We may also collect non-personal information such as your IP address,
          browser type, operating system, and the date and time of your visit.
          This information is used to analyze trends, administer the site, track
          user's movement around the site, and gather demographic information.
        </p>
      </div>

      <div className="shadow p-5">
        <h2 className="text-2xl mb-4">Google Services</h2>
        <p className="mb-3">
          We use Google Analytics to collect information about how visitors use
          our website. Google Analytics collects information such as how often
          users visit our website, what pages they visit when they do so, and
          what other sites they used prior to coming to our website. We use the
          information we get from Google Analytics to improve our website and
          services.
        </p>
        <p className="mb-3">
          We also use Google Search Console to monitor and optimize the
          performance of our website in Google search results. Google Search
          Console collects information such as search queries, click-through
          rates, and website errors.
        </p>
        <p>
          Google may use cookies to collect information about your use of our
          website. You can learn more about how Google uses cookies by visiting
          Google's Privacy & Terms page.
        </p>
      </div>

      <div className="shadow p-5">
        <h2 className="text-2xl mb-4">Security</h2>
        <p className="mb-3">
          We take reasonable steps to protect the personal information we
          collect from unauthorized access, disclosure, alteration, or
          destruction. However, no website can be completely secure, so we
          cannot guarantee the security of your personal information.
        </p>
      </div>

      <div className="shadow p-5">
        <h2 className="text-2xl mb-4">Contact us</h2>
        <p className="mb-3">
          If you have any questions about this privacy policy, please{" "}
          <a className="text-blue-700" href="/contact">
            contact us.
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
