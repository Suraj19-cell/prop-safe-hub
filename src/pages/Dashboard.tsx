
import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import PropertyCard from "@/components/dashboard/PropertyCard";
import ComplianceStatus from "@/components/dashboard/ComplianceStatus";
import { Button } from "@/components/ui/button";
import { Building, Plus, Calendar, Bell } from "lucide-react";

const Dashboard = () => {
  // Mock data - in a real app this would come from an API
  const properties = [
    {
      id: "prop1",
      name: "Riverside Apartments",
      address: "123 River Lane, Rivertown, RT1 2AB",
      type: "Apartment Building",
      complianceStatus: "compliant" as const,
      upcomingDeadlines: 0
    },
    {
      id: "prop2",
      name: "Oakwood House",
      address: "45 Oak Street, Woodville, WV3 8CD",
      type: "Single Family Home",
      complianceStatus: "warning" as const,
      upcomingDeadlines: 2
    },
    {
      id: "prop3",
      name: "City Center Office",
      address: "78 Main Street, Downtown, DT5 9EF",
      type: "Commercial Property",
      complianceStatus: "critical" as const,
      upcomingDeadlines: 3
    }
  ];

  // Mock compliance data
  const complianceData = {
    compliant: 8,
    warning: 3,
    critical: 1,
    expiringSoon: 5,
    total: 12
  };

  // Mock upcoming tasks
  const upcomingTasks = [
    {
      id: "task1",
      title: "Fire Safety Certificate Renewal",
      property: "Riverside Apartments",
      dueDate: "2025-06-01",
      priority: "High"
    },
    {
      id: "task2",
      title: "Electrical Installation Inspection",
      property: "Oakwood House",
      dueDate: "2025-05-25",
      priority: "Medium"
    },
    {
      id: "task3",
      title: "Gas Safety Check",
      property: "City Center Office",
      dueDate: "2025-05-20",
      priority: "High"
    }
  ];

  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Get priority badge class
  const getPriorityBadgeClass = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-amber-100 text-amber-800";
      case "Low":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <DashboardLayout>
      <div className="pb-5 border-b border-gray-200 flex justify-between">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          Welcome, Tom!
        </h2>
        <Button className="flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Add Property
        </Button>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-brand-100 rounded-md p-3">
                <Building className="h-6 w-6 text-brand-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Properties</dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">{properties.length}</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <a href="#" className="font-medium text-brand-600 hover:text-brand-500">
                View all
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Upcoming Tasks</dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">{upcomingTasks.length}</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <a href="#" className="font-medium text-brand-600 hover:text-brand-500">
                View calendar
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-amber-100 rounded-md p-3">
                <Bell className="h-6 w-6 text-amber-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Expiring Certificates</dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">{complianceData.expiringSoon}</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <a href="#" className="font-medium text-brand-600 hover:text-brand-500">
                View all
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h3 className="text-lg font-medium text-gray-900 mb-3">Your Properties</h3>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {properties.map(property => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </div>
        <div>
          <ComplianceStatus {...complianceData} />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-3">Upcoming Tasks</h3>
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {upcomingTasks.map((task) => (
              <li key={task.id}>
                <a href="#" className="block hover:bg-gray-50">
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-brand-600 truncate">{task.title}</p>
                      <div className="ml-2 flex-shrink-0 flex">
                        <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityBadgeClass(task.priority)}`}>
                          {task.priority}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">
                          <Building className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                          {task.property}
                        </p>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                        <Calendar className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                        <p>Due on {formatDate(task.dueDate)}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
