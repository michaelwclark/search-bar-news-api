//This component will be showing the result from the search bar. 

import React, {Component} from 'react';



class ParticularNews extends Component{
    render(){
        const { articles, loading } = this.props;
        if(loading) return 'Loading news...'
        if(!articles) return 'No news found'
        return articles.map(article => {
            return (
                <div>
                    <a href = {article.url}><img src= {article.urlToImage} /></a>

                    <h1><a href={article.url} >{article.title}</a></h1>
                    <br />
                    {article.description}

                    <br/>
                    {article.author}<br/>
                          
                </div>
            )
        })
    }
}


export default ParticularNews;