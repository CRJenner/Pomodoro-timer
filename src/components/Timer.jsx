import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PauseButton from './PauseButton';
import PlayButton from './PlayButton';
import SettingsButton from './SettingsButton';

function Timer  ()  {
    const red = '#f54e4e';
    const green = '#4aec8c';
    const percentage = 66;

return (
        <div>
    <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({rotation: 0.0, strokeLinecap: '16px', 
    textColor: 'fff',
    pathColor: red,
    tailColor: 'rgba(255, 255,255,.2)',
    })}/>
    <div style= {{marginTop: '20px'}}>
<PlayButton />
<PauseButton />
    </div>
    <div style= {{marginTop: '20px'}} >
<SettingsButton/>
    </div>

        </div>
)
}
export default Timer