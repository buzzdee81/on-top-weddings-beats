
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Benutzer hat versucht, eine nicht existierende Route aufzurufen:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-purple/10 to-brand-pink/10">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold text-gradient mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Diese Seite existiert leider nicht.
        </p>
        <a
          href="/"
          className="bg-brand-purple text-white px-6 py-3 rounded-md font-medium hover:bg-brand-purple-dark transition-colors"
        >
          Zurück zur Startseite
        </a>
      </div>
    </div>
  );
};

export default NotFound;
