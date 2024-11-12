const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Complete project report",
        date: "2024-11-12",
        category: "Work",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Review team presentation",
        date: "2024-11-13",
        category: "Meeting",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Submit timesheet",
        date: "2024-11-10",
        category: "Administrative",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      }
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Finalize client proposal",
        date: "2024-11-12",
        category: "Work",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Update website content",
        date: "2024-11-14",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Complete training module",
        date: "2024-11-09",
        category: "Training",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      }
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Prepare marketing campaign",
        date: "2024-11-12",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Organize team meeting",
        date: "2024-11-14",
        category: "Meeting",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Update CRM system",
        date: "2024-11-11",
        category: "Admin",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      }
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Client follow-up call",
        date: "2024-11-12",
        category: "Customer Support",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Audit internal reports",
        date: "2024-11-14",
        category: "Finance",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Resolve technical issue",
        date: "2024-11-10",
        category: "Technical",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      }
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Prepare sales report",
        date: "2024-11-13",
        category: "Sales",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Test new product feature",
        date: "2024-11-14",
        category: "Product Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Complete client feedback survey",
        date: "2024-11-09",
        category: "Customer Feedback",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      }
    ],
  }
];

const admin = {
  admin: {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
};

export const emsSetLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees))
  localStorage.setItem("admin", JSON.stringify(admin))
}
export const emsGetLocalStorage = () => {
  const emsEmployees = JSON.parse(localStorage.getItem("employees"))
  const emsAdmin = JSON.parse(localStorage.getItem("admin"))
  console.log(emsEmployees, emsAdmin)
}