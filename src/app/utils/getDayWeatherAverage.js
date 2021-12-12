export default function getDayWeatherAverage(dayForecast = []) {
  const data = new Map();

  dayForecast.forEach((f) => {
    let date = new Date(f.date);
    let day = date.getDay();

    if (!data.has(day)) {
      data.set(day, {
        count: 0,
        totalForecast: { temperature: 0, date },
      });
    }

    let dayForecast = data.get(day);
    dayForecast.count++;
    dayForecast.totalForecast.temperature = dayForecast.totalForecast.temperature + f.temperature;
  });

  return [...data.values()]
    .map(({ count, totalForecast: { temperature, date } }) => {
    return {
      date,
      temperature: parseFloat(Number(temperature / count).toFixed(2)),
    };
  });
}