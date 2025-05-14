
import React from "react";

const testimonials = [
  {
    content: "CompliantProp has completely transformed how we manage our property compliance. We've reduced our admin time by 70% and have full confidence that we're meeting all regulatory requirements.",
    author: "Sarah Johnson",
    role: "Property Manager, Urban Housing Ltd",
    image: "https://randomuser.me/api/portraits/women/11.jpg"
  },
  {
    content: "As a landlord with multiple properties, keeping track of all compliance certificates was a nightmare. This platform has made it simple and stress-free.",
    author: "Michael Richardson",
    role: "Private Landlord",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    content: "The automated reminders and comprehensive dashboard give me peace of mind that nothing will slip through the cracks. Best compliance tool I've used in 15 years in the industry.",
    author: "Emma Thompson",
    role: "Compliance Director, Residency Group",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by Property Professionals
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover how CompliantProp is helping property managers, landlords, and inspectors across the industry.
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        className="h-5 w-5 text-yellow-400" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <img 
                      className="h-10 w-10 rounded-full" 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {testimonial.author}
                    </p>
                    <div className="text-xs text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
