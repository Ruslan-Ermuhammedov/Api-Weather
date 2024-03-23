import axios from 'axios';
import React, { useEffect, useReducer, useRef, useState } from 'react'
import { weatherInitialState, weatherReducer } from '../../reducer/weatherReducer/weatherReducer';
import RetsepUi from './RetsepUi';
import '../Retsep/Retsep.css'
import { MagnifyingGlass } from 'react-loader-spinner'
function Retsep() {
    const [state, dispatch] = useReducer(weatherReducer, weatherInitialState)
    const [query, setQuery] = useState("chicken")
    const inputRef = useRef()

    const App_ID = "f724d2c4";
    const App_KEY = "181b9a77d1a1c3c5c43eac5266591591 ";
    const searchRetsep = (e) => {
        e.preventDefault();
        setQuery(inputRef.current.value)
        // alert("qidirmoqda")
    }
    useEffect(() => {
        function fetchData() {
            dispatch({ type: "LOADING" })
            axios.get(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_KEY}`)
                .then(res => dispatch({ type: "SUCCESS", payload: res.data?.hits }))
                .catch(() => dispatch({ type: 'REJECTED', payload: "Qandaydur hatolik bor" }))
        }
        fetchData()
    }, [query])
    return (
        <div className='RetsepContener'>
            <form onSubmit={searchRetsep}>

                <input ref={inputRef} className='SearchRetsep' type="text" placeholder='ovqan nomini yozing' />
            </form>
            {state.isLoading && (<h1 className='Loader'>

                <MagnifyingGlass
                    visible={true}
                    height="300"
                    width="300"
                    ariaLabel="MagnifyingGlass-loading"
                    wrapperStyle={{}}
                    wrapperClass="MagnifyingGlass-wrapper"
                    glassColor='#c0efff'
                    color='#e15b64'
                />
            </h1>)
            }
            {state.error && <h1>{state.error} </h1>}
            {state.isSuccess && <RetsepUi data={state.datas} />}
        </div>
    )
}

export default Retsep

// const App_ID="f724d2c4";
//   const App_KEY="181b9a77d1a1c3c5c43eac5266591591 ";
// const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_KEY}`);