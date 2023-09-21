import "./App.css";
import pic0 from "./assets/pic0.jpg";
import pic1 from "./assets/pic1.jpg";
import pic2 from "./assets/pic2.jpg";
import pic3 from "./assets/pic3.jpg";
import pic4 from "./assets/pic4.jpg";
import Hero from "./components/Hero";
import About from './components/About';
import SignupForm from './components/SignupForm';
import LoginForm from './components/Login';
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "About" },
    { url: "#", title: "Sign Up" },
    { url: "#", title: "Login" },
  ];
  

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={pic0} />
      <Slider
        imageSrc={pic1}
        title={"Focus"}
        subtitle={
          "There are no rules for good photographs, there are only good photographs.!"
        }
      />
      <Slider
        imageSrc={pic2}
        title={"Memories"}
        subtitle={"One Picture creates lot of memory, Every click show our Emotions.!"}
        flipped={true}
      />
      <Slider
        imageSrc={pic3}
        title={"Art"}
        subtitle={
          "Art is not in the …eye of the beholder. It's in the soul of the artist.For me, the subject of the picture is always more important than the picture.!"
        }
      />
      <Slider
        imageSrc={pic4}
        title={"Fact"}
        subtitle={"The world moves fast, changing everything around us with each new day. Photography is a gift that can keep us in a moment forever, blissfully eternal.!"}
        flipped={true}
      /> 
      <About />
      <SignupForm />
      <LoginForm />
    </div>
  );
}

export default App;