import React from 'react'
import OurTeamCards from './ourTeamCards'

function OurTeam() {
    const TeamList =[
        {id:1, name:"Lorem Ipsum", title:"CEO / Co-Founder", image:"assets/images/team-one.png"},
        {id:2, name: "Lorem Ipsum", title:"Co-Founder", image:"assets/images/team-two.png"},
        {id:3, name: "Lorem Ipsum", title:"CTO", image:"assets/images/team-three.png"},
        {id:4, name: "Lorem Ipsum", title:"Project Manager", image:"assets/images/team-four.png"},
        {id:5, name: "Lorem Ipsum", title:"Marketing Director", image:"assets/images/team-five.png"},
        {id:6, name: "Lorem Ipsum", title:"Community Manager", image:"assets/images/team-six.png"},
        {id:7, name: "Lorem Ipsum", title:"Project Manager", image:"assets/images/team-four.png"},
        {id:8, name:"Lorem Ipsum", title:"CEO / Co-Founder", image:"assets/images/team-one.png"},

    ]
    return (
        <div style={{background:'url(/assets/images/our-team-bg.png)center left no-repeat'}}>
            <div className="container mx-auto pb-36 pt-14">
                <h2 className="text-4xl font-bold text-white text-center mb-10">Our Team</h2>
                <div class="grid grid-cols-4 gap-4 mx-auto justify-center">
                {TeamList.map((item,index) => (
                    <>
                        {(index === 0 || index === 2) &&
                            <div className="p-8 rounded-xl mb-3 mr-1 text-white text-center"></div>
                        }
                        <OurTeamCards item={item} />
                    </>
                ))}
                </div>
                </div>
          </div>
         

    )
}

export default OurTeam
