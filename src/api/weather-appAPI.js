
/*const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = '25c6e01f14f2fefde4a149afe3eed49c';

// Function to make a GET request to fetch weather data by city
export const getWeatherByCity = async (city, apiKey) => {
  try {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${apiKey}`);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export const postExample = async (data) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to post data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};


export const putExample = async (id, data) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to update data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
};
*/
