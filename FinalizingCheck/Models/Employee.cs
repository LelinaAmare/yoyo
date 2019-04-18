using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace FinalizingCheck.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public Decimal Salary { get; set; }
    }

    public class EmployeeDBContext: DbContext{
        public DbSet<Employee> Employees { get; set; }
    }
}