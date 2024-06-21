import { CORE_CONCEPTS } from '../../data/Data';
import CoreConcept from './CoreConcept';

type Props = {}

const CoreConcepts = (props: Props) => {
  return (
    <>
        <section id="core-concepts">
          <h2>Core Concepts!</h2>
          <ul>
            { CORE_CONCEPTS.map((element, index) => (
              <CoreConcept key={index} title={element.title}
                         description={element.description}
                         img={element.image}
              />
            )) }
          </ul>
        </section>
    </>
  )
};

export default CoreConcepts;