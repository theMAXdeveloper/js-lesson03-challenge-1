var weekday = new Date().toLocaleString("en-US", { weekday: "long" });

// console.log(weekday);

if (weekday === "Monday") {
    console.log("Lets get this week started!")
} else if (weekday === "Tuesday") {
    console.log("It's not Monday, but it still sucks!")
} else if (weekday === "Wednesday") {
    console.log("Hump Daaayyy!")
} else if (weekday === "Thursday") {
    console.log("Celebrate! The week is coming to a close!")
} else if (weekday === "Friday") {
    console.log("FINALLY I can go home and not come back for a whole 2 days!")
} else {
    console.log("ITS THE WEEKEND TIME TO Fu...n")
}
