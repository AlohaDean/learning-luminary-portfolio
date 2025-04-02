
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-nordic-offWhite">
      <div className="text-center max-w-md px-4">
        <h1 className="text-5xl font-light text-nordic-blue mb-6">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Looks like this page is still in development.
        </p>
        <Link 
          to="/" 
          className="px-6 py-2 bg-nordic-blue text-white rounded hover:bg-opacity-90 transition-all duration-300"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
