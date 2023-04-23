import {MovieList} from './component/MovieList.js';
import {Nav} from './component/Nav.js';
import {Movieselect} from './component/Moviecard.js';
import {React} from 'react';
import {Add} from './component/Addmovie';
import { useState } from "react";
import {allMovies} from "./component/movies.json";


function App() {
 


  return (
    
   <>
   <Nav/>
  
      <main>
  
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <MovieList />    
          <div className="px-4 py-6 sm:px-0">
       

            <div className="border-2  border-gray-1 rounded-lg h-9">
              App movie
             
            </div>
          </div>
          {/* <!-- /End replace --> */}
        </div>
      </main>
   </>


  );
}

export default App;
  
 
 
 


