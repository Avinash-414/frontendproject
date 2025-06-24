import React, { useEffect, useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
import WeatherStore from './WeatherStore';

function Store() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  const filteredProducts = products.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Store</h2>
      
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div>
         <WeatherStore/>
      </div>
      <h3>products You like....</h3>

      <div className="row">
        {filteredProducts.map((item) => (
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
        ))}

        {filteredProducts.length === 0 && (
          <div className="col-12">
            <p className="text-center">No products found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Store;
