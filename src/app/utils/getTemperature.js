export default function getTemperature(temp = 0, scale = "F") {
  temp = parseFloat(temp);
  temp = isNaN(temp) ? 0 : temp; 

  scale = scale !== "F" && scale !== "C" ? "F" : scale;

  if (scale === "C") {
    temp = parseFloat(Number((temp - 32) / 1.8).toFixed(2));
  }
  
  return {
    temp,
    formattedTemp: <span dangerouslySetInnerHTML={{ __html: `${temp}&deg;${scale}` }} />
  }
}
