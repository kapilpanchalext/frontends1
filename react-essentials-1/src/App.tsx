import reactImg from "./assets/react-core-concepts.png";
import componentImg from "./assets/components.png";

type Props = {
  title: string;
  description: string;
  img: string;
}

function Header () {
  const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

  function genRandomInt(max: number){
    return Math.floor(Math.random() * (max + 1));
  }

  const description = reactDescriptions[genRandomInt(2)];

  return(
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}

function CoreConcept(props: Props) {
  return(
    <li>
      <img src="" alt=""></img>
      <h3></h3>
      <p></p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts!</h2>
          <ul>
            <CoreConcept title={"Components"} description={""} img={componentImg}/>
            <CoreConcept title={""} description={""} img={""} />
            <CoreConcept title={""} description={""} img={""} />
            <CoreConcept title={""} description={""} img={""} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;