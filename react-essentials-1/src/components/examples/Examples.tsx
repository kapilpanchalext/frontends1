import React, { useState } from 'react'
import TabButton from '../tabbutton/TabButton';
import { EXAMPLES, ExampleKey } from '../../data/Data';

type Props = {}

const Examples = (props: Props) => {
  const[selectedTopic, setSelectedTopic] = useState<ExampleKey>("components");

  const handleSelect = (selectedButton: ExampleKey) => {
    setSelectedTopic(selectedButton);
  };

  return (
    <>
        <section id="examples">
          <h2>Examples</h2>
            <menu>
              <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleSelect("components")}>Components</TabButton>
              <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
              <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleSelect("props")}>Props</TabButton>
              <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleSelect("state")}>State</TabButton>
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
    </>
  )
}

export default Examples;