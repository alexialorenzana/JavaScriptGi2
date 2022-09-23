const Date = parseInt(prompt("Enter your Number"));

function month(Date){
    if (Date === 1) {
        alert("January")
    } else if (Date === 2) {
        alert("February")
    } else if (Date === 3) {
        alert("March")
    } else if (Date === 4) {
        alert("April")
    } else if (Date === 5) {
        alert("May")
    } else if (Date === 6) {
        alert("June")
    } else if (Date === 7) {
        alert("July")
    } else if (Date === 8) {
        alert("August")
    } else if (Date === 9) {
        alert("September")
    } else if (Date === 10) {
        alert("October")
    } else if (Date === 11) {
        alert("November")
    } else if (Date === 12) {
        alert("December")
    } else {
        alert("Invalid month")
    }

}
month(Date);