
import React from "react";
import { Link } from "react-router-dom";
import { Building, MapPin, CheckCircle, AlertTriangle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  id: string;
  name: string;
  address: string;
  type: string;
  complianceStatus: "compliant" | "warning" | "critical";
  upcomingDeadlines: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  name,
  address,
  type,
  complianceStatus,
  upcomingDeadlines
}) => {
  const getComplianceStatusUI = () => {
    switch (complianceStatus) {
      case "compliant":
        return (
          <div className="flex items-center text-compliance-success">
            <CheckCircle className="h-5 w-5 mr-1" />
            <span>Compliant</span>
          </div>
        );
      case "warning":
        return (
          <div className="flex items-center text-compliance-warning">
            <AlertTriangle className="h-5 w-5 mr-1" />
            <span>Attention Needed</span>
          </div>
        );
      case "critical":
        return (
          <div className="flex items-center text-compliance-danger">
            <AlertCircle className="h-5 w-5 mr-1" />
            <span>Critical Issues</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden card-hover">
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-2">
            <Building className="h-5 w-5 text-brand-500" />
            <h3 className="text-lg font-medium text-gray-900">{name}</h3>
          </div>
          {getComplianceStatusUI()}
        </div>
        
        <div className="mt-2 flex items-start">
          <MapPin className="h-4 w-4 text-gray-400 mt-0.5 mr-1 flex-shrink-0" />
          <p className="text-sm text-gray-500">{address}</p>
        </div>
        
        <div className="mt-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            {type}
          </span>
        </div>
        
        {upcomingDeadlines > 0 && (
          <div className="mt-4 bg-amber-50 p-2 rounded-md">
            <p className="text-sm text-amber-800">
              <span className="font-medium">{upcomingDeadlines}</span> upcoming compliance {upcomingDeadlines === 1 ? 'deadline' : 'deadlines'}
            </p>
          </div>
        )}
        
        <div className="mt-4 flex justify-between">
          <Link to={`/property/${id}`}>
            <Button variant="ghost" size="sm">
              View Details
            </Button>
          </Link>
          <Link to={`/property/${id}/compliance`}>
            <Button variant="default" size="sm">
              Manage Compliance
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
