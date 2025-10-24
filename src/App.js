import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import all dashboards
import CEODashboard from "./dashboards/CEODashboard"; // Using Management as CEO
import MarketingDashboard from "./dashboards/MarketingDashboard";
import SalesDashboard from "./dashboards/SalesDashboard";
import HRDashboard from "./dashboards/HRDashboard";
import FinancialDashboard from "./dashboards/FinanceDashboard";
import EcommerceDashboard from "./dashboards/EcommerceDashboard";
import WebAnalyticsDashboard from "./dashboards/WebAnalyticsDashboard";
import ContentMarketingDashboard from "./dashboards/ContentMarketingDashboard";
import PpcDashboard from "./dashboards/PpcDashboard";
import EmailMarketingDashboard from "./dashboards/EmailMarketingDashboard";
import SocialMediaDashboard from "./dashboards/SocialMediaDashboard";
import CustomerSupportDashboard from "./dashboards/CustomerSupportDashboard";
import SaaSDashboard from "./dashboards/SaaS_Dashboard"; // Corrected filename
import EmployeePerformanceDashboard from "./dashboards/EmployeePerformanceDashboard";
import CustomerSatisfactionDashboard from "./dashboards/CustomerSatisfactionDashboard";

function App() {
  const menus = [
    { name: "CEO", path: "/" },
    { name: "Sales", path: "/sales" },
    { name: "Marketing", path: "/marketing" },
    { name: "Web Analytics", path: "/web-analytics" },
    { name: "Content Marketing", path: "/content-marketing" },
    { name: "PPC", path: "/ppc" },
    { name: "Email Marketing", path: "/email-marketing" },
    { name: "Social Media", path: "/social-media" },
    { name: "Finance", path: "/finance" },
    { name: "HR", path: "/hr" },
    { name: "Employee Performance", path: "/employee-performance" },
    { name: "Ecommerce", path: "/ecommerce" },
    { name: "SaaS", path: "/saas" },
    { name: "Customer Satisfaction", path: "/customer-satisfaction" },
  ];

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-6 text-2xl font-bold text-gray-800 border-b">
            CorpDash
          </div>
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {menus.map((menu) => (
              <Link
                key={menu.path}
                to={menu.path}
                className="block p-3 rounded-lg text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 font-medium transition-all duration-300"
              >
                {menu.name}
              </Link>
            ))}
          </nav>
          <div className="p-4 text-center text-sm text-gray-500 border-t">
            © 2025 CorpDash
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-8">
          {" "}
          {/* Added padding */}
          <Routes>
            <Route path="/" element={<CEODashboard />} />
            <Route path="/sales" element={<SalesDashboard />} />
            <Route path="/marketing" element={<MarketingDashboard />} />
            <Route
              path="/web-analytics"
              element={<WebAnalyticsDashboard />}
            />
            <Route
              path="/content-marketing"
              element={<ContentMarketingDashboard />}
            />
            <Route path="/ppc" element={<PpcDashboard />} />
            <Route
              path="/email-marketing"
              element={<EmailMarketingDashboard />}
            />
            <Route
              path="/social-media"
              element={<SocialMediaDashboard />}
            />
            <Route path="/finance" element={<FinancialDashboard />} />
            <Route path="/hr" element={<HRDashboard />} />
            <Route
              path="/employee-performance"
              element={<EmployeePerformanceDashboard />}
            />
            <Route path="/ecommerce" element={<EcommerceDashboard />} />
            <Route path="/saas" element={<SaaSDashboard />} />
            <Route path="/support" element={<CustomerSupportDashboard />} />
            <Route
              path="/customer-satisfaction"
              element={<CustomerSatisfactionDashboard />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
