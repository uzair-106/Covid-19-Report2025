import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './Dashboard.css';
import images from './assets/images.jpg'; // Adjust the path as necessary

const Dashboard = () => {
  const [globalData, setGlobalData] = useState({});
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async (country = 'all') => {
    setLoading(true);
    const url =
      country === 'all'
        ? 'https://disease.sh/v3/covid-19/all'
        : `https://disease.sh/v3/covid-19/countries/${country}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setGlobalData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    fetch('https://disease.sh/v3/covid-19/countries')
      .then(res => res.json())
      .then(data => {
        setCountries(data);
        setFilteredCountries(data);
      });
  }, []);

  const handleCountryChange = e => {
    const country = e.target.value;
    setSelectedCountry(country);
    fetchData(country);
  };

  const handleSearch = e => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = countries.filter(c =>
      c.country.toLowerCase().includes(term)
    );
    setFilteredCountries(filtered);
  };

  const total = globalData.cases + globalData.deaths + globalData.recovered || 0;
  const getPercentage = (value) => ((value / total) * 100).toFixed(2);

  const chartData = {
    labels: [
      `Cases (${getPercentage(globalData.cases)}%)`,
      `Deaths (${getPercentage(globalData.deaths)}%)`,
      `Recovered (${getPercentage(globalData.recovered)}%)`
    ],
    datasets: [
      {
        label: 'COVID-19 Stats',
        data: [
          globalData.cases || 0,
          globalData.deaths || 0,
          globalData.recovered || 0,
        ],
        backgroundColor: ['#1e88e5', '#e4ddddff', '#43a047'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard-container ">
      <div className="header">
        
        <h1>COVID‑19 Data Visualization </h1>
        <div className="controls ">
          {/* <input
            type="text"
            placeholder="Search country..."
            value={searchTerm}
            onChange={handleSearch}
          /> */}
          <div>
          <select value={selectedCountry} onChange={handleCountryChange}>
            <option value="all">🌍 select country</option>
            {filteredCountries.map(country => (
              <option key={country.country} value={country.country}>
                {country.country}
              </option>
            ))}
          </select>
          </div>
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="main-content m-20">
          <div className="chart-area">
            <Pie data={chartData} />
          </div>
          <div className="stats-box">
            <h3>📊 Statistics</h3>
            <p><strong>Country:</strong> {selectedCountry === 'all' ? 'Global' : globalData.country}</p>
            <p><span className="dot blue"></span> <strong>Cases:</strong> {globalData.cases?.toLocaleString()} ({getPercentage(globalData.cases)}%)</p>
            <p><span className="dot red"></span> <strong>Deaths:</strong> {globalData.deaths?.toLocaleString()} ({getPercentage(globalData.deaths)}%)</p>
            <p><span className="dot green"></span> <strong>Recovered:</strong> {globalData.recovered?.toLocaleString()} ({getPercentage(globalData.recovered)}%)</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
