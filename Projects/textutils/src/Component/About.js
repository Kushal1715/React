import React from 'react'

export default function About(props) {



    // const [btnText, setBtnText] = useState('Enable Dark Mode');

    // const toggleMode = ()=>{
    //     if(mode.color === 'white'){
    //         darkMode({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             border: '2px solid black'
    //         })
    //         setBtnText('Enable Dark Mode');
    //     }
    //     else{
    //         darkMode({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '2px solid white'
    //         })
    //         setBtnText('Enable Light Mode');
    //     }
    // }
    return (
        <div className='container my-3' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
            <h1 className='my-3'>About Us</h1>
            <p>This is text utils application where you can edit your text</p>
        </div>
    )
}
