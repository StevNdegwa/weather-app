export default function getDayWeatherAverage(dayForecast = []) {
  const data = new Map();

  dayForecast.forEach((f) => {
    let date = new Date(f.date);
    let day = date.getDay();

    if (!data.has(day)) {
      data.set(day, {
        days: 0,
        totalForecast: { temperature: 0 },
      });
    }

    let dayForecast = data.get(day);

    dayForecast.days++;
    let temperature = dayForecast.totalForecast.temperature + f.temperature;

    dayForecast.totalForecast = {
      date,
      temperature,
    };
  });

  return [...data.values()]
    .map(({ days, totalForecast: { temperature, date } }) => {
    return {
      date,
      temperature: parseFloat(Number(temperature / days).toFixed(2)),
    };
  });
}