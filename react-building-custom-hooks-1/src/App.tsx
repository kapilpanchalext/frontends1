import { useCallback, useEffect, useRef, useState } from "react";
import { fetchUserPlaces, updateUserPlaces } from "./util/http";
import Places from "./components/places/Places";
import Modal from "./components/modal/Modal";
import DeleteConfirmation from "./components/deleteconfirmation/DeleteConfirmation";
import AvailablePlaces from "./components/availableplaces/AvailablePlaces";
import Error from "./components/error/Error";
import logoImg from "../src/assets/logo.png";
import { Place } from "./model/DataFiles";

type ErrorState = {
  message: string;
};

function App() {
  const selectedPlace = useRef<Place>();
  const [userPlaces, setUserPlaces] = useState<Place[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState<ErrorState | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const places = await fetchUserPlaces();
        setUserPlaces(places);
      } catch (error: any) {
        setError({ message: error.message || 'Failed to fetch user places.' });
      }
      setIsFetching(false);
    }

    fetchPlaces();
  }, []);

  function handleStartRemovePlace(place: Place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace: Place) {
    setUserPlaces((prevPickedPlaces: Place[]) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place: Place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try {
      await updateUserPlaces([selectedPlace, ...userPlaces]);
    } catch (error: any) {
      setUserPlaces(userPlaces);
      setErrorUpdatingPlaces({
        message: error.message || 'Failed to update places.',
      });
    }
  }

  const handleRemovePlace = useCallback(
    async function handleRemovePlace() {
      setUserPlaces((prevPickedPlaces) =>
        prevPickedPlaces.filter(
          (place: Place) => place.id !== selectedPlace.current?.id
        )
      );

      try {
        await updateUserPlaces(
          userPlaces.filter((place: Place) => place.id !== selectedPlace.current?.id)
        );
      } catch (error: any) {
        setUserPlaces(userPlaces);
        setErrorUpdatingPlaces({
          message: error.message || 'Failed to delete place.',
        });
      }

      setModalIsOpen(false);
    },
    [userPlaces]
  );

  function handleError() {
    console.log("INSIDE HANDLE ERROR");
    setErrorUpdatingPlaces(null);
  }

  return (
    <>
      <Modal open={!!errorUpdatingPlaces} onClose={handleError}>
        {errorUpdatingPlaces && (
          <Error
            title="An error occurred GETTING FILES!"
            message={errorUpdatingPlaces.message}
            onConfirm={handleError}
          />
        )}
      </Modal>

      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {error && <Error title="An error occurred!" message={error.message} />}
        {!error && (
          <Places
            title="I'd like to visit ..."
            fallbackText="Select the places you would like to visit below."
            isLoading={isFetching}
            loadingText="Fetching your places..."
            places={userPlaces}
            onSelectPlace={handleStartRemovePlace}
          />
        )}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;