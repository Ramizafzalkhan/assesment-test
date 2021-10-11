import React from 'react'

function OurTeamCards(props) {
    return (
        <div>
            <div className="p-8 bg-theme rounded-xl mb-3 mr-1 text-white text-center">
                <img src={props.item.image} className="mx-auto" alt="imag" />
                <h3 className="text-xl font-bold mt-5 mb-2.5">{props.item.name}</h3>
                <p className="mb-10 font-bold">{props.item.title}</p>
                <a href="#">LinkedIn
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-auto" style={{ display: 'inline-block' }} viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default OurTeamCards
