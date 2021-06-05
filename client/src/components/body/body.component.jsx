import React,{useState,useEffect} from 'react';

import "./body.styles.css";

import { createClient } from 'pexels';
import ImageCard from '../image_card/image_card.component';

function Body() {

    const API_KEY="563492ad6f91700001000001992046903f244cf6a3263f2b63943a80";
  
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");

    let tempArry = [];

    const client = createClient(API_KEY);

    useEffect(() => {
      doSearch();
    }, [query]);
  
  
    const updateSearch = e => {
      setSearch(e.target.value);
      // console.log("Search : ",search);
    }
  
    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch("");
      setValue(search);
    }

  function doSearch() {
    setImages([]);
    client.photos.search({ query, per_page: 32 }).then(photo => {
  
      if (photo.photos) {
        for (var i = 0; i<photo.photos.length; i++) {
          tempArry.push(photo.photos[i].src.original);
      }
      setImages(tempArry);
      }
      
        })
        // console.log(images);
    }
    return (
        <div className="bodyy">
            <h1 className="title">Get Best Images here</h1>

        <form onSubmit={getSearch}>
            <div className="search_feild">
                <input type="text" className="inputt" value={search} onChange={updateSearch} ></input>
                <button className="search_icon" ><i class="fas fa-search"></i></button>
            </div>
        </form>
        <h3 className="value">{value}</h3>
            <div className="images_container">
                {images.length > 0 ? images.map((image) => {
                    return (
                        <ImageCard Isrc={image} />)
                    
                })
                    :
                    console.log("Empty Array! ")
                }
            </div>
        </div>
    )
}

export default Body


