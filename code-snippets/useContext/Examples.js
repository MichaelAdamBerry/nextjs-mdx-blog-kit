import React from "react";
import { CodeBlockJS } from "../CodeBlocks.js";

export const MonsterData = () => {
  const code = `//User Data
    const monsters = {
        freddy: {
          name: "Freddy Kruger",
          movie: "nightmare on elm street",
          specialSkills: [
            "Sharp nails",
            "Haunts dreams",
            "Can pull off horizontal stripes"
          ]
        },
        jason: {
          name: "Jason Voorhees",
          movie: "friday the 13th",
          specialSkills: [
            "Cannot die",
            "Machete skills",
            "Punishing irresponsible camp counselors"
          ]
        }
      };      
    `;
  return <CodeBlockJS code={code} />;
};

export const CreateContext = () => {
  const code = `const MonsterContext = React.createContext({
        monster: {},
        toggleMonster: () => {}
      });`;
  return <CodeBlockJS code={code} />;
};

export const AppOne = () => {
  const code = `function App() {
        const [current, toggleCurrent] = useState(monsters.freddy);
        return (
          <div className="App">
            <MonsterContext.Provider
              value={{
                monster: current,
                toggleMonster: () =>
                  toggleCurrent(
                    current === monsters.jason ? monsters.freddy : monsters.jason
                  )
              }}
            >
              <Profile />
            </MonsterContext.Provider>
          </div>
        );
      }`;

  return <CodeBlockJS code={code} />;
};

export const ProfileComponent = () => {
  const code = `function Profile() {
        return (
          <div>
            <h1>Monster Dates</h1>
            <CurrentMonster />
            <NewMonsterBtn />
          </div>
        );
      }
      `;
  return <CodeBlockJS code={code} />;
};

export const CurrentMonster = () => {
  const code = `function CurrentMonster() {
        const { monster } = useContext(MonsterContext);
      
        return (
          <section>
            <h2>{monster.name}</h2>
            <h3>Special SKills:</h3>
            <ul>
              {monster.specialSkills.map((skill, indx) => {
                return <li key={indx}>{skill}</li>;
              })}
            </ul>
          </section>
        );
      }
      `;
  return <CodeBlockJS code={code} />;
};

export const Button = () => {
  const code = `function NewMonsterBtn() {
        const { toggleMonster } = useContext(MonsterContext);
        return <button onClick={toggleMonster}> Monster </button>;
      }`;
  return <CodeBlockJS code={code} />;
};

export const FullDemoCode = () => {
  const code = `const monsters = {
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
            <img src={monster.avatar} alt={\avatar of \${monster.name}\`} />
          </div>
          <h3>Special Skills:</h3>
          <ul>
            {monster.specialSkills.map((skill, indx) => {
              return <li key={indx}>{skill}</li>;
            })}
          </ul>
        </section>
      );
    }`;
  return <CodeBlockJS code={code} />;
};
