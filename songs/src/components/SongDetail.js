import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({ song }) => {
    if (!song){
        return <div>Select a song</div>
    }
    return (
        <div>
            <h3>Details for:</h3>
            <p>Title: {song.title}
            <br />
            Durartion: {song.duration}
            </p>
        </div>)
}
const mapStateToProp = state =>{
    return { song: state.selectedSong }
}

export default connect(mapStateToProp)(SongDetail)