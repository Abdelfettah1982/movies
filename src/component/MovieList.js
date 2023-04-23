import React from 'react';
import { useEffect, useState, useMemo } from "react";
import {MovieCard} from "./Moviecard";
import {Add} from "./Addmovie";
import {SearchBox} from "./Movies";
import genreOptions from "./genreOptions.json";
import allMovies from "./movies.json";
import ReactDOM from "react-dom"
import { Outlet, Link } from "react-router-dom";







const MovieList = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
    const [genre, setGenre] = useState("");
    const [searchTerm, setSearchTem] = useState("");
    const [searches, setSearches] = useState([])
    const [querytitle, setQuerytitle] = useState("")
    const [queryposter, setQueryposter] = useState("")
    const [queryyear, setQueryyear] = useState("")
    const [queryruntime, setQueryruntime] = useState("")
    
    

    const movies = useMemo(() => {
        if (genre === "") {
          if (searchTerm === "") {
            return allMovies;
          } else {
            return allMovies.filter((movie) => {
              const searchFields =
                `${movie.Title.toLowerCase()} ` +
                `${movie.Year} ` +
                `${movie.Director}` +
                `${movie.Actors}` +
                `${movie.Plot}`;
              return searchFields.includes(searchTerm.toLowerCase());
            });
          }
        }
        return allMovies.filter((movie) => {
          const movieGenre = movie.Rated.toLowerCase();
         
          return movieGenre.includes(genre.toLowerCase());
        });
      }, [genre, searchTerm]);
    
      useEffect(() => {
        if (searchTerm !== "") {
          setGenre("");
        }
      }, [searchTerm]);

      const openModal = () => {
        setIsOpen(true);
      };
      const closeModal = () => {
        setIsOpen(false);
      };
	return (
		<>


        
      

<div class="container mx-auto my-0 p-0">
        <div class="md:flex no-wrap md:-mx-1 ">
       
      
        
      <a href="#example"style={{
      width:'10%',
      color : "black",

    fontFamily: "Arial",
    textAlign: 'center',
    height :'1%',

    backgroundColor: "lightblue"
      
   
  }}
      >
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="#CCCDFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
     </svg>Add Movie </a>
  
    
          


    <div class="w-full md:w-12/12 mx-2 h-64">
    <form className="flex flex-col w-40">
    
    <input
      className="border p-1 px-3 my-3"
      name="searchMovie"
      placeholder="Search Movie"
      value={searchTerm}
      onChange={(e) => setSearchTem(e.target.value)}
    />
    
  </form>
  <form className="flex flex-col w-50">
    <select
      className="px-2 py-1 border w-40"
      value={genre}
      onChange={(e) => setGenre(e.target.value)}
    >
      {genreOptions.map((option, i) => {
        return (
          <option className="py-2" value={option.value} key={i}>
            {option.label}
          </option>
          
        );
      })}
    </select>
   
    </form>
           
     
      </div>
          </div>

          <div className="lg:grid lg:grid-cols-3 lg:gap-3">
          
          
          {movies.map((movie, index) => {
      return (

        < MovieCard key={index} myimage={`https://m.media-amazon.com/images${movie.Poster}`} Title ={movie.Title}
      Year ={movie.Year}  Runtime ={movie.Runtime} Genre={movie.Genre.join(", ")} Directors ={movie.Director} Actors ={movie.Actors.join(", ")} 
		
		Plot ={movie.Plot}
	
		/>
    
    
 
   );
   }) }
    
    <Add />
  
  </div> 

  
  
    
    
  
  
  </div>

		</>
	);
};

export {MovieList}