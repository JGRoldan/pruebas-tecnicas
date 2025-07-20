import fs from 'fs'
import csv from 'csv-parser'

let employees = []

export function loadCSVData() {
    return new Promise((resolve, reject) => {
        const results = []
        fs.createReadStream('./employees.csv')
            .pipe(csv())
            .on('data', ({ id, name, department, salary }) => results.push({
                id: Number(id),
                name,
                department,
                salary: Number(salary)
            }))
            .on('end', () => {
                employees = results
                resolve(employees)
            })
            .on('error', reject)
    })
}

export function getAllEmployees() {
    return employees
}

export function getStats() {
    const stats = employees.reduce(
        (acc, e) => {
            acc.total += 1
            acc.salarySum += e.salary

            // Cantidad de empleados por departamento
            acc.employeesByDepartment[e.department] = (acc.employeesByDepartment[e.department] || 0) + 1

            // Acumulación de salarios por departamento
            if (!acc.departmentSalaries[e.department]) {
                acc.departmentSalaries[e.department] = { totalSalary: 0, employees: 0 }
            }
            acc.departmentSalaries[e.department].totalSalary += e.salary
            acc.departmentSalaries[e.department].employees += 1

            return acc
        },
        {
            total: 0,
            salarySum: 0,
            employeesByDepartment: {},
            departmentSalaries: {}
        }
    )

    // Salario promedio total
    const averageSalary =
        stats.total === 0 ? 0 : stats.salarySum / stats.total

    // Promedio por departamento
    const averageSalaryDepartment = Object.fromEntries(
        Object.entries(stats.departmentSalaries).map(([dept, info]) => [
            dept,
            info.totalSalary / info.employees
        ])
    )

    return {
        total: stats.total,
        averageSalary,
        employeesByDepartment: stats.employeesByDepartment,
        averageSalaryDepartment
    }
}
