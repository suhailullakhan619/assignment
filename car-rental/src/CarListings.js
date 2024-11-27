import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Mock data for cars
const mockCars = [
    {
      id: 1,
      name: 'Toyota Corolla',
      description: 'A compact car with great fuel efficiency.',
      price: 50,
      image: 'https://www.shutterstock.com/shutterstock/photos/2376582001/display_1500/stock-photo-austria-new-toyota-corolla-cross-hybrid-of-japanese-brand-on-the-road-in-mountains-2376582001.jpg'
    },
    {
      id: 2,
      name: 'Ford Mustang',
      description: 'A classic American sports car.',
      price: 120,
      image: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      name: 'Tesla Model 3',
      description: 'A modern electric vehicle with advanced features.',
      price: 150,
      image: 'https://as2.ftcdn.net/v2/jpg/09/10/89/63/1000_F_910896391_YI1R4LkJykLLBRGrCBKFCcBecHaSlmJb.jpg'
    },
    {
      id: 4,
      name: 'Honda Civic',
      description: 'A reliable and affordable compact car.',
      price: 60,
      image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148156.jpeg?q=80'
    },
    {
      id: 5,
      name: 'Chevrolet Camaro',
      description: 'A muscle car with powerful performance.',
      price: 180,
      image: 'https://hips.hearstapps.com/hmg-prod/images/2024-chevrolet-camaro-ss-collectors-edition-1-647e1933c6c20.jpg?crop=0.827xw:0.853xh;0.0946xw,0.129xh&resize=1200:*'
    },
    {
      id: 6,
      name: 'BMW X5',
      description: 'A luxury SUV with top-tier features.',
      price: 200,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfS-XGV8HSMNbQkpG1sszSd3qu2-QaYe3Iig&s'
    }
  ];
  

function CarListings({ searchQuery }) {
  const [cars, setCars] = useState([]);
  
  useEffect(() => {
    setCars(mockCars); // Initially set the mock data
  }, []);

  // Filter cars based on the search query
  const filteredCars = cars.filter(car => 
    car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    car.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Available Cars</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCars.map((car) => (
          <div key={car.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={car.image} alt={car.name} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{car.name}</h3>
              <p>{car.description}</p>
              <p className="text-xl font-bold">${car.price}/day</p>
              <Link to={`/rental/${car.id}`} className="text-blue-500 hover:underline">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarListings;
