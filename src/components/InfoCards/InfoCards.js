import React from 'react'
import './styles.css'

const infoCards = [
    {
        id: '1',
        color: '#00838f',
        title: 'Latest News:',
        text: 'Give me the latest news'
    },
    {
        id: '2',
        color: '#283593',
        title: 'Sources:',
        info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed...',
        text: 'Give me the news from CNN'
    },
    {
        id: '3',
        color: '#4527a0',
        title: 'Terms:',
        info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...',
        text: 'What\'s up with PlayStation '
    },
    {
        id: '4',
        color: '#1565c0',
        title: 'Categories:',
        info: 'Business, Health, Entertainment, General, Science, Sports, Technology',
        text: 'Give me the latest Technology news'
    },
];

const InfoCards = () => {
    return (
        <div className='cards'>
            {
                infoCards.map((card) => (
                    <div className='card' key={card.id}>
                        <div className='card-title'>
                            {card.title}
                        </div>
                        <div className='card-info'>
                            {card.info}
                        </div>
                        <div className='card-text'>
                            <div className='div'>Try saying...</div>
                            <div>{card.text}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default InfoCards