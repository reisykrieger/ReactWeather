var React = require ('react');

// var About = React.createClass({
//   render:function(){
//     return(
//       <h3>About component</h3>
//     )
//   }
// });

var About = (props) =>{
  return(
    <div>
    <h1 className="text-center page-title">About</h1>
    <p>Welcome to the about page this is very boring and I can't be bothered</p>
    <p>
      Here are some of the tools I have used:
    </p>
    <ul>
      <li>
        <a href="https://facebook.github.io/react">React</a> - this was the javascript framework used
      </li>
      <li>
        <a href="http://openweathermap.org">Open Weather Map</a> - I used open weather map to search for weather data by city name.
      </li>
    </ul>
    </div>
  )
};

module.exports = About;
