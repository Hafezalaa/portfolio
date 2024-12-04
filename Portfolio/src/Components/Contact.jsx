import { ReactTyped } from "react-typed";

const Contact = () => {
  return (
 <>
        <h1 className="text-2xl my-10 text-center">
          <ReactTyped strings={["Hello! <strong>.</strong> <strong>.</strong> <strong>.</strong> <strong>.</strong> <strong>.</strong> <strong>.</strong> <strong>.</strong> <strong>.</strong> <strong>.</strong> <strong>.</strong> <strong>.</strong> <strong>.</strong> <strong>.</strong>"]} typeSpeed={150} backSpeed={20}  loop></ReactTyped>
        </h1>
      <div className="h-svh mb-[50px] ml-[120px] md:mt-[120px] md:ml-0 p-8 bg-gradient-to-b from-stone-50 via-stone-400 to-stone-50 pl-24 pt-36">
        
      
          <h1>a************@***.com</h1>
          <h1>+49 152 ********</h1>
          <h1>github.com/Hafezalaa</h1>
        </div>
 </>
  )
}

export default Contact