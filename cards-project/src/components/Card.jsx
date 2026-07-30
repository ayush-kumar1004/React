import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
    return (
        <div className="card">

            <div className="top">
                <img src={props.brandLogo} alt="" />
                <button>Save <Bookmark size={12} /> </button>
            </div>

            <div className="center">
                <h3>{props.company} <span>{props.date}</span></h3>
                <h2>{props.post}</h2>
                <div>
                    <h4>{props.tagn}</h4>
                    <h4>{props.tagm}</h4>
                </div>

            </div>

            <div className="bottom">
                <div>
                    <h3>{props.pay}</h3>
                    <h5>{props.location}</h5>

                </div>
                <button>Apply now</button>
            </div>

        </div>
    )
}

export default Card
