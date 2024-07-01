import React, { useEffect, useState } from 'react'
import Places from '../places/Places';
import Error from '../error/Error';
import { fetchAvailablePlaces } from '../../util/http';
import { sortPlacesByDistance } from '../../util/loc';
import { Place } from '../../model/DataFiles';

type Props = {
    onSelectPlace: (selectedPlace: Place) => void
}

const AvailablePlaces = ({onSelectPlace}: Props) => {
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [availablePlaces, setAvailablePlaces] = useState<Place[]>([]);
    const [error, setError] = useState<any>();

    useEffect(() => {
        async function fetchPlaces() {
          setIsFetching(true);
    
          try {
            const places = await fetchAvailablePlaces();
            navigator.geolocation.getCurrentPosition((position) => {
              const sortedPlaces = sortPlacesByDistance(
                places,
                position.coords.latitude,
                position.coords.longitude
              );
              setAvailablePlaces(sortedPlaces);
              setIsFetching(false);
            });
          } catch (error: any) {
            setError({
              message:
                error.message || 'Could not fetch places, please try again later.',
            });
            setIsFetching(false);
          }
        }
    
        fetchPlaces();
      }, []);
    
      if (error) {
        return <Error title="An error occurred!" message={error.message} />;
      }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  )
}

export default AvailablePlaces;