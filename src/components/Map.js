import React from 'react';
import MapContainer from './MapContainer';

function Map() {
    return (
        <div className="container-fluid">
            <div className="row map">
                <div className="col-xs-10 col-sm-10 col-md-10 text-center">
                    <div id="map">
                        <MapContainer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map;