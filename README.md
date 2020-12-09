# Employee-Leave-Management-API
**Project functionality is described below**
...................
            --todo--

- [] Create multiple roles -admin, manager, employee
- [] Allow employees to create the leave application with leave application with leave start date, end date,
   description and total leaves available.
- [] Allow manager to view and approve the application
- [] Allow admin to view the complete transaction flow with each steps

            **Database**
- [] users
    id-employeeid-name-roles
- [] leaves
    id-userid(appliedby)-description-startdate-enddate-leavesavailable(20)-status(NA-APPROVED-DISAPPROVED)-userid(approvedby)
    
> *approvedby-> default value is: NA 
               -> updated value is: employeeid
               (value is updated once the manager clicks approve or disapprove)

            **routes**
'''
---------------------------------------------------------
            Route                       |    Access     |    
---------------------------------------------------------
- [X] "/homepage"                          |  All          |
- [X] "/homepage/SignUp"                   |  All          |
- [x] "/homepage/Login"                    |  All          |
- [x] "/employeeHomepage/applyLeave"       |  employee     |
- [x] "/employeeHomepage/myLeaves"         |  employee     |
- [] "/managerhomepage/reviewLeaves"      |  manager      |
- [] "/adminHomepage/reviewTransaction"   |  admin        |


        **view**
- [x] homepage
- [X]  -Signup FORM(employeeid, name, password, role)
- [x]  -Login FORM(employeeid, name, password)

- [x] employeeHomepage
- [x]    -applyLeave FORM(description, startdate, enddate)
- [x]    -myLeaves
'''
    (employee will be able to see all the leaves that he applied and their status)
        Schema
        | name | employeeid | description | startdate | enddate | leaves currently available | status
    
- [] managerhomepage
- [x]    (has access to leaves database)
- [x]    (display a table of all employess with status=NA)
- [x]        Schema
- [ ]        | name | employeeid | description | startdate | enddate | leaves currently available | leaves left if approved | Show all leaves(button) | Approve/Disapprove(button)

- [x]    -(a button to show all previously applied leaves of that employee, search database with this name and employeeid and display the table)
    -(once button is clicked leaves database is udated for approvedby)
    -(show a button to approve and disapprove)
- [X]    -(clicking the button will change the leave status in database)

- [] adminHomepage
    (show list of all leaves)
        Schema
        | name | employeeid | description | startdate | enddate | leaves currently available | status | Approved by(employeeid)
    -(add a button to view the user that applied and the manager that approved or disapproved)
