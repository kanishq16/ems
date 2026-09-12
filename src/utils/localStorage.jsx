const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123"
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123"
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123"
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123"
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123"
  },
  {
    "id": 6,
    "email": "employee6@example.com",
    "password": "123"
  },
  {
    "id": 7,
    "email": "employee7@example.com",
    "password": "123"
  },
  {
    "id": 8,
    "email": "employee8@example.com",
    "password": "123"
  },
  {
    "id": 9,
    "email": "employee9@example.com",
    "password": "123"
  },
  {
    "id": 10,
    "email": "employee10@example.com",
    "password": "123"
  },
  {
    "id": 11,
    "email": "employee11@example.com",
    "password": "123"
  },
  {
    "id": 12,
    "email": "employee12@example.com",
    "password": "123"
  },
  {
    "id": 13,
    "email": "employee13@example.com",
    "password": "123"
  },
  {
    "id": 14,
    "email": "employee14@example.com",
    "password": "123"
  },
  {
    "id": 15,
    "email": "employee15@example.com",
    "password": "123"
  },
  {
    "id": 16,
    "email": "employee16@example.com",
    "password": "123"
  },
  {
    "id": 17,
    "email": "employee17@example.com",
    "password": "123"
  },
  {
    "id": 18,
    "email": "employee18@example.com",
    "password": "123"
  },
  {
    "id": 19,
    "email": "employee19@example.com",
    "password": "123"
  },
  {
    "id": 20,
    "email": "employee20@example.com",
    "password": "123"
  },
  {
    "id": 21,
    "email": "employee21@example.com",
    "password": "123"
  },
  {
    "id": 22,
    "email": "employee22@example.com",
    "password": "123"
  },
  {
    "id": 23,
    "email": "employee23@example.com",
    "password": "123"
  },
  {
    "id": 24,
    "email": "employee24@example.com",
    "password": "123"
  },
  {
    "id": 25,
    "email": "employee25@example.com",
    "password": "123"
  }
]


const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
]

[
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Sales Report",
        "taskDescription": "Prepare the weekly sales performance report for the management team.",
        "taskDate": "2026-09-12",
        "category": "Sales"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Client Follow-up",
        "taskDescription": "Follow up with the client regarding the pending proposal.",
        "taskDate": "2026-09-13",
        "category": "Client"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update CRM",
        "taskDescription": "Update customer information and recent interactions in the CRM.",
        "taskDate": "2026-09-10",
        "category": "Administration"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Team Presentation",
        "taskDescription": "Present the quarterly sales strategy to the team.",
        "taskDate": "2026-09-08",
        "category": "Meeting"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Product Research",
        "taskDescription": "Research competitor products and prepare a short comparison.",
        "taskDate": "2026-09-14",
        "category": "Research"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Design Homepage",
        "taskDescription": "Create the initial design for the new company homepage.",
        "taskDate": "2026-09-12",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Review Brand Assets",
        "taskDescription": "Review existing brand assets and identify areas that need improvement.",
        "taskDate": "2026-09-13",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Create Banner",
        "taskDescription": "Create a promotional banner for the upcoming campaign.",
        "taskDate": "2026-09-09",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update Icons",
        "taskDescription": "Update application icons according to the latest design system.",
        "taskDate": "2026-09-10",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Mobile UI Design",
        "taskDescription": "Design the mobile version of the employee dashboard.",
        "taskDate": "2026-09-15",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Landing Page Mockup",
        "taskDescription": "Prepare a high-fidelity mockup for the marketing landing page.",
        "taskDate": "2026-09-07",
        "category": "Design"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix Login Bug",
        "taskDescription": "Investigate and fix the authentication issue reported by users.",
        "taskDate": "2026-09-12",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "API Integration",
        "taskDescription": "Integrate the employee API with the dashboard application.",
        "taskDate": "2026-09-14",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Code Review",
        "taskDescription": "Review the latest pull requests and provide feedback.",
        "taskDate": "2026-09-10",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Database Optimization",
        "taskDescription": "Optimize slow database queries used by the reporting module.",
        "taskDate": "2026-09-16",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Write Unit Tests",
        "taskDescription": "Add unit tests for the authentication and user modules.",
        "taskDate": "2026-09-08",
        "category": "Testing"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Budget",
        "taskDescription": "Prepare the department budget for the upcoming quarter.",
        "taskDate": "2026-09-12",
        "category": "Finance"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Expense Review",
        "taskDescription": "Review employee expenses and verify submitted receipts.",
        "taskDate": "2026-09-13",
        "category": "Finance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Invoice Processing",
        "taskDescription": "Process outstanding vendor invoices and update payment records.",
        "taskDate": "2026-09-09",
        "category": "Finance"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Financial Forecast",
        "taskDescription": "Prepare a financial forecast based on current business performance.",
        "taskDate": "2026-09-17",
        "category": "Finance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Audit Documents",
        "taskDescription": "Organize and verify documents required for the internal audit.",
        "taskDate": "2026-09-06",
        "category": "Audit"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Customer Survey",
        "taskDescription": "Create and distribute a customer satisfaction survey.",
        "taskDate": "2026-09-12",
        "category": "Marketing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Social Media Plan",
        "taskDescription": "Prepare the social media content plan for next week.",
        "taskDate": "2026-09-13",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Email Campaign",
        "taskDescription": "Review performance metrics from the latest email campaign.",
        "taskDate": "2026-09-10",
        "category": "Marketing"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Campaign Research",
        "taskDescription": "Research successful marketing campaigns in the current industry.",
        "taskDate": "2026-09-15",
        "category": "Research"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Ad Copy Review",
        "taskDescription": "Review and finalize copy for the upcoming advertising campaign.",
        "taskDate": "2026-09-07",
        "category": "Marketing"
      }
    ]
  },
  {
    "id": 6,
    "email": "employee6@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Employee Onboarding",
        "taskDescription": "Prepare onboarding documents for newly joined employees.",
        "taskDate": "2026-09-12",
        "category": "HR"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Schedule Interviews",
        "taskDescription": "Schedule interviews with shortlisted candidates.",
        "taskDate": "2026-09-13",
        "category": "Recruitment"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update Employee Records",
        "taskDescription": "Update employee information in the HR system.",
        "taskDate": "2026-09-10",
        "category": "HR"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Training Schedule",
        "taskDescription": "Create a schedule for the next employee training program.",
        "taskDate": "2026-09-16",
        "category": "Training"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Policy Review",
        "taskDescription": "Review the latest company HR policies and suggest changes.",
        "taskDate": "2026-09-08",
        "category": "HR"
      }
    ]
  },
  {
    "id": 7,
    "email": "employee7@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Server Monitoring",
        "taskDescription": "Monitor server performance and identify potential issues.",
        "taskDate": "2026-09-12",
        "category": "IT"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Backup Verification",
        "taskDescription": "Verify that all scheduled system backups completed successfully.",
        "taskDate": "2026-09-13",
        "category": "IT"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Security Update",
        "taskDescription": "Install the latest security updates on company systems.",
        "taskDate": "2026-09-09",
        "category": "Security"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Network Audit",
        "taskDescription": "Perform an audit of the internal network configuration.",
        "taskDate": "2026-09-15",
        "category": "IT"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Hardware Inventory",
        "taskDescription": "Update the inventory list for company hardware.",
        "taskDate": "2026-09-06",
        "category": "IT"
      }
    ]
  },
  {
    "id": 8,
    "email": "employee8@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Write Documentation",
        "taskDescription": "Create documentation for the latest application features.",
        "taskDate": "2026-09-12",
        "category": "Documentation"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Update User Guide",
        "taskDescription": "Update the user guide with the latest workflow changes.",
        "taskDate": "2026-09-14",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Review API Docs",
        "taskDescription": "Review API documentation for accuracy and completeness.",
        "taskDate": "2026-09-10",
        "category": "Documentation"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create FAQ",
        "taskDescription": "Create an FAQ section for common customer questions.",
        "taskDate": "2026-09-16",
        "category": "Support"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Knowledge Base Update",
        "taskDescription": "Update outdated articles in the internal knowledge base.",
        "taskDate": "2026-09-07",
        "category": "Documentation"
      }
    ]
  },
  {
    "id": 9,
    "email": "employee9@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Test Application",
        "taskDescription": "Perform functional testing on the latest application release.",
        "taskDate": "2026-09-12",
        "category": "Testing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Regression Testing",
        "taskDescription": "Run regression tests after the latest code changes.",
        "taskDate": "2026-09-13",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Bug Verification",
        "taskDescription": "Verify fixes for bugs reported during the previous sprint.",
        "taskDate": "2026-09-10",
        "category": "Testing"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Test Reports",
        "taskDescription": "Prepare a detailed report of current testing results.",
        "taskDate": "2026-09-15",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Performance Testing",
        "taskDescription": "Test application performance under simulated heavy traffic.",
        "taskDate": "2026-09-08",
        "category": "Testing"
      }
    ]
  },
  {
    "id": 10,
    "email": "employee10@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Inventory Check",
        "taskDescription": "Check current inventory levels and identify low-stock items.",
        "taskDate": "2026-09-12",
        "category": "Operations"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Supplier Follow-up",
        "taskDescription": "Contact suppliers regarding pending deliveries.",
        "taskDate": "2026-09-13",
        "category": "Operations"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Stock Report",
        "taskDescription": "Prepare the weekly stock report.",
        "taskDate": "2026-09-09",
        "category": "Operations"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Warehouse Audit",
        "taskDescription": "Conduct an audit of warehouse inventory and records.",
        "taskDate": "2026-09-16",
        "category": "Operations"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Delivery Review",
        "taskDescription": "Review delayed deliveries and identify recurring issues.",
        "taskDate": "2026-09-07",
        "category": "Logistics"
      }
    ]
  },
  {
    "id": 11,
    "email": "employee11@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Client Meeting",
        "taskDescription": "Attend the scheduled meeting with the key client.",
        "taskDate": "2026-09-12",
        "category": "Client"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Proposal Draft",
        "taskDescription": "Prepare a proposal based on the client's requirements.",
        "taskDate": "2026-09-14",
        "category": "Sales"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Client Research",
        "taskDescription": "Research the client's business and recent market activities.",
        "taskDate": "2026-09-10",
        "category": "Research"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Contract Review",
        "taskDescription": "Review the draft contract before sending it to the client.",
        "taskDate": "2026-09-15",
        "category": "Sales"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Sales Presentation",
        "taskDescription": "Prepare a presentation for the upcoming sales meeting.",
        "taskDate": "2026-09-08",
        "category": "Sales"
      }
    ]
  },
  {
    "id": 12,
    "email": "employee12@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Project Planning",
        "taskDescription": "Create a project plan with milestones and deadlines.",
        "taskDate": "2026-09-12",
        "category": "Management"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Team Meeting",
        "taskDescription": "Conduct the weekly project team meeting.",
        "taskDate": "2026-09-13",
        "category": "Meeting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Risk Assessment",
        "taskDescription": "Identify potential project risks and prepare mitigation plans.",
        "taskDate": "2026-09-10",
        "category": "Management"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Sprint Planning",
        "taskDescription": "Prepare tasks and priorities for the upcoming development sprint.",
        "taskDate": "2026-09-15",
        "category": "Management"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Project Review",
        "taskDescription": "Review the current project status against the original plan.",
        "taskDate": "2026-09-07",
        "category": "Management"
      }
    ]
  },
  {
    "id": 13,
    "email": "employee13@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Content Writing",
        "taskDescription": "Write a new article for the company website.",
        "taskDate": "2026-09-12",
        "category": "Content"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Blog Research",
        "taskDescription": "Research topics and keywords for upcoming blog posts.",
        "taskDate": "2026-09-13",
        "category": "Content"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Proofread Article",
        "taskDescription": "Proofread and correct the latest company article.",
        "taskDate": "2026-09-09",
        "category": "Content"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "SEO Update",
        "taskDescription": "Optimize existing articles for search engine visibility.",
        "taskDate": "2026-09-15",
        "category": "SEO"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Newsletter Draft",
        "taskDescription": "Prepare the monthly newsletter draft for review.",
        "taskDate": "2026-09-08",
        "category": "Content"
      }
    ]
  },
  {
    "id": 14,
    "email": "employee14@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Customer Support",
        "taskDescription": "Respond to unresolved customer support requests.",
        "taskDate": "2026-09-12",
        "category": "Support"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Ticket Review",
        "taskDescription": "Review open support tickets and prioritize urgent issues.",
        "taskDate": "2026-09-13",
        "category": "Support"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "FAQ Update",
        "taskDescription": "Update frequently asked questions based on recent support requests.",
        "taskDate": "2026-09-10",
        "category": "Support"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Support Training",
        "taskDescription": "Complete training for the new support workflow.",
        "taskDate": "2026-09-16",
        "category": "Training"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Customer Feedback",
        "taskDescription": "Compile recent customer feedback and identify common concerns.",
        "taskDate": "2026-09-07",
        "category": "Support"
      }
    ]
  },
  {
    "id": 15,
    "email": "employee15@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create Dashboard",
        "taskDescription": "Build a dashboard showing important business metrics.",
        "taskDate": "2026-09-12",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Chart Integration",
        "taskDescription": "Integrate charts into the analytics dashboard.",
        "taskDate": "2026-09-14",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "UI Testing",
        "taskDescription": "Test the dashboard interface across supported screen sizes.",
        "taskDate": "2026-09-10",
        "category": "Testing"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Performance Improvement",
        "taskDescription": "Improve dashboard loading performance.",
        "taskDate": "2026-09-16",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Responsive Design",
        "taskDescription": "Make the dashboard responsive on tablets and mobile devices.",
        "taskDate": "2026-09-08",
        "category": "Development"
      }
    ]
  },
  {
    "id": 16,
    "email": "employee16@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Recruitment Report",
        "taskDescription": "Prepare a report showing current recruitment progress.",
        "taskDate": "2026-09-12",
        "category": "HR"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Candidate Screening",
        "taskDescription": "Screen applications for the open software developer position.",
        "taskDate": "2026-09-13",
        "category": "Recruitment"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Interview Feedback",
        "taskDescription": "Collect and organize feedback from recent interviews.",
        "taskDate": "2026-09-10",
        "category": "Recruitment"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Job Description",
        "taskDescription": "Create a job description for the new marketing role.",
        "taskDate": "2026-09-15",
        "category": "Recruitment"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Employee Survey",
        "taskDescription": "Prepare an employee engagement survey for the HR team.",
        "taskDate": "2026-09-07",
        "category": "HR"
      }
    ]
  },
  {
    "id": 17,
    "email": "employee17@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Market Analysis",
        "taskDescription": "Analyze current market trends and prepare a summary.",
        "taskDate": "2026-09-12",
        "category": "Research"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Competitor Analysis",
        "taskDescription": "Compare competitor products, pricing, and positioning.",
        "taskDate": "2026-09-14",
        "category": "Research"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Market Report",
        "taskDescription": "Review and finalize the latest market research report.",
        "taskDate": "2026-09-09",
        "category": "Research"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Customer Analysis",
        "taskDescription": "Analyze customer behavior using recent sales data.",
        "taskDate": "2026-09-16",
        "category": "Analytics"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Industry Research",
        "taskDescription": "Research major changes happening in the industry.",
        "taskDate": "2026-09-08",
        "category": "Research"
      }
    ]
  },
  {
    "id": 18,
    "email": "employee18@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Mobile Testing",
        "taskDescription": "Test the application on different mobile devices.",
        "taskDate": "2026-09-12",
        "category": "Testing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Browser Testing",
        "taskDescription": "Test application compatibility across major browsers.",
        "taskDate": "2026-09-13",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Bug Report",
        "taskDescription": "Document bugs found during the previous testing cycle.",
        "taskDate": "2026-09-10",
        "category": "Testing"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Accessibility Testing",
        "taskDescription": "Test the application for common accessibility issues.",
        "taskDate": "2026-09-15",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Release Testing",
        "taskDescription": "Perform final testing before the next application release.",
        "taskDate": "2026-09-07",
        "category": "Testing"
      }
    ]
  },
  {
    "id": 19,
    "email": "employee19@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Product Documentation",
        "taskDescription": "Document the features and usage of the latest product.",
        "taskDate": "2026-09-12",
        "category": "Documentation"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Feature Guide",
        "taskDescription": "Create a detailed guide explaining new product features.",
        "taskDate": "2026-09-14",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Document Review",
        "taskDescription": "Review existing product documentation for outdated information.",
        "taskDate": "2026-09-09",
        "category": "Documentation"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Release Notes",
        "taskDescription": "Prepare release notes for the upcoming software update.",
        "taskDate": "2026-09-16",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Technical Guide",
        "taskDescription": "Create a technical setup guide for internal developers.",
        "taskDate": "2026-09-08",
        "category": "Development"
      }
    ]
  },
  {
    "id": 20,
    "email": "employee20@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Sales Calls",
        "taskDescription": "Contact potential customers and discuss available products.",
        "taskDate": "2026-09-12",
        "category": "Sales"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Lead Management",
        "taskDescription": "Update and prioritize the current sales leads.",
        "taskDate": "2026-09-13",
        "category": "Sales"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Sales Report",
        "taskDescription": "Prepare the weekly sales activity report.",
        "taskDate": "2026-09-10",
        "category": "Sales"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "New Leads",
        "taskDescription": "Research and add new qualified leads to the CRM.",
        "taskDate": "2026-09-15",
        "category": "Sales"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Client Proposal",
        "taskDescription": "Prepare a customized proposal for a prospective client.",
        "taskDate": "2026-09-07",
        "category": "Sales"
      }
    ]
  },
  {
    "id": 21,
    "email": "employee21@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Security Review",
        "taskDescription": "Review application security settings and identify vulnerabilities.",
        "taskDate": "2026-09-12",
        "category": "Security"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Access Audit",
        "taskDescription": "Audit user permissions across internal systems.",
        "taskDate": "2026-09-13",
        "category": "Security"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Password Policy",
        "taskDescription": "Review and update the company's password policy.",
        "taskDate": "2026-09-09",
        "category": "Security"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Security Training",
        "taskDescription": "Prepare security awareness material for employees.",
        "taskDate": "2026-09-15",
        "category": "Training"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Risk Assessment",
        "taskDescription": "Perform a security risk assessment of internal systems.",
        "taskDate": "2026-09-08",
        "category": "Security"
      }
    ]
  },
  {
    "id": 22,
    "email": "employee22@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create Invoice",
        "taskDescription": "Create invoices for completed customer orders.",
        "taskDate": "2026-09-12",
        "category": "Finance"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Payment Tracking",
        "taskDescription": "Track outstanding customer payments and follow up where necessary.",
        "taskDate": "2026-09-13",
        "category": "Finance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Account Reconciliation",
        "taskDescription": "Reconcile customer accounts with recent transactions.",
        "taskDate": "2026-09-10",
        "category": "Finance"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Monthly Closing",
        "taskDescription": "Assist with monthly financial closing activities.",
        "taskDate": "2026-09-16",
        "category": "Finance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Expense Report",
        "taskDescription": "Review and submit the department expense report.",
        "taskDate": "2026-09-07",
        "category": "Finance"
      }
    ]
  },
  {
    "id": 23,
    "email": "employee23@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Campaign Planning",
        "taskDescription": "Plan the next digital marketing campaign.",
        "taskDate": "2026-09-12",
        "category": "Marketing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Ad Performance",
        "taskDescription": "Analyze the performance of current online advertisements.",
        "taskDate": "2026-09-13",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Keyword Research",
        "taskDescription": "Research keywords for the upcoming marketing campaign.",
        "taskDate": "2026-09-10",
        "category": "SEO"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Campaign Report",
        "taskDescription": "Prepare a report covering campaign performance and results.",
        "taskDate": "2026-09-15",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Social Content",
        "taskDescription": "Prepare social media content for the upcoming product launch.",
        "taskDate": "2026-09-08",
        "category": "Marketing"
      }
    ]
  },
  {
    "id": 24,
    "email": "employee24@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Organize Meeting",
        "taskDescription": "Organize the upcoming department meeting and prepare the agenda.",
        "taskDate": "2026-09-12",
        "category": "Administration"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Meeting Notes",
        "taskDescription": "Prepare notes and action items from the previous meeting.",
        "taskDate": "2026-09-13",
        "category": "Administration"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Document Filing",
        "taskDescription": "Organize and file important department documents.",
        "taskDate": "2026-09-10",
        "category": "Administration"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Office Supplies",
        "taskDescription": "Check office supplies and prepare a restocking request.",
        "taskDate": "2026-09-15",
        "category": "Administration"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Schedule Review",
        "taskDescription": "Review department schedules and identify scheduling conflicts.",
        "taskDate": "2026-09-07",
        "category": "Administration"
      }
    ]
  },
  {
    "id": 25,
    "email": "employee25@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Analytics Report",
        "taskDescription": "Prepare a report analyzing the latest business performance data.",
        "taskDate": "2026-09-12",
        "category": "Analytics"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Data Cleanup",
        "taskDescription": "Clean and validate the latest customer data.",
        "taskDate": "2026-09-13",
        "category": "Analytics"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Dashboard Update",
        "taskDescription": "Update analytics dashboards with the latest data.",
        "taskDate": "2026-09-10",
        "category": "Analytics"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Data Visualization",
        "taskDescription": "Create visualizations for the monthly business review.",
        "taskDate": "2026-09-15",
        "category": "Analytics"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "KPI Review",
        "taskDescription": "Review key performance indicators and identify unusual trends.",
        "taskDate": "2026-09-08",
        "category": "Analytics"
      }
    ]
  }
]


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
}
export const getLocalStorage = () => {
    
}
