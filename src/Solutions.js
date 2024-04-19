import React, { useState } from 'react';
import Navbar from './Navbar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Solutions.css';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import californiaCounties from './rewound-geojson.json';


const Solutions = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('12:00 PM');

  const handleDateChange = newDate => {
    setDate(newDate);
  };
  const handleTimeChange = event => {
    setTime(event.target.value);
  };

  // Function to determine color based on temperature
  const getColor = temp => {
    return temp > 95 ? '#800026' :
           temp > 85 ? '#BD0026' :
           temp > 75 ? '#E31A1C' :
           temp > 65 ? '#FC4E2A' :
           temp > 55 ? '#FD8D3C' :
           temp > 45 ? '#FEB24C' :
           temp > 35 ? '#FED976' :
                       '#FFEDA0';
  };
  

  // Style function using temperature
  const style = feature => {
    return {
      fillColor: getColor(feature.properties.temperature),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  };

  // Event handlers for hover and focus
  const onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: e => {
        var layer = e.target;
        layer.setStyle({
          weight: 5,
          color: '#666',
          fillOpacity: 0.9
        });
      },
      mouseout: e => {
        e.target.setStyle(style(e.target.feature));
      }
    });
  };


  return (
    <div>
      <Navbar />
      <div className="solutions-container">
        <div className="header-container">
          <div className="header-title">Heat Risk Forecasting</div>
          <p className="header-last-update">Last Update — 8:00am February 23, 2024</p>
        </div>
        <hr className="header-divider" />
        <div className="interactive-section">
          <div className="calendar-container">
            <Calendar onChange={handleDateChange} value={date} />
            <div className="time-selector">
              <select value={time} onChange={handleTimeChange}>
                {[...Array(24)].map((_, index) => (
                  <option key={index} value={`${index % 12 || 12}:00 ${index < 12 ? 'AM' : 'PM'}`}>
                    {`${index % 12 || 12}:00 ${index < 12 ? 'AM' : 'PM'}`}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="temperature-timeline">
            {[...Array(24)].map((_, index) => (
              <div key={index} className="hour-temp">
                <span className="hour">{`${index}:00 am`}</span>
                <span className="temp">0°C</span> {/* Assuming temperature is 0 */}
              </div>
            ))}
          </div>
          <div className="model-image">
            <MapContainer center={[36.7783, -119.4179]} zoom={6} style={{ height: '400px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <GeoJSON
              data={californiaCounties}
              style={style}
              onEachFeature={onEachFeature}
            />
          </MapContainer>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;