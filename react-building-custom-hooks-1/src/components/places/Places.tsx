import investmentImage from "../../assets/investment-calculator-logo.png";
import { Place } from '../../model/DataFiles';

type Props = {
    title: string
    places: Place[]
    fallbackText: string
    onSelectPlace: (place: Place) => void
    isLoading: boolean
    loadingText: string
}

const Places = ({title,places,fallbackText,onSelectPlace,isLoading,loadingText}: Props) => {
  return (
    <section className="places-category">
      <h2>{title}</h2>
      {isLoading && <p className="fallback-text">{loadingText}</p>}
      {!isLoading && places.length === 0 && <p className="fallback-text">{fallbackText}</p>}
      {!isLoading && places.length > 0 && (
        <ul className="places">
          {places.map((place) => (
            <li key={place.id} className="place-item">
              <button onClick={() => onSelectPlace(place)}>
                <img
                  src={investmentImage}
                  alt={place.image.alt}
                  style={{ width: '50px', height: '50px' }}
                />
                <h3>{place.title}</h3>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Places;