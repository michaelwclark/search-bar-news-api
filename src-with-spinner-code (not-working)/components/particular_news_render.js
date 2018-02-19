//This component will be showing the result from the search bar. 

import React, {Component} from 'react';



class ParticularNews extends Component{


    news_list = ({allNews}) => {
        
                if(allNews){
            return allNews.map((item) =>{
                return(
                    <div>
                    <a href = {item.url}><img src= {item.urlToImage} /></a>

                    <h1><a href={item.url} >{item.title}</a></h1>
                    <br />
                    {item.description}

                    <br/>
                    {item.author}<br/>
                          
                </div>
                )
            })
        }



    }

    render(){
        return(
            <div>

            {this.news_list(this.props)}
            </div>
        )
    }
}


export default ParticularNews;