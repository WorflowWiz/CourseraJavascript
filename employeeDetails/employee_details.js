const employees = [
  { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
  { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
  { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
  // ... More employee records can be added here
];

// Function to display all employees
function displayAllEmployees() {
  const totalEmployees = employees
    .map(employee => 
      `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    )
    .join('');
  const employeesDetailsElement = document.getElementById('employeesDetails');
  if (employeesDetailsElement) {
    employeesDetailsElement.innerHTML = totalEmployees;
  }
}

// Function to calculate total salaries
function calculateTotalSalaries() {
  const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
  alert(`Total Salaries: $${totalSalaries}`);
}

// Function to display HR employees
function displayHREmployees() {
  const hrEmployees = employees.filter(employee => employee.department === 'HR');
  const hrEmployeesDisplay = hrEmployees
    .map(employee => 
      `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    )
    .join('');
  const employeesDetailsElement = document.getElementById('employeesDetails');
  if (employeesDetailsElement) {
    employeesDetailsElement.innerHTML = hrEmployeesDisplay;
  }
}

// Function to find an employee by ID
function findEmployeeById(employeeId) {
  const foundEmployee = employees.find(employee => employee.id == employeeId);
  const employeesDetailsElement = document.getElementById('employeesDetails');
  if (employeesDetailsElement) {
    if (foundEmployee) {
      employeesDetailsElement.innerHTML = 
        `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    } else {
      employeesDetailsElement.innerHTML = 'No employee has been found with this ID';
    }
  }
}
