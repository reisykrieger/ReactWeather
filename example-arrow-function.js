var names = ['Leah', 'Reisy', 'Yehudis'];

// names.forEach(function(name){
//   console.log('foreach', name);
// });
//
// names.forEach((name) =>{
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));
//
// var retutnMe = (name) => name + '!';
// console.log(returnMe('Leah'));

var person={
  name: 'Leah',
  greet:function(){
    names.forEach((name) =>{
      console.log(this.name + ' says hi to ' + name)
    });
  }
}

person.greet();
