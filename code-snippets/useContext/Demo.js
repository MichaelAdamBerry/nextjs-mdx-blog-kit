import React, { useState, useContext } from "react";
import styled from "@emotion/styled";

const FaceOff = styled.main`
  background-color: #2f2f2f;
  font-size: 16px;
  color: white;
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;

  h1,
  h2,
  h3 {
    text-align: center;
    color: red;
  }

  ul {
    padding: 0;
    text-align: left;
    list-style: none;
    margin-left: calc(50% - 60px);
  }

  li:before {
    content: "🔪 ";
    font-size: 0.7rem;
  }

  li {
    font-size: 0.9rem;
  }

  h1 {
    color: red;
  }

  .profile-container {
    width: 80%;
    margin: auto;
    background-color: #0009;
    padding: 1rem;
  }

  .avatar-container {
    margin: auto;
    overflow: hidden;
    width: 100px;
    height: 100px;
    border-radius: 50%;

    img {
      width: 100%;
      height: auto;
    }
  }

  .img-container {
    width: 100%;

    img {
      width: 100%;
      height: auto;
    }
  }

  button {
    background: linear-gradient(45deg, black, red);
    width: 100px;
    height: 40px;
    border: none;
    color: white;
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 500;
    margin-left: calc(50% - 50px);
  }

  @media (max-width: 425px) {
    max-width: 100%;
    font-size: 12px;
  }
`;

const monsters = {
  freddy: {
    name: "Freddy Kruger",
    movie: "nightmare on elm street",
    avatar:
      "https://i.pinimg.com/originals/b1/07/a7/b107a7d0367835bc3375ce41b6a6d64e.jpg",
    specialSkills: [
      "Sharp nails",
      "Haunts dreams",
      "Can pull off horizontal stripes"
    ]
  },
  jason: {
    name: "Jason Voorhees",
    movie: "friday the 13th",
    avatar:
      "https://res.cloudinary.com/teepublic/image/private/s--LgVynWYp--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1475591344/production/designs/713330_1.jpg",
    specialSkills: [
      "Cannot die",
      "Machete skills",
      "Punishing irresponsible camp counselors"
    ]
  }
};

const MonsterContext = React.createContext({
  monster: monsters.jason,
  toggleMonster: () => monsters.freddy
});

function App() {
  const [current, toggleCurrent] = useState(monsters.freddy);
  return (
    <div className="App">
      <FaceOff>
        <MonsterContext.Provider
          value={{
            monster: current,
            toggleMonster: () =>
              toggleCurrent(
                current === monsters.jason ? monsters.freddy : monsters.jason
              )
          }}>
          <Profile />
        </MonsterContext.Provider>
      </FaceOff>
    </div>
  );
}

function Profile() {
  return (
    <div className="profile-container">
      <div className="img-container">
        <img
          src="https://res.cloudinary.com/dscjol9s7/image/upload/v1571778112/freddie-vs-jason_fan-art_a3texh.jpg"
          alt=""
        />
      </div>
      <h1>Monster Stats</h1>
      <CurrentMonster />
      <NewMonsterBtn />
    </div>
  );
}

function NewMonsterBtn() {
  const { toggleMonster, monster } = useContext(MonsterContext);
  return (
    <button onClick={toggleMonster}>
      {monster.name === "Freddy Kruger" ? "View Jason" : "View Freddy"}{" "}
    </button>
  );
}

function CurrentMonster() {
  const { monster } = useContext(MonsterContext);

  return (
    <section>
      <h2>{monster.name}</h2>
      <div className="avatar-container">
        <img src={monster.avatar} alt={`avatar of ${monster.name}`} />
      </div>
      <h3>Special Skills:</h3>
      <ul>
        {monster.specialSkills.map((skill, indx) => {
          return <li key={indx}>{skill}</li>;
        })}
      </ul>
    </section>
  );
}

const Demo = () => {
  return <App />;
};

export default Demo;
