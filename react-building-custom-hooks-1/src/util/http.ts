import { Place } from "../model/DataFiles";

  export async function fetchAvailablePlaces() {
    const response = await fetch('http://localhost:9001/api/v1/places');
    const resData = await response.json();

    if (!response.ok) {
      throw new Error('Failed to fetch places');
    }

    const placesArray: Place[] = resData;
    return placesArray;
  }

  export async function fetchUserPlaces() {
    const response = await fetch('http://localhost:9001/api/v1/get-user-places');
    const resData = await response.json();

    if (!response.ok) {
      throw new Error('Failed to fetch user places');
    }
    
    const placesArray: Place[] = resData;
    console.log(placesArray)
    return placesArray;
  }

  export async function updateUserPlaces(places: Place[]) {
    const response = await fetch('http://localhost:9001/api/v1/update-user-places', {
      method: 'PUT',
      body: JSON.stringify(places),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const resData = await response.json();

    if (!response.ok) {
      throw new Error('Failed to update user data.');
    }

    return resData.message;
  }