import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 py-20">
      <h1 className="text-7xl font-extrabold text-primary mb-4 tracking-wider">
        404
      </h1>
      <h2 className="text-3xl font-semibold mb-2 text-gray-800">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-500 mb-8">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
      >
        Go to Home
      </Link>
    </section>
  );
}
