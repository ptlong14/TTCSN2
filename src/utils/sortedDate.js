const monthStringToNumber = (month) => {
    const months = {
        "January": 0, "February": 1, "March": 2, "April": 3, "May": 4, "June": 5,
        "July": 6, "August": 7, "September": 8, "October": 9, "November": 10, "December": 11
    };
    return months[month];
};

export function sortCourses(courses) {
    const sortedCourses = [...courses].sort((a, b) => {
        const [monthA, yearA] = a.date.split(" ");
        const [monthB, yearB] = b.date.split(" ");
        if (yearA !== yearB) {
            return parseInt(yearB) - parseInt(yearA);
        } else {
            return monthStringToNumber(monthB) - monthStringToNumber(monthA); 
        }
    });

    return sortedCourses;
}
