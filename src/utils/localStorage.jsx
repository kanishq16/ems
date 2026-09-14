localStorage.clear()

const employees = [
  { id: 1, firstName: "Aarav", email: "employee1@example.com", password: "123", taskNumbers: { active: 2, newTask: 1, completed: 5, failed: 0 } },
  { id: 2, firstName: "Vivaan", email: "employee2@example.com", password: "123", taskNumbers: { active: 3, newTask: 2, completed: 4, failed: 1 } },
  { id: 3, firstName: "Aditya", email: "employee3@example.com", password: "123", taskNumbers: { active: 1, newTask: 3, completed: 6, failed: 0 } },
  { id: 4, firstName: "Arjun", email: "employee4@example.com", password: "123", taskNumbers: { active: 4, newTask: 1, completed: 3, failed: 1 } },
  { id: 5, firstName: "Rohan", email: "employee5@example.com", password: "123", taskNumbers: { active: 2, newTask: 2, completed: 7, failed: 0 } },
  { id: 6, firstName: "Kabir", email: "employee6@example.com", password: "123", taskNumbers: { active: 3, newTask: 1, completed: 5, failed: 2 } },
  { id: 7, firstName: "Ishaan", email: "employee7@example.com", password: "123", taskNumbers: { active: 1, newTask: 2, completed: 8, failed: 0 } },
  { id: 8, firstName: "Rahul", email: "employee8@example.com", password: "123", taskNumbers: { active: 2, newTask: 3, completed: 4, failed: 1 } },
  { id: 9, firstName: "Karan", email: "employee9@example.com", password: "123", taskNumbers: { active: 4, newTask: 2, completed: 6, failed: 0 } },
  { id: 10, firstName: "Yash", email: "employee10@example.com", password: "123", taskNumbers: { active: 2, newTask: 1, completed: 5, failed: 1 } },
  { id: 11, firstName: "Ananya", email: "employee11@example.com", password: "123", taskNumbers: { active: 3, newTask: 2, completed: 7, failed: 0 } },
  { id: 12, firstName: "Priya", email: "employee12@example.com", password: "123", taskNumbers: { active: 1, newTask: 3, completed: 6, failed: 1 } },
  { id: 13, firstName: "Diya", email: "employee13@example.com", password: "123", taskNumbers: { active: 2, newTask: 1, completed: 8, failed: 0 } },
  { id: 14, firstName: "Kavya", email: "employee14@example.com", password: "123", taskNumbers: { active: 4, newTask: 2, completed: 5, failed: 1 } },
  { id: 15, firstName: "Sneha", email: "employee15@example.com", password: "123", taskNumbers: { active: 3, newTask: 1, completed: 4, failed: 0 } },
  { id: 16, firstName: "Meera", email: "employee16@example.com", password: "123", taskNumbers: { active: 2, newTask: 2, completed: 7, failed: 1 } },
  { id: 17, firstName: "Aisha", email: "employee17@example.com", password: "123", taskNumbers: { active: 1, newTask: 1, completed: 9, failed: 0 } },
  { id: 18, firstName: "Pooja", email: "employee18@example.com", password: "123", taskNumbers: { active: 3, newTask: 3, completed: 5, failed: 1 } },
  { id: 19, firstName: "Riya", email: "employee19@example.com", password: "123", taskNumbers: { active: 2, newTask: 2, completed: 6, failed: 0 } },
  { id: 20, firstName: "Nisha", email: "employee20@example.com", password: "123", taskNumbers: { active: 4, newTask: 1, completed: 4, failed: 2 } },
  { id: 21, firstName: "Neha", email: "employee21@example.com", password: "123", taskNumbers: { active: 2, newTask: 3, completed: 7, failed: 0 } },
  { id: 22, firstName: "Isha", email: "employee22@example.com", password: "123", taskNumbers: { active: 3, newTask: 1, completed: 6, failed: 1 } },
  { id: 23, firstName: "Shreya", email: "employee23@example.com", password: "123", taskNumbers: { active: 1, newTask: 2, completed: 8, failed: 0 } },
  { id: 24, firstName: "Tanvi", email: "employee24@example.com", password: "123", taskNumbers: { active: 3, newTask: 2, completed: 5, failed: 1 } },
  { id: 25, firstName: "Simran", email: "employee25@example.com", password: "123", taskNumbers: { active: 2, newTask: 1, completed: 7, failed: 0 } }
];

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
    
    ]
  }
]


const parseStorage = (key) => {
  const raw = localStorage.getItem(key)
  if (!raw || raw === 'undefined') {
    return null
  }
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const storedEmployees = parseStorage('employees')
  const storedAdmin = parseStorage('admin')

  if (!storedEmployees || !storedAdmin) {
    setLocalStorage()
    return { employees, admin }
  }

  return { employees: storedEmployees, admin: storedAdmin }
}
