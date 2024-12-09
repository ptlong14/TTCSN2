const parseData = (data) => {
    if (!data) return [];
    return data.split(";").map((chapter) => {
        const [chapterName, lecturesData] = chapter.split("||").map((s) => s.trim());
        const lectures = lecturesData
            ?.split("|")
            .map((lecture) => {
                const [title, time] = lecture.split(",").map((s) => s.trim());
                return { title, time };
            }) || [];
        return { chapterName, lectures };
    });
};

const calculateTotalTime = (lectures) => {
    return lectures.reduce((total, lecture) => {
        const timeInMinutes = parseFloat(lecture.time);
        return total + timeInMinutes;
    }, 0);
};
export { parseData, calculateTotalTime };
