import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import CreateRoom from './components/CreateRoom';
import Room from './components/Room';
import { useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';

function App() {

  const [rooms, setRooms] = useState([])
  const [airCons, setAirCons] = useState([''])
  const [heaters, setHeaters] = useState([''])
  const [lights, setLights] = useState([''])
  const [stereos, setStereos] = useState([''])

  const createroom = (name,type,color) => {
    if (rooms.length != 0) {
      setRooms([...rooms,
        {
          name:name,
          index:rooms.length,
          type:type,
          color:color,
          items:0
        }
        ])
    }
    else {
      setRooms([
        {
          name:name,
          index:rooms.length,
          type:type,
          color:color,
          items:0
        }
        ])
    }
  }

  const updateItems = (roomIndex) => {
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].index == roomIndex) {
        rooms[i].items += 1;
        break;
      }
    }
  }

  const productPush = (productArray,roomIndex) => {
    productArray.push({
      index:productArray.length,
      roomIndex:roomIndex,
      status:false
    })
  }

  const addProducts = (roomIndex, product) => {
    if (product == 'ac') {
      airConPush(roomIndex)
    }
    else if (product == 'heater') {
      heaterPush(roomIndex)
    }
    else if (product == 'light') {
      lightPush(roomIndex)
    }
    else if (product == 'stereo') {
      stereoPush(roomIndex)
    }
    updateItems(roomIndex)
  }
  
  const airConPush = (roomIndex) => {
    productPush(airCons,roomIndex);
    setAirCons([...airCons])
  }

  const heaterPush = (roomIndex)=> {
    productPush(heaters,roomIndex)
    setHeaters([...heaters])
  }

  const stereoPush = (roomIndex)=> {
    productPush(stereos,roomIndex)
    setStereos([...stereos])
  }

  const lightPush = (roomIndex)=> {
    productPush(lights,roomIndex)
    setLights([...lights])
  }


  const airConPower = (airConIndex) => {
    airCons.forEach(airCon => {
      if (airCon.index == airConIndex) {
        airCon.status = !airCon.status;
        setAirCons(airCons)
      }
    });
  }

  const heaterPower = (heaterIndex) => {
    heaters.forEach(heater => {
      if (heater.index == heaterIndex) {
        heater.status = !heater.status;
        setHeaters(heaters)
      }
    });
  }

  const lightPower = (lightIndex) => {
    lights.forEach(light => {
      if (light.index == lightIndex) {
        light.status = !light.status;
        setLights(lights)
      }
    });
  }
  
  const stereoPower = (stereoIndex) => {
    stereos.forEach(stereo => {
      if (stereo.index == stereoIndex) {
        stereo.status = !stereo.status;
        setStereos(stereos)
      }
    });
  }

  return (
    <div className="App">
      <div id='main-out-line'>
      <h1>Smart Home</h1>
      <Router>
        {rooms.map((room) => {
          return <Link to={'/'+room.type+'/'+room.name+'-'+room.index}><button style={{backgroundColor: room.color}}>{room.name}</button></Link>
        })}
        <Link to='/CreateRoom'><button>+</button></Link>
        <Routes>
          <Route exact path='/' element={<h2>Welcome To Your Smart Home <br /><br /> Press + To Begin</h2>} />
          <Route exact path='/CreateRoom' element={<CreateRoom createRoomFunc={createroom}/>} />
          {rooms.map((room) => {
            return <Route exact path={'/'+room.type+'/'+room.name+'-'+room.index} element={
              <Room 
                roomName={room.name}
                roomIndex={room.index}
                roomType={room.type}
                roomColor={room.color}
                roomItems={room.items}
                airCons={airCons}
                heaters={heaters}
                lights={lights}
                stereos={stereos}
                addProductsFunc={addProducts}
                stereoPower={stereoPower}
                lightPower={lightPower}
                heaterPower={heaterPower}
                airConPower={airConPower}
              />
            } />
          })}
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
