import React from 'react';

const AboutUs = () => {
  return (
    <div >
       
      <h1 className='slide'>About Us</h1>

       <div className='logoDiv1'></div>
       <p id='c'>
        Outspread is a sophisticated tool designed to monitor and forecast disease outbreaks on a global scale. The system provides up-to-the-minute updates on crucial metrics, such as cases,
        infection rates, and deaths, which are visualized through an interactive global map. This map enables users to see the distribution and severity of the outbreak across different regions,
        offering a clear and immediate understanding of the situation. By leveraging advanced machine learning techniques, the project not only tracks real-time data but also predicts future 
        trends based on historical patterns, providing valuable insights into how outbreaks may develop over time.
        </p>
        <p id='c'>
            To ensure the accuracy and comprehensiveness of the information, the project integrates data from multiple sources. These include global health organization APIs, social media
            platforms, and news websites. This diverse data collection approach ensures a well-rounded view of the outbreak and its progression. The technology stack supporting the project is 
            robust and modern, including MongoDB for data storage and management, Express.js for handling backend operations, React.js for creating dynamic and interactive user interfaces, and
            Node.js for server-side functionality. The use of these technologies ensures that the application is both scalable and responsive.
        </p>
        <p id='c'>
            Our COVID-19 Forecasting Model, a key component of the project, employs the Exponential Smoothing technique to forecast daily infections and cumulative cases. 
            All forecast data is securely stored in MongoDB. We have provided clear instructions for setting up the required Python libraries and MongoDB to facilitate the deployment and use of
            the model. The project is open to contributions from the community, and we welcome issues, suggestions, and pull requests to help refine and expand its capabilities. By fostering a 
            collaborative development environment, we aim to continuously improve the project and enhance its effectiveness in tracking and predicting disease outbreaks.
        </p>

        
    </div>
  );
}

export default AboutUs;
 