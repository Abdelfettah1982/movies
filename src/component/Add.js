import React from 'react';
import {Card,CardHeader,CardBody,CardFooter,Typography,} from "@material-tailwind/react";

const MoCard = ({myimage,Title,Year,Runtime,Genre,Directors,Actors,Plot}) => {
  return (
    <><Card className="" style={{
      width:'319%',
    
 
      boxShadow:'0 0px 1px 1px rgba(0,0,0,0.25) ',
      padding:'50px',
      spacing :'50px'
   
   
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
        
    
     
      </Typography></CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
       
        <Typography style={{
     color: "Black",
     padding: "10px",
     fontFamily: "Arial",
     textAlign: 'left'
   
  }}>
 
       
        </Typography>
      </CardFooter>
    </Card>
      
   </>
      
   
       

);
}
export {MoCard}