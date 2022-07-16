import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Lists from './lists/lists'
import { Api } from '../service/api'

import debounce from 'lodash/debounce'
import './style.css'
import Header from './header/header'

const URL = "https://api.shrtco.de/v2/shorten?url="



const Home = () => {

    const [input, setInput] = useState("")
    const [lists, setLists] = useState([])

    const fetchURL = async (input) => {
        let res = await Api(URL + input)
        if(res.error){
            alert(res.error)
        }else{
            setLists((prev)=>{
                return [...prev,{originalURL:input, shortURL:res.result.full_short_link}]
            })
            // console.log(res)
        }
        
    }

    const debounceInput = useCallback(debounce(fetchURL,1500),[])

    // const debouceRef = useRef(debounce(fetchURL,2000))

    useEffect(() => {

        if(input){
            debounceInput(input)
        }
        
        // debouceRef.current(input)

    }, [input])


    return (
        <div className='home'>
            <Header />
            <input
                type="text"
                placeholder='Shorten link'
                value={input}
                onChange={(e) => { setInput(e.target.value) }}
            />
            
            <Lists
                lists={lists}
            />
        </div>
    )
}

export default Home;