const API_KEY = "afbba6c2a5506d4d663f0ee8fd25ada775b39885";
const HTTPS_API = "https://calendarific.com/api/v2/holidays";

const calendarAPI = params =>
  fetch(`${HTTPS_API}/?api_key=${API_KEY}${params}`, {
    method: "GET"
  });

const getHolidayList = (county, year) =>
  calendarAPI(`&country=${county}&year=${year}`);

export default { getHolidayList };
