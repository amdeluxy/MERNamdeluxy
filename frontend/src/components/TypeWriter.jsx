import { useState, useEffect, useRef } from "react";



const TypeWriter = ( {text, timer = 100, delay = 2000} ) => {
    const index = useRef(0)
    const [currentText, setCurrentText] = useState('');

    useEffect(() => {
        index.current = 0
        setCurrentText('')
    },[text])

    useEffect(() => {

        const interval = setTimeout(() => {
            setCurrentText((value) => value + text.charAt(index.current))  
            index.current += 1
            if (index.current > text.length - 1) {
                clearInterval(interval);
                setTimeout(() => {
                  setCurrentText('');
                  index.current = 0;
                }, delay);
            }
        },timer);
        return () => clearInterval(interval)
        
        
    }, [currentText, text, delay]);

  return (
    <h1>{currentText}</h1>
    // <h1 className='px-4 py-20 text-3xl font-bold text-center uppercase'>Bringing your vision to life online</h1>
  )
}

export default TypeWriter;