import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/lofi.css';
import 'bootstrap/js/dist/carousel'
import React from 'react';
import RadioData from '../../models/RadioData';
import { getRadiosUser } from '../../api/radioapi';
import RadioCard from './Radklcard';

const Body = () => {

    const [radios, setRadios] = React.useState<RadioData[]>([])
    React.useEffect(()=>{
      getRadiosUser(setRadios)
    }, [])
    console.log();
    
    return (<div className="radio">
      { radios.map(radio => <RadioCard {...radio} key={radio.id} />) }   
     </div>
  )
}
export default Body