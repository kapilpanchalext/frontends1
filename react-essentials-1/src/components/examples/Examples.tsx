import { useState } from 'react'
import TabButton from '../tabbutton/TabButton';
import { EXAMPLES, ExampleKey } from '../../data/Data';
import Section from '../section/Section';
import Tabs from '../tabs/Tabs';

type Props = {}

const Examples = (props: Props) => {
  const[selectedTopic, setSelectedTopic] = useState<ExampleKey>("components");

  const handleSelect = (selectedButton: ExampleKey) => {
    setSelectedTopic(selectedButton);
  };

  return (
    <>
        <Section title={'Examples'} id={'examples'}>
            <Tabs buttonsContainer='menu' button={
                <>
                    <TabButton isSelected={selectedTopic === "components"} onClick={() => handleSelect("components")}>Components</TabButton>
                    <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleSelect("jsx")}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic === "props"} onClick={() => handleSelect("props")}>Props</TabButton>
                    <TabButton isSelected={selectedTopic === "state"} onClick={() => handleSelect("state")}>State</TabButton>
                </>} />
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
        </Section>
    </>
  )
};

export default Examples;