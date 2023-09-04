import React, { useRef, useState, createContext } from 'react';
import Grandpa from './Grandpa';
import ThemeSwitcher from './ThemeSwitcher';

type BarkOrLight = "Dark" | "Light";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
    }
  }
}

export const TextContext = createContext<{ text: string; setText: React.Dispatch<React.SetStateAction<string>> } | undefined>(undefined);

export const ThemeContext = createContext<{ dOrL: BarkOrLight; setBarkOrLight: React.Dispatch<React.SetStateAction<BarkOrLight>> } | undefined>(undefined);

export const UserContext = createContext<{ user: User; setBarkOrLight: React.Dispatch<React.SetStateAction<User>> } | undefined>(undefined);

const App = () => {
  const [text, setText] = useState<string>("Hello world!!!");
  const [dOrL, setBarkOrLight] = useState<BarkOrLight>("Dark");
  const myRefDiv = useRef<HTMLDivElement | null>(null);

  if (myRefDiv.current) {
    if (dOrL === "Dark") {
      myRefDiv.current.style.background = "black";
      myRefDiv.current.style.color = "white";
    } else {
      myRefDiv.current.style.background = "white";
      myRefDiv.current.style.color = "black";
    }
  }

  return (
    <div ref={myRefDiv} style={{ margin: "0px auto", width: "1280px", height: "600px", display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center", flexDirection: "column" }}>
      <TextContext.Provider value={{ text, setText }}>
        <Grandpa />
      </TextContext.Provider>
      <ThemeContext.Provider value={{ dOrL, setBarkOrLight }}>
        <ThemeSwitcher />
      </ThemeContext.Provider>
      {/* <UserContext.Provider value={ }>

      </UserContext.Provider> */}
    </div>
  );
}

export default App;
