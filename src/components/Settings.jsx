import ReactSlider from 'react-slider'
function Settings(){
    return(
        <div style={{textAlign:'left'}}>
            <label>Work minutes</label>
            <ReactSlider/>
            <label>break minutes</label>
        </div>
    )
}

export default Settings