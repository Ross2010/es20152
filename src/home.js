import React from "react";
import ArrayComponent from "./ArrayComponent";

const Home= () => {
const array = ArrayComponent();  
const random = Math.floor(Math.random() * array.length);
const fruit = array[random];

return (
    <div>
      <h1>I'd like one {fruit}, please</h1>
      <h1>Here you go: {fruit}</h1>
      <h1>Delicious! May I have another?</h1>
      <h1>I'm sorry, we're all out. We have 14 left.</h1>
    </div>
  );
}

export default Home;


