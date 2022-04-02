import React, { useState, useEffect } from 'react';
import search from './icon-search.svg';
import './Searchbar.scss';
import MovieInfo from '../MovieInfo';
import movieicon from './icons/icon-category-movie.svg';
import tvicon from './icons/icon-category-tv.svg';
import bookmarkEmpty from './icons/icon-bookmark-empty.svg'
import bookmark from './icons/icon-bookmark-full.svg';
import play from './icons/icon-play.svg';

const Searchbar = (props) => {

    const bookmarks = props.bookmarks;
    const setShowContent = props.setShowContent;
    const showContent = props.showContent;
    const [input, setInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchTag, setSearchTag] = useState('');
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        loadContent();
    }

    const loadContent = () =>{
        setShowContent(true);
        setSearchResults(MovieInfo.filter(item => ((item.title).toLowerCase()).includes(input.toLowerCase())))
        setSearchTag(input)

    }
    
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

    useEffect(() =>{
        setShowContent(false)
    }, [input, setShowContent])

    return (
        <section className='search'>
            <div className='searchbar'>
                <img src={search} 
                alt=''
                aria-hidden='true' />
                <form onSubmit={handleSubmit}>
                    <input
                    id='search-input'
                    placeholder='Search for movies or TV series'
                    aria-label='Search media'
                    role='search'
                    onChange={(event) => setInput(event.target.value)} 
                    />
                </form>
            </div>
            <div className={showContent ? 'searchbar-content' : 'searchbar-content hidden'}>
                <h1> Found {searchResults.length} results for '{searchTag}'</h1>
                <ul>
                {searchResults.map((item, index) =>{
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
            </div>
        </section>
    );
}
 
export default Searchbar;