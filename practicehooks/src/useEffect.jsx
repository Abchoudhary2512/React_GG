import  { useState, useEffect } from "react";
function EffectsDemoNoDependency() {

    const [ count,setCount] = useState(0);

    const addValue = ()=>{
        setCount(count+1);
    }
    const decValue = ()=>{
        setCount(count-1);
    }
    //code runs on every render
    useEffect(()=>{
    
        console.log("mounted")
    })

    //code runs after the initial render only(dependency)
    useEffect(()=>{
        console.log("dependency passs krdi yaha")
    },[])

    //on every update of the dependency this useEffect called and render every time
    useEffect(()=>{
        console.log("count mein kuch change hua hai")
    },[count])

    useEffect(()=>{
        console.log("render krdo isko nbhji",count);
        return()=> {
            console.log("return called",count)
        }
    },[count])


    //clean up to free memory and avoid the memory leak
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //       console.log('Interval running');
    //     }, 1000);
      
    //     // Cleanup function
    //     return () => {
    //       clearInterval(timer);
    //     };
    //   }, []);
    return(
        <>
        <button onClick={addValue}>Add+:{count} </button>
        <br />
        <button onClick={decValue}>Dec - :{count}</button>
        </>
    )
//   const [title, setTitle] = useState("default title");
//   const titleRef = useRef();
//   useEffect(() => {
//     console.log("useEffect");
//     document.title = title;
//   });
//   const handleClick = () => setTitle(titleRef.current.value);
//   console.log("render");
//   return (
//     <div>
//       <input ref={titleRef} />
//       <button onClick={handleClick}>change title</button>
//     </div>
//   );
}

export default EffectsDemoNoDependency