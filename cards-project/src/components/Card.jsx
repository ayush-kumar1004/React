import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = () => {
    return (
        <div className="card">

            <div className="top">
                <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg" alt="" />
                <button>Save <Bookmark size={12} /> </button>
            </div>

            <div className="center">
                <h3>Amazon <span>5 days ago</span></h3>
                <h2>Senior UI/UX Designer</h2>
                <div>
                    <h4>Part-Time</h4>
                    <h4>Senior Level</h4>
                </div>

            </div>

            <div className="bottom">
                <div>
                    <h3>$120/hr</h3>
                    <h5>Mumbai, India</h5>

                </div>
                <button>Apply now</button>
            </div>

        </div>
    )
}

export default Card
