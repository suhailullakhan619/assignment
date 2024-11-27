import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
  

function RentalDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const selectedCar = mockCars.find(car => car.id === parseInt(id));
    setCar(selectedCar);
  }, [id]);

  if (!car) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">{car.name}</h2>
      <img src={car.image} alt={car.name} className="w-full h-64 object-cover mb-4"/>
      <p>{car.description}</p>
      <p className="text-xl font-bold mt-4">${car.price}/day</p>
      <div className="mt-4">
        <button className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600">
          Rent Now
        </button>
      </div>
    </div>
  );
}

export default RentalDetails;
