import { useState, useCallback, useEffect , useRef } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#%&*()+:;<>?";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  //Use Ref
  const passRef = useRef(null);

  useEffect(() =>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])

  const copyToClipboard = useCallback(()=>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password);
  },[password])

  return (
    <>
      <div className="bg-gray-600 w-full max-w-md max-h-40 mx-auto text-orange-200 px-10 py-8 shadow-2xl rounded-lg ">
        <h1 className="font-bold text-center text-xl">Password Generator</h1>
        <div className="flex shadow rounded-lg mb-4 overflow-hidden">
          <input
            type="text"
            className="text-black outline-none w-full py-1 px-3"
            value={password}
            readOnly
            placeholder="password"
            ref={passRef}
          />
          <button 
          onClick={copyToClipboard}
          className="outline-none w-16 bg-green-500 text-white py-0.5 px-3 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 justify-between py-2">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer w-20"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="range">Length {length}</label>
          <input
            type="checkbox"
            defaultChecked={setNumberAllowed}
            className="cursor-pointer"
            id="number"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="number">Numbers</label>
          <input
            type="checkbox"
            defaultChecked={setCharAllowed}
            className="cursor-pointer"
            id="character"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="character">Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
