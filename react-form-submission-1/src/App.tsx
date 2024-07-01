import Header from "./components/header/Header";
import Login from "./components/login/Login";
import StateLogin from "./components/login/StateLogin";
import Signup from "./components/signup/Signup";

function App() {
  return (
    <>
      <Header />
      <main>
        <StateLogin />
      </main>
    </>
  );
}

export default App;