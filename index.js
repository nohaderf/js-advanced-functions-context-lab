/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
function createEmployeeRecord(array){
    const employee = {firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
    }
    return employee
}

function createEmployeeRecords(employeeData){
    return employeeData.map(function(array){
         return createEmployeeRecord(array)
     })
 }
 
 function createTimeInEvent(dateStamp){
     let [date, hour] = dateStamp.split(" ")
     this.timeInEvents.push({
         type: "TimeIn",
         date,
         hour: parseInt(hour, 10),
     })
     return this
 }

 function createTimeOutEvent(dateStamp){
    let [date, hour] = dateStamp.split(" ")
    this.timeOutEvents.push({
        type: "TimeOut",
        date,
        hour: parseInt(hour, 10)
    })
    return this
}

 function hoursWorkedOnDate(date){
    let timeIn = this.timeInEvents.find(function(matchDate){
        return matchDate.date === date
    })

    let timeOut = this.timeOutEvents.find(function(matchDate){
        return matchDate.date === date
    })

    return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(date){
    let wage = hoursWorkedOnDate.call(this, date) * this.payPerHour
    return parseFloat(wage.toString())
}


let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function calculatePayroll(employeeArray){
    return employeeArray.reduce(function(string, record){
        return string + allWagesFor.call(record)
    }, 0)
}

function findEmployeeByFirstName(employeesArray, firstName){
    return employeesArray.find(function(record){
        return record.firstName === firstName
    })
}