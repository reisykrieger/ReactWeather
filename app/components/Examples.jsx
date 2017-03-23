var React = require ('react');

var Examples = React.createClass({
  render:function(){
    return(
      <h3>Examples component</h3>
    )
  };
});

var Examples = (props) =>{
  return(
    <div>
    <h3>Examples component!</h3>
    <P>Welcome to examples page</P>
    </div>
  )
};
module.exports = Examples;
