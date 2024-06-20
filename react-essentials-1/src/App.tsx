import { useState } from "react";
import CoreConcept from "./components/coreconcept/CoreConcept";
import Header from "./components/header/Header";
import TabButton from "./components/tabbutton/TabButton";
import { CORE_CONCEPTS, EXAMPLES, ExampleKey } from "./data/Data";

function App() {

  const[selectedTopic, setSelectedTopic] = useState<ExampleKey>("components");

  const handleSelect = (selectedButton: ExampleKey) => {
    // console.log("Hello World - Selected " + selectedButton);
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts!</h2>
          <ul>
            <CoreConcept title={CORE_CONCEPTS[0].title} 
                         description={CORE_CONCEPTS[0].description} 
                         img={CORE_CONCEPTS[0].image} />
            <CoreConcept title={CORE_CONCEPTS[1].title} 
                         description={CORE_CONCEPTS[1].description} 
                         img={CORE_CONCEPTS[1].image} />
            <CoreConcept title={CORE_CONCEPTS[2].title} 
                         description={CORE_CONCEPTS[2].description} 
                         img={CORE_CONCEPTS[2].image} />
            <CoreConcept title={CORE_CONCEPTS[3].title} 
                         description={CORE_CONCEPTS[3].description} 
                         img={CORE_CONCEPTS[3].image} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
            <menu>
              <TabButton onSelect={() => handleSelect("components")}>Components</TabButton>
              <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
              <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
              <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
            </menu>
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
        </section>
      </main>
    </div>
  );
}

export default App;