import React from 'react';
import { useState } from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useWindowSize } from "@react-hook/window-size/throttled";


import Confetti from 'react-confetti'


const HelloWorld = () => {
  const [confetti,setConfetti] = useState( <></> )
  const [count,setCount]=useState([{name: "*tumbleweed*", uv: 0, pv: 2400, amt: 2400}]);

  const [congrats,setCongrats]=useState("")
  const [width, height] = useWindowSize({ fps: 60 });
  
  function increment() {
    let current = count[0].uv + 20
    setCount([{name: "clicky click clicks", uv:current, pv: 2400, amt: 2400}])

    switch(current){
        case 100:
            setCongrats("CONGRATS YOU HAVE REACHED 100");
            break;
        case 200:
            setCongrats("CONGRATS YOU HAVE REACHED 200");
            break;
        case 300: 
            setCongrats("CONGRATS YOU HAVE REACHED 300");
            break;
        case 500:
            setCongrats("MY GOSH 500");
            break;
        case 1000:
            setCongrats("YOU HAVE COMPLETED THE GAME!!");
            setConfetti (
                <Confetti
                width={width}
                height={height}
                />
            )
            break;
    }

    console.log(current);

  }

  function decrease() {
    let current = count[0].uv - 1 
    if (current < 0) {current = 0}
    setCount([{name: "unclicks your brick", uv: current, pv: 2400, amt: 2400}])

    if (current< 100) {
        setCongrats("")
    } 
    console.log(current);
    
  }
  
  return (
    <div>

        {confetti}
        
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '60vh'}}>
            <text> {congrats} </text>
        </div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '0vh'}}>
            <div>
                <button onClick={increment}>+</button>
            </div>
            <div>
                <BarChart width={600} height={300} data={count}>
                    <Bar type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0,100]}/>
                </BarChart>
            </div>
            <div>
                <button onClick={decrease}>-</button>
            </div>
        </div>
    </div>
  );
};

export default HelloWorld;