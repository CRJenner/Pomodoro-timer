import { useContext } from 'react'
import ReactSlider from 'react-slider'
import SettingContext from '../Context/SettingContext'

function Settings(){
    const settingTimer = useContext(SettingContext)
    return(
        <div style={{textAlign:'left'}}>
            <label>meditation {settingTimer.meditationMinutes}:00 minutes</label>
            <ReactSlider
            className= {'slider'}
            thumbClassName={'thumb'}
            trackClassName={'track'}
            value={settingTimer.meditationMinutes}
            min={1}
            max={60}
            />
        </div>
    )
}

export default Settings