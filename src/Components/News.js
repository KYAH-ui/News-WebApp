import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {

constructor() {
    super();
    this.state = {
    articles : []
}
}
async componentDidMount () {
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=147ea7d5c39844488b46ec504fd7a58b";
    let data = await fetch (url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles});
    }

    prevPg = ()=>{
        console.log("Previously clicked");
    }

    nxtPg= ()=> {
    console.log("Next clicked");
    }

  render() {
    return (
      <div>
        <div className='container my-3'>
          <h2>Headlines</h2>
          <div className='row'>
            { this.state.articles.map((element) =>{
              return  <div className='col-md-4' key= {element.url}>
              <NewsItems title={element.title ? element.title.slice(0.50):""} description={element.description} imgUrl ={element.urlToImage} newsUrl = {element.url}/>
                      </div>
          })}
            </div>
            <div className= "container d-flex justify-content-between">
            <button type="button" onClick = {this.prevPg} className="btn btn-secondary ">&larr;Previous</button>
            <button type="button" onClick = {this.nxtPg} className="btn btn-secondary ">&rarr;Next</button>
            </div>
            </div>
        </div>
      
    )
  }
}

export default News