from django.contrib.auth.models import BaseUserManager
from .students import Student
from .parents import Parent
from .staff import StaffMember





 
class StudentManager(BaseUserManager):
 
    def create_student(self, first_name, last_name, email, qualification, university, password=None):
        if email is None:
            raise TypeError('Users must have an email address.')
        student = Student(first_name=first_name, last_name=last_name, 
                          email=self.normalize_email(email),
                          qualification=qualification, university=university)
        student.set_password(password)
        student.save()
        return student
 
 
class EmployeeManager(BaseUserManager):
 
    def create_employee(self, first_name, last_name, email, designation, company, password=None):
        if email is None:
            raise TypeError('Users must have an email address.')
        employee = Employee(first_name=first_name, last_name=last_name, 
                            email=self.normalize_email(email),
                            designation=designation, company=company)
        employee.set_password(password)
        employee.save()
        return employee