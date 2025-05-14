
import React from "react";
import { 
  CheckCircle, 
  AlertTriangle, 
  AlertCircle, 
  Clock,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface ComplianceStatusProps {
  compliant: number;
  warning: number;
  critical: number;
  expiringSoon: number;
  total: number;
}

const ComplianceStatus: React.FC<ComplianceStatusProps> = ({
  compliant,
  warning,
  critical,
  expiringSoon,
  total
}) => {
  const compliantPercentage = Math.round((compliant / total) * 100);
  const warningPercentage = Math.round((warning / total) * 100);
  const criticalPercentage = Math.round((critical / total) * 100);

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-5">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Compliance Overview</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-compliance-success mr-2" />
              <span>Compliant</span>
            </div>
            <div className="text-compliance-success font-medium">{compliant} Properties</div>
          </div>
          <Progress value={compliantPercentage} className="h-2 bg-gray-100" color="bg-compliance-success" />
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-compliance-warning mr-2" />
              <span>Attention Needed</span>
            </div>
            <div className="text-compliance-warning font-medium">{warning} Properties</div>
          </div>
          <Progress value={warningPercentage} className="h-2 bg-gray-100" color="bg-compliance-warning" />
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-compliance-danger mr-2" />
              <span>Critical</span>
            </div>
            <div className="text-compliance-danger font-medium">{critical} Properties</div>
          </div>
          <Progress value={criticalPercentage} className="h-2 bg-gray-100" color="bg-compliance-danger" />
        </div>
        
        <div className="mt-6 p-4 bg-amber-50 rounded-md flex items-center justify-between">
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-amber-600 mr-2" />
            <div className="text-sm text-amber-800">
              <span className="font-medium">{expiringSoon}</span> certificates expiring soon
            </div>
          </div>
          <Button variant="ghost" size="sm" className="text-amber-800 hover:text-amber-900 hover:bg-amber-100">
            View All
          </Button>
        </div>
        
        <div className="mt-4 flex justify-end">
          <Button className="flex items-center">
            <FileText className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ComplianceStatus;
