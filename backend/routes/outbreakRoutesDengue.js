const express = require('express');
const router = express.Router();

// Sample outbreak data for different diseases
const outbreaks = [
    {
      location: "United States",
      lat: 37.0902,
      lng: -95.7129,
      disease: "Flu",
      cases: 123456,
      active_cases: 23456,
      recovered: 98000,
      deaths: 3000
    },
    {
      location: "United Kingdom",
      lat: 55.3781,
      lng: -3.4360,
      disease: "Flu",
      cases: 78900,
      active_cases: 12000,
      recovered: 64000,
      deaths: 1900
    },
    {
      location: "France",
      lat: 46.6034,
      lng: 1.8883,
      disease: "Flu",
      cases: 5400,
      active_cases: 1300,
      recovered: 3900,
      deaths: 200
    },
    {
      location: "Japan",
      lat: 36.2048,
      lng: 138.2529,
      disease: "Flu",
      cases: 98000,
      active_cases: 14000,
      recovered: 81000,
      deaths: 3000
    },
    {
      location: "Australia",
      lat: -25.2744,
      lng: 133.7751,
      disease: "Flu",
      cases: 67000,
      active_cases: 11000,
      recovered: 54000,
      deaths: 2000
    },
    {
      location: "Germany",
      lat: 51.1657,
      lng: 10.4515,
      disease: "Flu",
      cases: 32000,
      active_cases: 4500,
      recovered: 27000,
      deaths: 500
    },
    {
      location: "Russia",
      lat: 61.5240,
      lng: 105.3188,
      disease: "Flu",
      cases: 60000,
      active_cases: 9000,
      recovered: 49000,
      deaths: 2000
    },
    {
      location: "Egypt",
      lat: 26.8206,
      lng: 30.8025,
      disease: "Flu",
      cases: 51000,
      active_cases: 8000,
      recovered: 40000,
      deaths: 3000
    },
    {
      location: "Brazil",
      lat: -14.2350,
      lng: -51.9253,
      disease: "Flu",
      cases: 87000,
      active_cases: 15000,
      recovered: 69000,
      deaths: 3000
    },
    {
      location: "Mexico",
      lat: 23.6345,
      lng: -102.5528,
      disease: "Flu",
      cases: 71000,
      active_cases: 12000,
      recovered: 57000,
      deaths: 2000
    },
    {
      location: "Canada",
      lat: 56.1304,
      lng: -106.3468,
      disease: "Flu",
      cases: 64000,
      active_cases: 10000,
      recovered: 52000,
      deaths: 2000
    },
    {
      location: "China",
      lat: 35.8617,
      lng: 104.1954,
      disease: "Flu",
      cases: 90000,
      active_cases: 16000,
      recovered: 71000,
      deaths: 3000
    },
    {
      location: "India",
      lat: 20.5937,
      lng: 78.9629,
      disease: "Flu",
      cases: 103000,
      active_cases: 17000,
      recovered: 82000,
      deaths: 4000
    },
    {
      location: "Argentina",
      lat: -38.4161,
      lng: -63.6167,
      disease: "Flu",
      cases: 56000,
      active_cases: 9000,
      recovered: 44000,
      deaths: 3000
    },
    {
      location: "South Africa",
      lat: -30.5595,
      lng: 22.9375,
      disease: "Flu",
      cases: 47000,
      active_cases: 8000,
      recovered: 36000,
      deaths: 3000
    },
    {
      location: "Indonesia",
      lat: -0.7893,
      lng: 113.9213,
      disease: "Flu",
      cases: 94000,
      active_cases: 15000,
      recovered: 75000,
      deaths: 4000
    },
    {
      location: "South Korea",
      lat: 35.9078,
      lng: 127.7669,
      disease: "Flu",
      cases: 82000,
      active_cases: 14000,
      recovered: 65000,
      deaths: 3000
    },
    {
      location: "Spain",
      lat: 40.4637,
      lng: -3.7492,
      disease: "Flu",
      cases: 41000,
      active_cases: 6500,
      recovered: 33000,
      deaths: 1500
    },
    {
      location: "Thailand",
      lat: 15.8700,
      lng: 100.9925,
      disease: "Flu",
      cases: 76000,
      active_cases: 12500,
      recovered: 61000,
      deaths: 2500
    },
    {
      location: "Kenya",
      lat: -0.0236,
      lng: 37.9062,
      disease: "Flu",
      cases: 38000,
      active_cases: 5000,
      recovered: 30000,
      deaths: 3000
    },
    {
      location: "Nigeria",
      lat: 9.0820,
      lng: 8.6753,
      disease: "Flu",
      cases: 53000,
      active_cases: 7500,
      recovered: 43000,
      deaths: 2500
    },
    {
      location: "Malaysia",
      lat: 4.2105,
      lng: 101.9758,
      disease: "Flu",
      cases: 62000,
      active_cases: 9000,
      recovered: 50000,
      deaths: 3000
    },
    {
      location: "Peru",
      lat: -9.189967,
      lng: -75.015152,
      disease: "Flu",
      cases: 55000,
      active_cases: 8000,
      recovered: 43000,
      deaths: 2000
    },
    {
      location: "Italy",
      lat: 41.8719,
      lng: 12.5674,
      disease: "Flu",
      cases: 35000,
      active_cases: 6000,
      recovered: 28000,
      deaths: 1000
    },
    {
      location: "Chile",
      lat: -35.6751,
      lng: -71.5430,
      disease: "Flu",
      cases: 49000,
      active_cases: 7000,
      recovered: 40000,
      deaths: 2000
    },
    {
      location: "Turkey",
      lat: 38.9637,
      lng: 35.2433,
      disease: "Flu",
      cases: 68000,
      active_cases: 11000,
      recovered: 54000,
      deaths: 3000
    },
    {
      location: "Vietnam",
      lat: 14.0583,
      lng: 108.2772,
      disease: "Flu",
      cases: 58000,
      active_cases: 10000,
      recovered: 46000,
      deaths: 2000
    },
    {
      location: "Iran",
      lat: 32.4279,
      lng: 53.6880,
      disease: "Flu",
      cases: 72000,
      active_cases: 12500,
      recovered: 57000,
      deaths: 2500
    },
    {
      location: "Venezuela",
      lat: 6.4238,
      lng: -66.5897,
      disease: "Flu",
      cases: 45000,
      active_cases: 7000,
      recovered: 35000,
      deaths: 3000
    },
    {
      location: "Bangladesh",
      lat: 23.6850,
      lng: 90.3563,
      disease: "Flu",
      cases: 110000,
      active_cases: 18000,
      recovered: 89000,
      deaths: 3000
    },
    {
      location: "United Arab Emirates",
      lat: 23.4241,
      lng: 53.8478,
      disease: "Flu",
      cases: 62000,
      active_cases: 9000,
      recovered: 50000,
      deaths: 3000
    },
    {
      location: "Greece",
      lat: 39.0742,
      lng: 21.8243,
      disease: "Flu",
      cases: 29000,
      active_cases: 4500,
      recovered: 23000,
      deaths: 500
    },
    {
      location: "Poland",
      lat: 51.9194,
      lng: 19.1451,
      disease: "Flu",
      cases: 35000,
      active_cases: 5000,
      recovered: 29000,
      deaths: 1000
    },
    {
      location: "Finland",
      lat: 61.9241,
      lng: 25.7482,
      disease: "Flu",
      cases: 24000,
      active_cases: 3800,
      recovered: 20000,
      deaths: 200
    },

    {
    location: "United States",
    lat: 37.0902,
    lng: -95.7129,
    disease: "Flu",
    cases: 123456,
    active_cases: 23456,
    recovered: 98000,
    deaths: 3000
  },
  {
    location: "United Kingdom",
    lat: 55.3781,
    lng: -3.4360,
    disease: "Flu",
    cases: 78900,
    active_cases: 12000,
    recovered: 64000,
    deaths: 1900
  },
  {
    location: "France",
    lat: 46.6034,
    lng: 1.8883,
    disease: "Flu",
    cases: 5400,
    active_cases: 1300,
    recovered: 3900,
    deaths: 200
  },
  {
    location: "Japan",
    lat: 36.2048,
    lng: 138.2529,
    disease: "Flu",
    cases: 98000,
    active_cases: 14000,
    recovered: 81000,
    deaths: 3000
  },
  {
    location: "Australia",
    lat: -25.2744,
    lng: 133.7751,
    disease: "Flu",
    cases: 67000,
    active_cases: 11000,
    recovered: 54000,
    deaths: 2000
  },
  {
    location: "Germany",
    lat: 51.1657,
    lng: 10.4515,
    disease: "Flu",
    cases: 32000,
    active_cases: 4500,
    recovered: 27000,
    deaths: 500
  },
  {
    location: "Russia",
    lat: 61.5240,
    lng: 105.3188,
    disease: "Flu",
    cases: 60000,
    active_cases: 9000,
    recovered: 49000,
    deaths: 2000
  },
  {
    location: "Egypt",
    lat: 26.8206,
    lng: 30.8025,
    disease: "Flu",
    cases: 51000,
    active_cases: 8000,
    recovered: 40000,
    deaths: 3000
  },
  {
    location: "Brazil",
    lat: -14.2350,
    lng: -51.9253,
    disease: "Flu",
    cases: 87000,
    active_cases: 15000,
    recovered: 69000,
    deaths: 3000
  },
  {
    location: "Mexico",
    lat: 23.6345,
    lng: -102.5528,
    disease: "Flu",
    cases: 71000,
    active_cases: 12000,
    recovered: 57000,
    deaths: 2000
  },
  {
    location: "Canada",
    lat: 56.1304,
    lng: -106.3468,
    disease: "Flu",
    cases: 64000,
    active_cases: 10000,
    recovered: 52000,
    deaths: 2000
  },
  {
    location: "China",
    lat: 35.8617,
    lng: 104.1954,
    disease: "Flu",
    cases: 90000,
    active_cases: 16000,
    recovered: 71000,
    deaths: 3000
  },
  {
    location: "India",
    lat: 20.5937,
    lng: 78.9629,
    disease: "Flu",
    cases: 103000,
    active_cases: 17000,
    recovered: 82000,
    deaths: 4000
  },
  {
    location: "Argentina",
    lat: -38.4161,
    lng: -63.6167,
    disease: "Flu",
    cases: 56000,
    active_cases: 9000,
    recovered: 44000,
    deaths: 3000
  },
  {
    location: "South Africa",
    lat: -30.5595,
    lng: 22.9375,
    disease: "Flu",
    cases: 47000,
    active_cases: 8000,
    recovered: 36000,
    deaths: 3000
  },
  {
    location: "Indonesia",
    lat: -0.7893,
    lng: 113.9213,
    disease: "Flu",
    cases: 94000,
    active_cases: 15000,
    recovered: 75000,
    deaths: 4000
  },
  {
    location: "South Korea",
    lat: 35.9078,
    lng: 127.7669,
    disease: "Flu",
    cases: 82000,
    active_cases: 14000,
    recovered: 65000,
    deaths: 3000
  },
  {
    location: "Spain",
    lat: 40.4637,
    lng: -3.7492,
    disease: "Flu",
    cases: 41000,
    active_cases: 6500,
    recovered: 33000,
    deaths: 1500
  },
  {
    location: "Thailand",
    lat: 15.8700,
    lng: 100.9925,
    disease: "Flu",
    cases: 76000,
    active_cases: 12500,
    recovered: 61000,
    deaths: 2500
  },
  {
    location: "Kenya",
    lat: -0.0236,
    lng: 37.9062,
    disease: "Flu",
    cases: 38000,
    active_cases: 5000,
    recovered: 30000,
    deaths: 3000
  },
  {
    location: "Nigeria",
    lat: 9.0820,
    lng: 8.6753,
    disease: "Flu",
    cases: 53000,
    active_cases: 7500,
    recovered: 43000,
    deaths: 2500
  },
  {
    location: "Malaysia",
    lat: 4.2105,
    lng: 101.9758,
    disease: "Flu",
    cases: 62000,
    active_cases: 9000,
    recovered: 50000,
    deaths: 3000
  },
  {
    location: "Peru",
    lat: -9.189967,
    lng: -75.015152,
    disease: "Flu",
    cases: 55000,
    active_cases: 8000,
    recovered: 43000,
    deaths: 2000
  },
  {
    location: "Italy",
    lat: 41.8719,
    lng: 12.5674,
    disease: "Flu",
    cases: 35000,
    active_cases: 6000,
    recovered: 28000,
    deaths: 1000
  },
  {
    location: "Chile",
    lat: -35.6751,
    lng: -71.5430,
    disease: "Flu",
    cases: 49000,
    active_cases: 7000,
    recovered: 40000,
    deaths: 2000
  },
  {
    location: "Turkey",
    lat: 38.9637,
    lng: 35.2433,
    disease: "Flu",
    cases: 68000,
    active_cases: 11000,
    recovered: 54000,
    deaths: 3000
  },
  {
    location: "Vietnam",
    lat: 14.0583,
    lng: 108.2772,
    disease: "Flu",
    cases: 58000,
    active_cases: 10000,
    recovered: 46000,
    deaths: 2000
  },
  {
    location: "Iran",
    lat: 32.4279,
    lng: 53.6880,
    disease: "Flu",
    cases: 72000,
    active_cases: 12500,
    recovered: 57000,
    deaths: 2500
  },
  {
    location: "Venezuela",
    lat: 6.4238,
    lng: -66.5897,
    disease: "Flu",
    cases: 45000,
    active_cases: 7000,
    recovered: 35000,
    deaths: 3000
  },
  {
    location: "Bangladesh",
    lat: 23.6850,
    lng: 90.3563,
    disease: "Flu",
    cases: 110000,
    active_cases: 18000,
    recovered: 89000,
    deaths: 3000
  },
  {
    location: "United Arab Emirates",
    lat: 23.4241,
    lng: 53.8478,
    disease: "Flu",
    cases: 62000,
    active_cases: 9000,
    recovered: 50000,
    deaths: 3000
  },
  {
    location: "Greece",
    lat: 39.0742,
    lng: 21.8243,
    disease: "Flu",
    cases: 29000,
    active_cases: 4500,
    recovered: 23000,
    deaths: 500
  },
  {
    location: "Poland",
    lat: 51.9194,
    lng: 19.1451,
    disease: "Flu",
    cases: 35000,
    active_cases: 5000,
    recovered: 29000,
    deaths: 1000
  },
  {
    location: "Finland",
    lat: 61.9241,
    lng: 25.7482,
    disease: "Flu",
    cases: 24000,
    active_cases: 3800,
    recovered: 20000,
    deaths: 200
  },


  {
    location: "United States",
    lat: 37.0902,
    lng: -95.7129,
    disease: "Flu",
    cases: 123456,
    active_cases: 23456,
    recovered: 98000,
    deaths: 3000
  },
  {
    location: "United Kingdom",
    lat: 55.3781,
    lng: -3.4360,
    disease: "Flu",
    cases: 78900,
    active_cases: 12000,
    recovered: 64000,
    deaths: 1900
  },
  {
    location: "France",
    lat: 46.6034,
    lng: 1.8883,
    disease: "Flu",
    cases: 5400,
    active_cases: 1300,
    recovered: 3900,
    deaths: 200
  },
  {
    location: "Japan",
    lat: 36.2048,
    lng: 138.2529,
    disease: "Flu",
    cases: 98000,
    active_cases: 14000,
    recovered: 81000,
    deaths: 3000
  },
  {
    location: "Australia",
    lat: -25.2744,
    lng: 133.7751,
    disease: "Flu",
    cases: 67000,
    active_cases: 11000,
    recovered: 54000,
    deaths: 2000
  },
  {
    location: "Germany",
    lat: 51.1657,
    lng: 10.4515,
    disease: "Flu",
    cases: 32000,
    active_cases: 4500,
    recovered: 27000,
    deaths: 500
  },
  {
    location: "Russia",
    lat: 61.5240,
    lng: 105.3188,
    disease: "Flu",
    cases: 60000,
    active_cases: 9000,
    recovered: 49000,
    deaths: 2000
  },
  {
    location: "Egypt",
    lat: 26.8206,
    lng: 30.8025,
    disease: "Flu",
    cases: 51000,
    active_cases: 8000,
    recovered: 40000,
    deaths: 3000
  },
  {
    location: "Brazil",
    lat: -14.2350,
    lng: -51.9253,
    disease: "Flu",
    cases: 87000,
    active_cases: 15000,
    recovered: 69000,
    deaths: 3000
  },
  {
    location: "Mexico",
    lat: 23.6345,
    lng: -102.5528,
    disease: "Flu",
    cases: 71000,
    active_cases: 12000,
    recovered: 57000,
    deaths: 2000
  },
  {
    location: "Canada",
    lat: 56.1304,
    lng: -106.3468,
    disease: "Flu",
    cases: 64000,
    active_cases: 10000,
    recovered: 52000,
    deaths: 2000
  },
  {
    location: "China",
    lat: 35.8617,
    lng: 104.1954,
    disease: "Flu",
    cases: 90000,
    active_cases: 16000,
    recovered: 71000,
    deaths: 3000
  },
  {
    location: "India",
    lat: 20.5937,
    lng: 78.9629,
    disease: "Flu",
    cases: 103000,
    active_cases: 17000,
    recovered: 82000,
    deaths: 4000
  },
  {
    location: "Argentina",
    lat: -38.4161,
    lng: -63.6167,
    disease: "Flu",
    cases: 56000,
    active_cases: 9000,
    recovered: 44000,
    deaths: 3000
  },
  {
    location: "South Africa",
    lat: -30.5595,
    lng: 22.9375,
    disease: "Flu",
    cases: 47000,
    active_cases: 8000,
    recovered: 36000,
    deaths: 3000
  },
  {
    location: "Indonesia",
    lat: -0.7893,
    lng: 113.9213,
    disease: "Flu",
    cases: 94000,
    active_cases: 15000,
    recovered: 75000,
    deaths: 4000
  },
  {
    location: "South Korea",
    lat: 35.9078,
    lng: 127.7669,
    disease: "Flu",
    cases: 82000,
    active_cases: 14000,
    recovered: 65000,
    deaths: 3000
  },
  {
    location: "Spain",
    lat: 40.4637,
    lng: -3.7492,
    disease: "Flu",
    cases: 41000,
    active_cases: 6500,
    recovered: 33000,
    deaths: 1500
  },
  {
    location: "Thailand",
    lat: 15.8700,
    lng: 100.9925,
    disease: "Flu",
    cases: 76000,
    active_cases: 12500,
    recovered: 61000,
    deaths: 2500
  },
  {
    location: "Kenya",
    lat: -0.0236,
    lng: 37.9062,
    disease: "Flu",
    cases: 38000,
    active_cases: 5000,
    recovered: 30000,
    deaths: 3000
  },
  {
    location: "Nigeria",
    lat: 9.0820,
    lng: 8.6753,
    disease: "Flu",
    cases: 53000,
    active_cases: 7500,
    recovered: 43000,
    deaths: 2500
  },
  {
    location: "Malaysia",
    lat: 4.2105,
    lng: 101.9758,
    disease: "Flu",
    cases: 62000,
    active_cases: 9000,
    recovered: 50000,
    deaths: 3000
  },
  {
    location: "Peru",
    lat: -9.189967,
    lng: -75.015152,
    disease: "Flu",
    cases: 55000,
    active_cases: 8000,
    recovered: 43000,
    deaths: 2000
  },
  {
    location: "Italy",
    lat: 41.8719,
    lng: 12.5674,
    disease: "Flu",
    cases: 35000,
    active_cases: 6000,
    recovered: 28000,
    deaths: 1000
  },
  {
    location: "Chile",
    lat: -35.6751,
    lng: -71.5430,
    disease: "Flu",
    cases: 49000,
    active_cases: 7000,
    recovered: 40000,
    deaths: 2000
  },
  {
    location: "Turkey",
    lat: 38.9637,
    lng: 35.2433,
    disease: "Flu",
    cases: 68000,
    active_cases: 11000,
    recovered: 54000,
    deaths: 3000
  },
  {
    location: "Vietnam",
    lat: 14.0583,
    lng: 108.2772,
    disease: "Flu",
    cases: 58000,
    active_cases: 10000,
    recovered: 46000,
    deaths: 2000
  },
  {
    location: "Iran",
    lat: 32.4279,
    lng: 53.6880,
    disease: "Flu",
    cases: 72000,
    active_cases: 12500,
    recovered: 57000,
    deaths: 2500
  },
  {
    location: "Venezuela",
    lat: 6.4238,
    lng: -66.5897,
    disease: "Flu",
    cases: 45000,
    active_cases: 7000,
    recovered: 35000,
    deaths: 3000
  },
  {
    location: "Bangladesh",
    lat: 23.6850,
    lng: 90.3563,
    disease: "Flu",
    cases: 110000,
    active_cases: 18000,
    recovered: 89000,
    deaths: 3000
  },
  {
    location: "United Arab Emirates",
    lat: 23.4241,
    lng: 53.8478,
    disease: "Flu",
    cases: 62000,
    active_cases: 9000,
    recovered: 50000,
    deaths: 3000
  },
  {
    location: "Greece",
    lat: 39.0742,
    lng: 21.8243,
    disease: "Flu",
    cases: 29000,
    active_cases: 4500,
    recovered: 23000,
    deaths: 500
  },
  {
    location: "Poland",
    lat: 51.9194,
    lng: 19.1451,
    disease: "Flu",
    cases: 35000,
    active_cases: 5000,
    recovered: 29000,
    deaths: 1000
  },
  {
    location: "Finland",
    lat: 61.9241,
    lng: 25.7482,
    disease: "Flu",
    cases: 24000,
    active_cases: 3800,
    recovered: 20000,
    deaths: 200
  },
  {
    location: "Philippines",
    lat: 12.8797,
    lng: 121.7740,
    disease: "Flu",
    cases: 78000,
    active_cases: 14000,
    recovered: 62000,
    deaths: 2000
  },
  {
    location: "Vietnam",
    lat: 14.0583,
    lng: 108.2772,
    disease: "Flu",
    cases: 88000,
    active_cases: 12000,
    recovered: 74000,
    deaths: 2000
  },
  {
    location: "Cambodia",
    lat: 12.5657,
    lng: 104.9910,
    disease: "Flu",
    cases: 42000,
    active_cases: 6000,
    recovered: 35000,
    deaths: 1000
  },
  {
    location: "Laos",
    lat: 19.8563,
    lng: 102.4955,
    disease: "Flu",
    cases: 28000,
    active_cases: 5000,
    recovered: 22000,
    deaths: 1000
  },
  {
    location: "Myanmar",
    lat: 21.9162,
    lng: 95.9560,
    disease: "Flu",
    cases: 46000,
    active_cases: 9000,
    recovered: 35000,
    deaths: 2000
  },
  {
    location: "Thailand",
    lat: 15.8700,
    lng: 100.9925,
    disease: "Flu",
    cases: 92000,
    active_cases: 16000,
    recovered: 73000,
    deaths: 3000
  },
  {
    location: "Malaysia",
    lat: 4.2105,
    lng: 101.9758,
    disease: "Flu",
    cases: 78000,
    active_cases: 13000,
    recovered: 62000,
    deaths: 3000
  },
  {
    location: "Brunei",
    lat: 4.5353,
    lng: 114.7277,
    disease: "Flu",
    cases: 15000,
    active_cases: 3000,
    recovered: 12000,
    deaths: 200
  },
  {
    location: "Singapore",
    lat: 1.3521,
    lng: 103.8198,
    disease: "Flu",
    cases: 47000,
    active_cases: 9000,
    recovered: 37000,
    deaths: 1000
  },
  {
    location: "Indonesia",
    lat: -0.7893,
    lng: 113.9213,
    disease: "Flu",
    cases: 120000,
    active_cases: 19000,
    recovered: 97000,
    deaths: 4000
  },
  {
    location: "South Korea",
    lat: 35.9078,
    lng: 127.7669,
    disease: "Flu",
    cases: 86000,
    active_cases: 14000,
    recovered: 70000,
    deaths: 2000
  },
  {
    location: "North Korea",
    lat: 40.3399,
    lng: 127.5101,
    disease: "Flu",
    cases: 35000,
    active_cases: 7000,
    recovered: 27000,
    deaths: 1000
  },
  {
    location: "Mongolia",
    lat: 46.8625,
    lng: 103.8467,
    disease: "Flu",
    cases: 18000,
    active_cases: 3000,
    recovered: 14000,
    deaths: 1000
  },
  {
    location: "Papua New Guinea",
    lat: -6.314993,
    lng: 143.95555,
    disease: "Flu",
    cases: 12000,
    active_cases: 2000,
    recovered: 9000,
    deaths: 1000
  },
  {
    location: "Fiji",
    lat: -17.7134,
    lng: 178.0650,
    disease: "Flu",
    cases: 8000,
    active_cases: 1500,
    recovered: 6200,
    deaths: 300
  },
  {
    location: "Solomon Islands",
    lat: -9.6457,
    lng: 160.1562,
    disease: "Flu",
    cases: 6000,
    active_cases: 1000,
    recovered: 4800,
    deaths: 200
  },
  {
    location: "Vanuatu",
    lat: -15.3767,
    lng: 166.9592,
    disease: "Flu",
    cases: 5000,
    active_cases: 800,
    recovered: 4100,
    deaths: 100
  },
  {
    location: "Samoa",
    lat: -13.7590,
    lng: -172.1046,
    disease: "Flu",
    cases: 4000,
    active_cases: 700,
    recovered: 3200,
    deaths: 100
  },
  {
    location: "Tonga",
    lat: -21.1790,
    lng: -175.1982,
    disease: "Flu",
    cases: 3000,
    active_cases: 500,
    recovered: 2400,
    deaths: 100
  },
  {
    location: "Kiribati",
    lat: -3.3704,
    lng: -168.7340,
    disease: "Flu",
    cases: 2000,
    active_cases: 300,
    recovered: 1600,
    deaths: 100
  },
  {
    location: "Tuvalu",
    lat: -7.1095,
    lng: 179.1942,
    disease: "Flu",
    cases: 1000,
    active_cases: 200,
    recovered: 700,
    deaths: 100
  },
  {
    location: "New Zealand",
    lat: -40.9006,
    lng: 174.8860,
    disease: "Flu",
    cases: 48000,
    active_cases: 8000,
    recovered: 38000,
    deaths: 2000
  },
  {
    location: "Australia",
    lat: -25.2744,
    lng: 133.7751,
    disease: "Flu",
    cases: 76000,
    active_cases: 12000,
    recovered: 62000,
    deaths: 2000
  },
  {
    location: "Tanzania",
    lat: -6.369028,
    lng: 34.888822,
    disease: "Flu",
    cases: 38000,
    active_cases: 6000,
    recovered: 30000,
    deaths: 2000
  },
  {
    location: "Uganda",
    lat: 1.3733,
    lng: 32.2903,
    disease: "Flu",
    cases: 34000,
    active_cases: 5000,
    recovered: 28000,
    deaths: 1000
  },
  {
    location: "Zambia",
    lat: -13.1339,
    lng: 27.8493,
    disease: "Flu",
    cases: 29000,
    active_cases: 4000,
    recovered: 24000,
    deaths: 1000
  },
  {
    location: "Malawi",
    lat: -13.2543,
    lng: 34.3015,
    disease: "Flu",
    cases: 26000,
    active_cases: 3500,
    recovered: 21000,
    deaths: 1500
  },
  {
    location: "Mozambique",
    lat: -18.6657,
    lng: 35.5296,
    disease: "Flu",
    cases: 30000,
    active_cases: 5000,
    recovered: 24000,
    deaths: 1000
  },
  {
    location: "Zimbabwe",
    lat: -19.0154,
    lng: 29.1549,
    disease: "Flu",
    cases: 32000,
    active_cases: 5000,
    recovered: 26000,
    deaths: 1000
  },
  {
    location: "Botswana",
    lat: -22.3285,
    lng: 24.6849,
    disease: "Flu",
    cases: 15000,
    active_cases: 2500,
    recovered: 12000,
    deaths: 500
  },
  {
    location: "Namibia",
    lat: -22.9576,
    lng: 18.4904,
    disease: "Flu",
    cases: 14000,
    active_cases: 2000,
    recovered: 11000,
    deaths: 1000
  }, {
    location: "Angola",
    lat: -11.2027,
    lng: 17.8739,
    disease: "Flu",
    cases: 28000,
    active_cases: 4500,
    recovered: 22000,
    deaths: 1500
  },
  {
    location: "Algeria",
    lat: 28.0339,
    lng: 1.6596,
    disease: "Flu",
    cases: 52000,
    active_cases: 7000,
    recovered: 43000,
    deaths: 2000
  },
  {
    location: "Morocco",
    lat: 31.7917,
    lng: -7.0926,
    disease: "Flu",
    cases: 49000,
    active_cases: 6000,
    recovered: 42000,
    deaths: 1000
  },
  {
    location: "Tunisia",
    lat: 33.8869,
    lng: 9.5375,
    disease: "Flu",
    cases: 37000,
    active_cases: 5500,
    recovered: 30000,
    deaths: 1500
  },
  {
    location: "Libya",
    lat: 26.3351,
    lng: 17.2283,
    disease: "Flu",
    cases: 24000,
    active_cases: 4500,
    recovered: 18000,
    deaths: 1500
  },
  {
    location: "Sudan",
    lat: 12.8628,
    lng: 30.2176,
    disease: "Flu",
    cases: 35000,
    active_cases: 5000,
    recovered: 28000,
    deaths: 2000
  },
  {
    location: "South Sudan",
    lat: 6.8770,
    lng: 31.3070,
    disease: "Flu",
    cases: 17000,
    active_cases: 3000,
    recovered: 13000,
    deaths: 1000
  },
  {
    location: "Ethiopia",
    lat: 9.1450,
    lng: 40.4897,
    disease: "Flu",
    cases: 68000,
    active_cases: 10000,
    recovered: 55000,
    deaths: 3000
  },
  {
    location: "Eritrea",
    lat: 15.1794,
    lng: 39.7823,
    disease: "Flu",
    cases: 15000,
    active_cases: 2500,
    recovered: 12000,
    deaths: 500
  },
  {
    location: "Djibouti",
    lat: 11.8251,
    lng: 42.5903,
    disease: "Flu",
    cases: 9000,
    active_cases: 1500,
    recovered: 7000,
    deaths: 500
  },
  {
    location: "Somalia",
    lat: 5.1521,
    lng: 46.1996,
    disease: "Flu",
    cases: 29000,
    active_cases: 5000,
    recovered: 23000,
    deaths: 1000
  },
  {
    location: "Kenya",
    lat: -0.0236,
    lng: 37.9062,
    disease: "Flu",
    cases: 50000,
    active_cases: 8000,
    recovered: 40000,
    deaths: 2000
  },
  {
    location: "Uganda",
    lat: 1.3733,
    lng: 32.2903,
    disease: "Flu",
    cases: 34000,
    active_cases: 5000,
    recovered: 28000,
    deaths: 1000
  },
  {
    location: "Rwanda",
    lat: -1.9403,
    lng: 29.8739,
    disease: "Flu",
    cases: 22000,
    active_cases: 3500,
    recovered: 18000,
    deaths: 500
  },
  {
    location: "Burundi",
    lat: -3.3731,
    lng: 29.9189,
    disease: "Flu",
    cases: 17000,
    active_cases: 3000,
    recovered: 13000,
    deaths: 1000
  },
  {
    location: "Tanzania",
    lat: -6.3690,
    lng: 34.8888,
    disease: "Flu",
    cases: 47000,
    active_cases: 7000,
    recovered: 38000,
    deaths: 2000
  },
  {
    location: "Zambia",
    lat: -13.1339,
    lng: 27.8493,
    disease: "Flu",
    cases: 29000,
    active_cases: 4000,
    recovered: 24000,
    deaths: 1000
  },
  {
    location: "Zimbabwe",
    lat: -19.0154,
    lng: 29.1549,
    disease: "Flu",
    cases: 32000,
    active_cases: 5000,
    recovered: 26000,
    deaths: 1000
  },
  {
    location: "Malawi",
    lat: -13.2543,
    lng: 34.3015,
    disease: "Flu",
    cases: 26000,
    active_cases: 3500,
    recovered: 21000,
    deaths: 1500
  },
  {
    location: "Mozambique",
    lat: -18.6657,
    lng: 35.5296,
    disease: "Flu",
    cases: 30000,
    active_cases: 5000,
    recovered: 24000,
    deaths: 1000
  }
    
  ];

  outbreaks.forEach(outbreak => {
    if (outbreak.disease === "Flu") {
      outbreak.disease = "Dengue";
    }
  });

// Define a route to return outbreak data based on the disease query
router.get('/', (req, res) => {
  const { disease } = req.query;

  if (disease) {
    // Filter data based on the disease parameter
    const filteredOutbreaks = outbreaks.filter(outbreak => outbreak.disease === disease);
    return res.json(filteredOutbreaks);
  }

  // Return all data if no specific disease is requested
  res.json(outbreaks);
});

module.exports = router;
