/* About Us component 
    Using TailwindCSS
    Typescript
    Internalization (i18n)
*/
import { Link } from "@remix-run/react";

export default function AboutUs() {

    return (
        <section className="container mx-auto p-6 flex flex-wrap">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-3">About Our Company</h2>
          <p className="mb-4">[Brief overview of the company]</p>
          <Link to="/aboutus" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <img src="[URL of your image]" alt="About Us" className="rounded-lg shadow-lg" />
        </div>
      </section>
       );
}