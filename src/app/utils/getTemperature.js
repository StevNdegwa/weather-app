export default function getTemperature(temp = 0, scale = "F") {
  if (scale === "C") {
    temp = parseFloat(Number((temp - 32) / 1.8).toFixed(2));
  }
  
  return {
    temp,
    formattedTemp: <span dangerouslySetInnerHTML={{ __html: `${temp}&deg;${scale}` }} />
  }
}
