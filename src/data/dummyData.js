// src/data/dummyData.js

// =========================
// 📊 SALES DASHBOARD DATA
// =========================
export const salesData = {
  kpis: [
    { title: "Total Revenue", value: "$1,240,000", change: "+12%" },
    { title: "Deals Closed", value: "540", change: "+8%" },
    { title: "Avg Deal Size", value: "$2,300", change: "+3%" },
    { title: "Conversion Rate", value: "24%", change: "-1%" },
  ],
  revenueTrend: [
    { month: "Jan", revenue: 82000 },
    { month: "Feb", revenue: 91000 },
    { month: "Mar", revenue: 105000 },
    { month: "Apr", revenue: 112000 },
    { month: "May", revenue: 95000 },
    { month: "Jun", revenue: 130000 },
  ],
  dealsByRegion: [
    { region: "North", deals: 180 },
    { region: "South", deals: 130 },
    { region: "East", deals: 90},
    { region: "West", deals: 140 },
  ],
  conversionSplit: [
    { type: "Email", value: 35 },
    { type: "Ads", value: 25 },
    { type: "Organic", value: 30 },
    { type: "Referrals", value: 10 },
  ],
};

// =========================
// 📈 MARKETING DASHBOARD
// =========================
export const marketingData = {
  kpis: [
    { title: "Website Visitors", value: "82,400", change: "+5%" },
    { title: "Leads Generated", value: "1,120", change: "+9%" },
    { title: "CTR", value: "3.8%", change: "-0.2%" },
    { title: "Conversion Rate", value: "5.4%", change: "+1.2%" },
  ],
  trafficTrend: [
    { month: "Jan", visits: 5000 },
    { month: "Feb", visits: 6200 },
    { month: "Mar", visits: 7200 },
    { month: "Apr", visits: 8000 },
    { month: "May", visits: 9400 },
    { month: "Jun", visits: 10800 },
  ],
  channelPerformance: [
    { channel: "Social Media", value: 4500 },
    { channel: "Email", value: 2700 },
    { channel: "Ads", value: 3200 },
    { channel: "Organic", value: 4100 },
  ],
  conversionBySource: [
    { source: "Google", value: 42 },
    { source: "LinkedIn", value: 20 },
    { source: "Facebook", value: 25 },
    { source: "Others", value: 13 },
  ],
};

// =========================
// 💰 FINANCIAL DASHBOARD
// =========================
export const financialData = {
  kpis: [
    { title: "Total Revenue", value: "$5,200,000", change: "+10%" },
    { title: "Profit Margin", value: "23%", change: "+1.2%" },
    { title: "Total Expenses", value: "$3,980,000", change: "-2%" },
    { title: "Cash Flow", value: "$1,220,000", change: "+6%" },
  ],
  monthlyRevenue: [
    { month: "Jan", revenue: 400000, expenses: 320000 },
    { month: "Feb", revenue: 420000, expenses: 310000 },
    { month: "Mar", revenue: 500000, expenses: 370000 },
    { month: "Apr", revenue: 520000, expenses: 360000 },
    { month: "May", revenue: 470000, expenses: 350000 },
    { month: "Jun", revenue: 600000, expenses: 400000 },
  ],
  expenseBreakdown: [
    { category: "Salaries", value: 45 },
    { category: "Operations", value: 25 },
    { category: "Marketing", value: 20 },
    { category: "Tech", value: 10 },
  ],
};

// =========================
// 🧭 SAAS DASHBOARD
// =========================
export const saasData = {
  kpis: [
    { title: "MRR", value: "$320,000", change: "+9%" },
    { title: "Churn Rate", value: "4.3%", change: "-0.4%" },
    { title: "CAC", value: "$340", change: "+2%" },
    { title: "LTV", value: "$2,800", change: "+5%" },
  ],
  mrrTrend: [
    { month: "Jan", value: 250000 },
    { month: "Feb", value: 270000 },
    { month: "Mar", value: 280000 },
    { month: "Apr", value: 300000 },
    { month: "May", value: 310000 },
    { month: "Jun", value: 320000 },
  ],
  churnBreakdown: [
    { reason: "Price", value: 30 },
    { reason: "Service", value: 25 },
    { reason: "Competitor", value: 20 },
    { reason: "Other", value: 25 },
  ],
};

// =========================
// 🛒 ECOMMERCE DASHBOARD
// =========================
export const ecommerceData = {
  kpis: [
    { title: "Total Orders", value: "12,480", change: "+6%" },
    { title: "Average Order Value", value: "$74", change: "+1.8%" },
    { title: "Returning Customers", value: "38%", change: "+2.1%" },
    { title: "Cart Abandonment", value: "18%", change: "-1.2%" },
  ],
  salesTrend: [
    { month: "Jan", sales: 1020 },
    { month: "Feb", sales: 1280 },
    { month: "Mar", sales: 1450 },
    { month: "Apr", sales: 1650 },
    { month: "May", sales: 1720 },
    { month: "Jun", sales: 1900 },
  ],
  productCategory: [
    { category: "Electronics", value: 40 },
    { category: "Clothing", value: 25 },
    { category: "Home", value: 20 },
    { category: "Other", value: 15 },
  ],
  trafficSource: [
    { source: "Google", value: 50 },
    { source: "Instagram", value: 30 },
    { source: "Email", value: 10 },
    { source: "Others", value: 10 },
  ],
};

// =========================
// 🙋 CUSTOMER SUPPORT DASHBOARD
// =========================
export const supportData = {
  kpis: [
    { title: "Open Tickets", value: "240", change: "-4%" },
    { title: "Resolved Tickets", value: "1,120", change: "+7%" },
    { title: "Avg Response Time", value: "2.4h", change: "-0.6h" },
    { title: "CSAT Score", value: "91%", change: "+3%" },
  ],
  ticketTrend: [
    { month: "Jan", open: 300, resolved: 250 },
    { month: "Feb", open: 280, resolved: 300 },
    { month: "Mar", open: 260, resolved: 310 },
    { month: "Apr", open: 240, resolved: 320 },
    { month: "May", open: 230, resolved: 340 },
  ],
  issueType: [
    { type: "Technical", value: 45 },
    { type: "Billing", value: 25 },
    { type: "Account", value: 20 },
    { type: "Other", value: 10 },
  ],
};

// =========================
// 🧍 HR DASHBOARD
// =========================
export const hrData = {
  kpis: [
    { title: "Employees", value: "420", change: "+3%" },
    { title: "Attendance", value: "96%", change: "+1.2%" },
    { title: "Avg Tenure", value: "2.8 yrs", change: "+0.3" },
    { title: "Attrition Rate", value: "8.4%", change: "-0.4%" },
  ],
  departmentStats: [
    { department: "Engineering", employees: 120 },
    { department: "Sales", employees: 90 },
    { department: "Marketing", employees: 70 },
    { department: "HR", employees: 50 },
    { department: "Support", employees: 90 },
  ],
  genderSplit: [
    { gender: "Male", value: 60 },
    { gender: "Female", value: 38 },
    { gender: "Other", value: 2 },
  ],
};

// =========================
// 🧠 MANAGEMENT KPI DASHBOARD
// =========================
export const managementData = {
  overview: [
    { name: "Revenue Growth", value: "12%" },
    { name: "Employee Growth", value: "3%" },
    { name: "Customer Retention", value: "91%" },
    { name: "Net Profit Margin", value: "22%" },
  ],
  performance: [
    { metric: "Sales", score: 88 },
    { metric: "Marketing", score: 82 },
    { metric: "Finance", score: 90 },
    { metric: "Support", score: 86 },
  ],
};
