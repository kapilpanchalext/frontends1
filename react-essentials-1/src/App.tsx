import { useState } from "react";
import CoreConcept from "./components/coreconcept/CoreConcept";
import Header from "./components/header/Header";
import TabButton from "./components/tabbutton/TabButton";
import { CORE_CONCEPTS } from "./data/Data";

function App() {

  const[selectedTopic, setSelectedTopic] = useState("Core Concepts");

  const handleSelect = (selectedButton: string) => {
    console.log("Hello World - Selected " + selectedButton);
    setSelectedTopic(selectedButton);
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
            {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;