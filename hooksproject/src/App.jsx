// // import { useState, useCallBack } from "react";

// // function App() {
// //   const [length, setLength] = useState(8);
// //   const [numberAllowed, setNumberAllowed] = useState(false);
// //   const [charAllowed, setCharAllowed] = useState(false);
// //   const [password, setPassword] = useState("");

// //   const passwordGenerator = useCallBack(() => {
// //     let pass= ""
// //     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
// //     if(numberAllowed) str +="0123456789"
// //     if(charAllowed)  str +='!@#$%&*(){}:">'

// //     for (let i = 1; i <= length; i++)      {
// //       let char = Math.floor(Math.random()*str.length +1);
// //       pass = str.charAt(char)
// //     }
// //     setPassword(pass)
    

// //   }, [
// //     length,
// //     numberAllowed,
// //     charAllowed,
// //     setPassword,
// //   ]);
// //   return (
   
// //      <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-4 my-8 text-orange-500">
// //       <h1>Password Generator</h1>
// //       <div className="flex shadow rounded-lg overflow-hidden mb-4">
// //         <input 
// //         type="text"
// //         value={password}
// //         className="outline-none w-full py-1 px-3" 
// //         placeholder="password"
// //         readOnly/>
// //        <button>Copy</button>
// //       </div>
// //       <div className="flex text-sm gap-x-2">
// //         <div className="flex items-center gap-x-1">
// //           <input 
// //           type="range"
// //            name=""
// //             id=""
// //             min={6}
// //             max={100}
// //             value={length}
// //             className="cursor-pointer"
// //             onChange={(e)=>{setLength(e.target.value)}}
// //            />
// //            <label htmlFor="">Length:{length}</label>
// //         </div>
// //         <div className="flex items-center gap-x-1">
// //           <input type="checkbox" name="" id="numberInput"
// //           defaultChecked={numberAllowed}
// //           onChange={()=>{
// //             setNumberAllowed((prev)=>!prev)
// //           }}
// //            />
// //              <label htmlFor="numberInput">Numbers</label>
// //         </div>

// //       </div>
// //       <div className="flex items-center gap-x-1">
// //           <input type="checkbox" name="" id="charInput"
// //           defaultChecked={charAllowed}
// //           onChange={()=>{
// //             setCharAllowed((prev)=>!prev)
// //           }}
// //            />
// //              <label htmlFor="charInput">Char</label>
// //         </div>
// //      </div>
   
// //   );
// // }

// // export default App;

// // {/* <h1 className="text-4xl text-center text-white shadow-slate-800">
// // password generator
// // </h1> */}

// import { useState, useEffect } from "react";

// function App() {
//   const [length, setLength] = useState(8);
//   const [numberAllowed, setNumberAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false);
//   const [password, setPassword] = useState("");

//   const passwordGenerator = () => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     if (numberAllowed) str += "0123456789";
//     if (charAllowed) str += '!@#$%&*(){}:">';

//     for (let i = 1; i <= length; i++) {
//       let char = Math.floor(Math.random() * str.length);
//       pass += str.charAt(char);
//     }
//     setPassword(pass);
//   };

//   useEffect(() => {
//     passwordGenerator();
//   }, [length, numberAllowed, charAllowed]);

//   return (
//     <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-4 my-8 text-orange-500">
//       <h1 className="text-4xl text-center text-white shadow-slate-800">Password Generator</h1>
//       <div className="flex shadow rounded-lg overflow-hidden mb-4">
//         <input 
//           type="text"
//           value={password}
//           className="outline-none w-full py-1 px-3" 
//           placeholder="password"
//           readOnly
//         />
//         <button onClick={() => navigator.clipboard.writeText(password)}>Copy</button>
//       </div>
//       <div className="flex text-sm gap-x-2">
//         <div className="flex items-center gap-x-1">
//           <input 
//             type="range"
//             min={6}
//             max={100}
//             value={length}
//             className="cursor-pointer"
//             onChange={(e) => setLength(e.target.value)}
//           />
//           <label>Length: {length}</label>
//         </div>
//         <div className="flex items-center gap-x-1">
//           <input 
//             type="checkbox"
//             id="numberInput"
//             checked={numberAllowed}
//             onChange={() => setNumberAllowed(prev => !prev)}
//           />
//           <label htmlFor="numberInput">Numbers</label>
//         </div>
//         <div className="flex items-center gap-x-1">
//           <input 
//             type="checkbox"
//             id="charInput"
//             checked={charAllowed}
//             onChange={() => setCharAllowed(prev => !prev)}
//           />
//           <label htmlFor="charInput">Char</label>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



import { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += '!@#$%&*(){}:">';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-4 my-8 text-orange-500">
      <h1 className="text-4xl text-center text-white shadow-slate-800">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3" 
          placeholder="password"
          readOnly
        />
        <button onClick={() => navigator.clipboard.writeText(password)}>Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
            type="checkbox"
            id="numberInput"
            checked={numberAllowed}
            onChange={() => setNumberAllowed(prev => !prev)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
            type="checkbox"
            id="charInput"
            checked={charAllowed}
            onChange={() => setCharAllowed(prev => !prev)}
          />
          <label htmlFor="charInput">Char</label>
        </div>
      </div>
    </div>
  );
}

export default App;
