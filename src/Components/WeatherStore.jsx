import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function WeatherStore() {
  const [weatherinfo, setWeatherinfo] = useState(null);
  const [location, setLocation] = useState(null);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Get user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      });
    } else {
      console.log('Geolocation not supported');
    }
  }, []);

  // Fetch weather info
  useEffect(() => {
    if (location) {
      const { latitude, longitude } = location;
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4ba93f80698c17725bf07ea4255d1089&units=metric`)
        .then((res) => res.json())
        .then((data) => setWeatherinfo(data));
    }
  }, [location]);

  // Fetch all products
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  // Filter products based on weather
  useEffect(() => {
    if (weatherinfo && weatherinfo.weather) {
      const condition = weatherinfo.weather[0].main.toLowerCase();

      const filterLogic = (product) => {
        const title = product.title.toLowerCase();
        if (condition.includes('rain')) {
          return title.includes('jacket') || title.includes('coat') || title.includes('hoodie');
        } else if (condition.includes('clear')) {
          return title.includes('sunglass') || title.includes('t-shirt') || title.includes('shirt');
        } else if (condition.includes('cloud')) {
            console.log("dfghg")
          return title.includes('sweater') || title.includes('jacket');
        } else if (condition.includes('snow')) {

          return title.includes('coat') || title.includes('boots');
        } else {
          return true; // fallback: show all
        }
      };

      const filtered = products.filter(filterLogic);
      setFilteredProducts(filtered);
    }
  }, [weatherinfo, products]);

  return (
    <div className="container mt-4">
      <h3 className="mb-3">
        {
          weatherinfo?.main
            ? `Weather in ${weatherinfo.name}: ${Math.round(weatherinfo.main.temp)}°C, ${weatherinfo.weather[0].main}`
            : 'Loading weather...'
        }
      </h3>

      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card h-100">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: '200px', objectFit: 'contain' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description.slice(0, 50)}...</p>
                  <p className="card-text"><strong>${item.price}</strong></p>
                  <a href="#" className="btn btn-primary mt-auto">Buy Now</a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No products to display based on current weather.</p>
        )}
      </div>
    </div>
  );
}

export default WeatherStore;
