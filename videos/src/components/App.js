import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

const KEY = 'AIzaSyC5CRrT9qQDSivq477B38ut6oKn8DXNqVE'

class App extends React.Component{
    state = {videos: [], selectedVideo: null}
    
    componentDidMount(){
        this.onTermSubmit('test')
    }

    onTermSubmit = async term => {
        const response = await youtube.get("/search", {
          params: {
            q: term,
            part: 'snippet', 
            type: 'video',
            maxResults: 5,
            key: `${KEY}`
          }
        })

        this.setState({videos: response.data.items, selectedVideo:response.data.items[0]})
    }

    onVideoSelect = video => {
        this.setState({selectedVideo:video})
    }

    render(){
        return <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default App