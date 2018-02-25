//This will create a searchbar
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNews, allTheNews } from '../actions';
import { Provider } from 'react-provider'









//COMPONENT
import ParticularNews from '../components/particular_news_render'
//import loading from '../components/loading'

class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            keyword: ''
        }
    }

    specificNews = (event) => { // this is for the particular news. probably be  changing the name in the future
        event.preventDefault();
        this.props.getNews(this.state.keyword)


    }
    newState = (event) => {
        this.setState({
            keyword: event.target.value
        })

    }

   // componentWillMount(){
     //   return(
       //     this.props.loading()
          
        //)
   // }

    componentDidMount() {
        this.props.allTheNews()
        // console.log(this.state)

    }

    

    render() {
        const {articles, loading} = this.props;

        return (
            <div className="main_search">
       
                <form onSubmit={this.specificNews}>
                    <input type="text" value={this.state.keyword} onChange={this.newState} value={this.state.keyword} />
                </form>
             
     
                <ParticularNews articles={articles}  loading={loading} />
                
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getNews, allTheNews }, dispatch);
}

function mapStateToProps(state) {
    return {
        articles: state.news.articles,
        loading: state.news.loading
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Search)
