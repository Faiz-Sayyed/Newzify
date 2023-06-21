import React, { useState, useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import Logo from './assets/logo_2.png'
import InfoCards from './components/InfoCards/InfoCards.js'
import NewsArticles from './components/NewsArticles/NewsArticles.js'
import './App.css'

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
const scrollTo = (i) => {
    const element = document.getElementById(i);
    if (element) {
        console.log(element);
        element.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
}

const App = () => {
    const [articles, setArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(0);

    useEffect(() => {
        var alanBtnInstance = alanBtn({
            key: REACT_APP_API_KEY,
            onCommand: ({ command, articles, number }) => {
                if (command === 'newHeadlines') {
                    setArticles(articles);
                    setActiveArticle(-1);
                } else if (command === 'read') {
                    if (number > 0 && number <= articles.length) {
                        scrollTo(number);
                        setActiveArticle(number - 1);
                        alanBtnInstance.playText(articles[number - 1].title);
                        alanBtnInstance.playText(articles[number - 1].description);
                    } else {
                        alanBtnInstance.playText(`Sorry article $(Number) does not exists. Please try again...`);
                    }
                } else if (command === 'highlight') {
                    scrollTo(number);
                    setActiveArticle((activeArticle) => activeArticle + 1);
                } else if (command === 'open') {
                    if (number > 0 && number <= articles.length) {
                        scrollTo(number);
                        setActiveArticle(number - 1);
                        const article = articles[number - 1];
                        window.open(article.url, '_blank');
                        alanBtnInstance.playText('Opening...');
                    }
                    else {
                        alanBtnInstance.playText(`Sorry article $(Number) does not exists. Please try again...`);
                    }
                }
            }
        })
    }, []);

    return (
        <div>
            <div className="header">
                <img src={Logo} className='logo' alt='Alan Logo' />
            </div>
            {
                (!articles.length) ?
                    <div>
                        <div className='title'>Stay up to date with the latest news from around the world brought to you by Alan the AI voice assistant.</div>
                        <InfoCards />
                    </div>
                    :
                    <div>
                        <NewsArticles articles={articles} activeArticle={activeArticle} />
                    </div>
            }
        </div>
    )
}

export default App