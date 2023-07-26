import React, {useState, useEffect, useRef} from 'react'
import { Form, FormText, FormGroup, Label, Input, Button } from 'reactstrap'
import TextField from '@mui/material/TextField'


const Exercise = () => {
//     const ThoughtsRef = useRef(null);
//     const dateRef =useRef(null); 

//     const [Thoughtsoftheday, setThoughtsoftheday] = useState(localStorage.getItem('Thoughtsoftheday') ? JSON.parse(localStorage.getItem('Thoughtsoftheday'))
//     : []);

//     function handleSubmit(event) {
//         event.preventDefault();

//             const eventfortoday = 
//             {  
//             Thoughtsoftheday:ThoughtsRef.current= (''),
//             date:dateRef.current = ('')
            
//             }         
//             setThoughtsoftheday([...Thoughtsoftheday.eventfortoday])
        
        
//         }    
//         useEffect(() => {
//             localStorage.setItem('Thoughtsoftheday',JSON.stringify(Thoughtsoftheday));
        
//         }, [Thoughtsoftheday]);
//         console.log(Thoughtsoftheday)
//     return (
//     <div>
//     <Form>
//     <FormGroup>
//     <FormText className='m-2'>Thoughts for the day:</FormText><br></br>
//     <TextField type='text' name='thoughts' id='thoughts' className='m-2' inputRef={ThoughtsRef}></TextField><br></br>
//     <FormText className='m-2'>Date:</FormText><br></br>
//     <TextField type='date' name='date' id='date' className='m-2' inputRef={dateRef}></TextField><br></br>


//     <Button className='btn btn-danger m-4' onSubmit={handleSubmit}>Send</Button>
// </FormGroup>
// </Form>
// </div>
// )
}

export default Exercise