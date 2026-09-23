//Group Objects by Property Given an array of employee objects, group the employees based on their department.
function groupByDepartment(employees) {
    return employees.reduce((result, employee) => {
        const department = employee.department;
        if (!result[department]) {
            result[department] = [];
        }
        result[department].push(employee);
        return result;
    }, {});
}

const employees = [
    { name: 'Alice', department: 'HR' },
    { name: 'Bob', department: 'Engineering' },
    { name: 'Charlie', department: 'HR' },
    { name: 'David', department: 'Engineering' },
    { name: 'Eve', department: 'Sales' }
];

const groupedEmployees = groupByDepartment(employees);
console.log(groupedEmployees);

