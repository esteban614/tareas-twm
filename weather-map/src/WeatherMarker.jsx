import { Marker, Popup } from 'react-leaflet';
import {useState} from 'react';

function WeatherMarker({position}) {
    // FIXME why is this component being created TWICE for EACH click???
    // this results in duplicated API calls at execution, and quadruple API calls in load!
    console.log(position.lat);
    console.log(position.lng);
    const [data, setData] = useState({});
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${position.lat}&longitude=${position.lng}`)
    .then(request => request.json()).then(console.log);
    return (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    )
}

export default WeatherMarker
