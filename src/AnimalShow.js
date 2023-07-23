import bird from './svg/bird.svg'
import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import heart from './svg/heart.svg'
import horse from './svg/horse.svg'
import { useState } from 'react'

const mapSVG = {
    bird,
    cat,
    cow,
    dog,
    gator,
    heart,
    horse
}

function AnimalShow({ type }) {
    const [clicks, setClicks] = useState(0);

    const handleOnClick = () => {
        setClicks(clicks + 1);
    }

    return (
        <div onClick={handleOnClick}>
            <img alt='animal' src={mapSVG[type]} />
            <img alt='heart'
                src={heart}
                style={{ width: 10 + 10 * clicks }} />
        </div>
    );
}

export default AnimalShow;