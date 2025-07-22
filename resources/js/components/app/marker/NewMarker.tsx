import { RootState } from '@/stores/store';
import React from 'react'
import { useSelector } from 'react-redux';

export default function NewMarker() {

    const mapData = useSelector((state: RootState) => {
        return {
            markers: state.map.markers,
            center: state.map.center,
            info: state.map.info
        };
    });

  console.log('New marker data:', mapData);

  return (
    <div>
      <h2>New Marker</h2>
    </div>
  )
}
