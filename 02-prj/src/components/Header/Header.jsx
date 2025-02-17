import reactImg from "../../assets/react-core-concepts.png"
import './Header.css'

const reactDescriptions = ["Great", "Cool", "Fantastic" ];

function getRandomNumber (max){
  return Math.round(Math.random() * max);
}

export default function Header(){

    const currentReactDescription = reactDescriptions[getRandomNumber(2)];
  
    return (
    <header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {currentReactDescription} React concepts you will need for almost any app you are
      going to build!
    </p>
    </header>
    );
}