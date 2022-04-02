import React, {useState} from 'react';
import './Home.scss';
import Searchbar from '../Searchbar/Searchbar'
import movieInfo from '../MovieInfo';
import movieicon from './icons/icon-category-movie.svg';
import tvicon from './icons/icon-category-tv.svg';
import bookmarkEmpty from './icons/icon-bookmark-empty.svg'
import bookmark from './icons/icon-bookmark-full.svg';
import play from './icons/icon-play.svg'

const Home = (props) => {

    const bookmarks = props.bookmarks;
    const trending = movieInfo.filter(item => item.isTrending === true);
    const recommended = movieInfo.filter(item => item.isTrending === false);
    const [showContent, setShowContent] = useState(false);

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
            <Searchbar
            bookmarks={bookmarks}
            showContent={showContent}
            setShowContent={setShowContent}/>
            <section className={!showContent ? 'trending': 'trending hidden'}>
                <h1>Trending</h1>
                <ul>
                    {trending.map((item, index) =>{
                        return(
                            <li style={{backgroundImage: `url(${item.thumbnail.trending.large})`}}
                            key={index}>
                                <div className='filter'>
                                    <button className='bookmark'
                                    onClick={() => changeBookmark(item)}>
                                        <img src={changeEmpty(item)} alt='' id={item.title}/>
                                    </button>
                                    <button className='play'>
                                        <img src={play} alt=''/>Play
                                    </button>
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
                                    <h2>{item.title}</h2>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </section>
            <section className={!showContent ? 'recommended': 'recommended hidden'}>
                <h3>Recommneded for you</h3>
                <ul>
                    {recommended.map((item, index) =>{
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
 
export default Home;