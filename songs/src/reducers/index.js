import {combineReducers} from 'redux'

const songsReducer = () =>{
    return [
        {title: 'Illegal Weapon', duration: '4:05'},
        {title: 'Nachi Nachi', duration: '3:11'}
    ]
}

const selectedSongReducer = (selectedSong = null, action) =>{
    if (action.type === 'SONG_SELECTED'){
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
})