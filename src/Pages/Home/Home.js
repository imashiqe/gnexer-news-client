import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const allnews = useLoaderData();

    return (
        <div>
            <h2>Gnexer News : {allnews.length}</h2>
            {
              allnews.map(news => <NewsSummaryCard 
                key={news._id}
                news={news}
              ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;