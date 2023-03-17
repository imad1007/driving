import React,{useEffect} from 'react'


export default function Test() {
    const handlclick =() =>{
        const newUser = {
            id_user:"6",
            full_name:"imadfrfrfr",
            email: "imattttrfrf2@gmail.com",
            phone:"0645938383"
          }
      
          fetch('https://abdelkarimauto-ecole.000webhostapp.com/api/updateuser', {
            method: 'POST',
            // headers: {
            //   'Content-Type': 'application/json'
            // },
            body: JSON.stringify({
              email: 'imad32@gmail.com',
              password: 'imad2002'
             
            })
          }).then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data=>console.log(data))
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });
          
    
}
  return (
    <div><button onClick={handlclick}>Click me</button></div>
  )
}
