
import React from "react";
import { CheckCircle, Bell, FileText, Calendar, Shield, BarChart } from "lucide-react";

const featuresList = [
  {
    icon: <CheckCircle className="h-8 w-8 text-brand-600" />,
    title: "Automated Compliance Tracking",
    description: "Track and manage all your compliance requirements with automated reminders for upcoming deadlines and renewals."
  },
  {
    icon: <Bell className="h-8 w-8 text-brand-600" />,
    title: "Smart Notification System",
    description: "Receive timely alerts about upcoming inspections, certificate expiries, and compliance issues via email and SMS."
  },
  {
    icon: <FileText className="h-8 w-8 text-brand-600" />,
    title: "Document Management",
    description: "Centralized storage for all compliance certificates, inspection reports, and important documents with secure access control."
  },
  {
    icon: <Calendar className="h-8 w-8 text-brand-600" />,
    title: "Inspection Scheduling",
    description: "Easily schedule and track property inspections, with automatic reminders for all parties involved."
  },
  {
    icon: <Shield className="h-8 w-8 text-brand-600" />,
    title: "Compliance Checklists",
    description: "Interactive checklists for different compliance categories including fire safety, electrical, gas, and more."
  },
  {
    icon: <BarChart className="h-8 w-8 text-brand-600" />,
    title: "Reporting & Analytics",
    description: "Comprehensive dashboards and reports to monitor compliance status across your entire property portfolio."
  }
];

const Features = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Features Designed for Property Professionals
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Our platform streamlines compliance management, saving you time and reducing risk.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuresList.map((feature, index) => (
              <div 
                key={index} 
                className="relative p-6 bg-white rounded-lg border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-brand-300"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
