import React, { useState } from 'react';
import './Movies.scss'
import Searchbar from '../Searchbar/Searchbar'
import movieicon from './icons/icon-category-movie.svg';
import tvicon from './icons/icon-category-tv.svg';
import bookmarkEmpty from './icons/icon-bookmark-empty.svg'
import bookmark from './icons/icon-bookmark-full.svg';
import play from './icons/icon-play.svg';

const Movies = (props) => {

    const bookmarks = props.bookmarks;
    const movieList =props.movieList;
    const [showContent, setShowContent] = useState(false)

    const changeBookmark = (item) =>{
        if(!item.isBookmarked){
            item.isBookmarked = true;
            bookmarks.push(item);
            document.getElementById(item.title).src = bookmark;
        } else{
            item.isBookmarked = false;
            bookmarks.splice(bookmarks.indexOf(item), 1)
            document.getElementById(item.title).src = bookmarkEmpty;
        }
        console.log(bookmarks);
    }

    const changeEmpty = (item) =>{
        if (!item.isBookmarked){ 
            return bookmarkEmpty
        } else{
            return bookmark
        }
    }
    
    return (
        <main>
            <Searchbar bookmarks={bookmarks}
            showContent={showContent}
            setShowContent={setShowContent}/>
            <section className={!showContent ? 'movies' : 'movies hidden'}>
                <h1>Movies</h1>
                <ul>
                {movieList.map((item, index) =>{
                        return(
                            <li key={index}>
                                <div className='thumbnail'
                                style={{backgroundImage: `url(${item.thumbnail.regular.large})`}}>
                                    <div className='filter'>
                                        <button className='bookmark'
                                        onClick={() => changeBookmark(item)}>
                                            <img src={changeEmpty(item)} alt='' id={item.title}/>
                                        </button>
                                        <button className='play'>
                                            <img src={play} alt=''/>Play
                                        </button>
                                    </div>
                                </div>
                                <div className='movie-info'>
                                    <p>{item.year}</p>
                                    <div className='circle-seperator'/>
                                    <p>
                                        <img src={item.category === "Movie" ? movieicon : tvicon} alt=''/>
                                        {item.category}
                                    </p>
                                    <div className='circle-seperator'/>
                                    <p>{item.rating}</p>
                                </div>
                                <h4>{item.title}</h4>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </main>
    );
}
 
export default Movies;