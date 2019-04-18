using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FinalizingCheck.Models;

namespace FinalizingCheck.Controllers
{
    public class EmployeeController : ApiController
    {
            public IEnumerable<Employee> Get()
            {
            using(EmployeeDBContext entities = new EmployeeDBContext())
            {
                return entities.Employees.ToList();
            }
            
            }

            public HttpResponseMessage GetByID(int Id)
            {
                using (EmployeeDBContext entities = new EmployeeDBContext())
                {
                    var entitiy = entities.Employees.FirstOrDefault(e => e.Id == Id);
                    if (entitiy != null)
                    {
                        return Request.CreateResponse(HttpStatusCode.OK, entitiy);
                    }
                    else
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Employee with the Id number you inserted does not exist");
                    }
                }
            }

            public HttpResponseMessage post([FromBody] Employee employee)
            {
                try
                {
                    using (EmployeeDBContext entities = new EmployeeDBContext())
                    {
                        entities.Employees.Add(employee);
                        entities.SaveChanges();

                        var message = Request.CreateResponse(HttpStatusCode.Created, employee);
                        message.Headers.Location = new Uri(Request.RequestUri + employee.Id.ToString());
                        return message;
                    }
                }
                catch (Exception ex)
                {

                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
                }

            }
            
           // [HttpDelete]
            public HttpResponseMessage Delete(int id)
            {
                using (EmployeeDBContext entities = new EmployeeDBContext())
                {
                    try
                    {
                        var entity = entities.Employees.FirstOrDefault(e => e.Id == id);
                        if (entity == null)
                        {
                            return Request.CreateErrorResponse(HttpStatusCode.NotFound, "The Employee with Id number " + id.ToString() + " not found to be Deleted!!");
                        }
                        else
                        {
                            entities.Employees.Remove(entity);
                            entities.SaveChanges();
                            return Request.CreateResponse(HttpStatusCode.OK);
                        }
                    }
                    catch (Exception er)
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.NotFound, er);
                    }

                }
            }

            public HttpResponseMessage Put(int id, [FromBody] Employee employee)
            {
                using (EmployeeDBContext entities = new EmployeeDBContext())
                {
                    try
                    {
                        var entity = entities.Employees.FirstOrDefault(e => e.Id == id);

                        if (entity == null)
                        {
                            return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Employee with id " + id.ToString() + " not found to update!!");
                        }
                        else
                        {
                            entity.FirstName = employee.FirstName;
                            entity.LastName = employee.LastName;
                            entity.Gender = employee.Gender;
                            entity.Salary = employee.Salary;

                            entities.SaveChanges();

                            return Request.CreateResponse(HttpStatusCode.OK);
                        }
                    }
                    catch (Exception ex)
                    {

                        return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
                    }

                }
            }

    }
}
