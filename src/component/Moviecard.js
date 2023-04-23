import React from 'react';
import {Card,CardHeader,CardBody,CardFooter,Typography,} from "@material-tailwind/react";

const MovieCard = ({myimage,Title,Year,Runtime,Genre,Directors,Actors,Plot}) => {
  return (
    <><Card className="w-80" style={{
      width:'100%',
 
      boxShadow:'0 0px 1px 1px rgba(0,0,0,0.25) ',
    
       
      padding:'50px'
   
  }}>
      <CardHeader floated={false} className="h-1">
      <Typography variant="h4" color="blue-gray">
      
        </Typography>  
      
      </CardHeader>

      <CardBody className="text-center">
        <Typography variant="h1" className="mb-2">
        <h1 style={{
          color: "black",
          width:'100%',
     
     padding: "10px",
     fontFamily: "Arial",
     textAlign: 'center',

     backgroundColor: "lightblue"
    
   
  }}> Title : {Title}</h1>
        </Typography>
        <img
          src={myimage} alt="img-blur-shadow" 
      
       
        />
        <Typography style={{
     color: "DodgerBlue",
     padding: "10px",
     fontFamily: "Arial",
     textAlign: 'left'
    
   
  }}>
        
    
        <span className="text-sm mt-2" >
          Year:
          <span className="m-2" > {Year}</span><br/>
          Runtime:
          <span className="m-2"> {Runtime}</span><br/>
        </span>
        <span className="text-sm mt-2">
          Genre:
          <span className="m-2"> {Genre}</span><br/>
        </span>
        <span className="text-sm mt-2">
          Director:
          <span className="m-2">{Directors}</span><br/>
        </span>
        <span className="text-sm mt-2">
          Actors:
          <span className="m-2">{Actors}</span><br/>
        
         
        </span>
      
      </Typography></CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
       
        <Typography style={{
     color: "Black",
     padding: "10px",
     fontFamily: "Arial",
     textAlign: 'left'
   
  }}>
        résumé : <p className="text-sm mt-2">{Plot}</p>
       
        </Typography>
      </CardFooter>
    </Card>
      
   </>
      
   
       

);
}
export {MovieCard}