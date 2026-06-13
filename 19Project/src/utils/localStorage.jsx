const employees = [
  {
    id: 1,
    firstname: "Aarav",
    email: "employee1@example.com",
    pass: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Sales Report",
        taskDescription: "Compile monthly sales data and generate report.",
        taskDate: "2025-08-12",
        category: "Reports",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Attend meeting with client regarding project updates.",
        taskDate: "2025-08-13",
        category: "Meeting",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update CRM",
        taskDescription: "Add latest customer information to CRM.",
        taskDate: "2025-08-10",
        category: "Admin",
      },
    ],
  },

  {
    id: 2,
    firstname: "Vivaan",
    email: "employee2@example.com",
    pass: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription: "Create new homepage UI mockups.",
        taskDate: "2025-08-12",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Logo Revision",
        taskDescription: "Update logo based on client feedback.",
        taskDate: "2025-08-08",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Banner Design",
        taskDescription: "Create marketing banner for campaign.",
        taskDate: "2025-08-09",
        category: "Marketing",
      },
    ],
  },

  {
    id: 3,
    firstname: "Aditya",
    email: "employee3@example.com",
    pass: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "API Development",
        taskDescription: "Build authentication API endpoints.",
        taskDate: "2025-08-14",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Bug Fixing",
        taskDescription: "Resolve login page issues.",
        taskDate: "2025-08-12",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Create weekly database backup.",
        taskDate: "2025-08-11",
        category: "Database",
      },
    ],
  },

  {
    id: 4,
    firstname: "Krishna",
    email: "employee4@example.com",
    pass: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Content Writing",
        taskDescription: "Write blog post for company website.",
        taskDate: "2025-08-13",
        category: "Content",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "SEO Audit",
        taskDescription: "Review SEO performance metrics.",
        taskDate: "2025-08-09",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Newsletter Draft",
        taskDescription: "Prepare monthly newsletter draft.",
        taskDate: "2025-08-10",
        category: "Content",
      },
    ],
  },

  {
    id: 5,
    firstname: "Arjun",
    email: "employee5@example.com",
    pass: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Server Monitoring",
        taskDescription: "Check server health and uptime.",
        taskDate: "2025-08-12",
        category: "IT",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Security Audit",
        taskDescription: "Review security logs and alerts.",
        taskDate: "2025-08-15",
        category: "Security",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Software Update",
        taskDescription: "Update company software packages.",
        taskDate: "2025-08-08",
        category: "IT",
      },
    ],
  },
];


const Admin = [
  {
    id: 100,
    firstname:"AdminSir",
    email: "admin@example.com",
    pass: "123",
  },
];

export const setLocalStorage = ()=>{
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(Admin))
}
export const getLocalStorage =()=>{
    let storedEmployees = JSON.parse(localStorage.getItem("employees"));
    let storedAdmin = JSON.parse(localStorage.getItem("admin"))

    if(!storedEmployees || !storedAdmin){
        setLocalStorage()
        storedEmployees = employees
        storedAdmin = Admin
    }

return {employees: storedEmployees,admin: storedAdmin}
}
