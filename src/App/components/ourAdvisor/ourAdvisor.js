import React from 'react'
import OurTeamCards from '../ourTeam/ourTeamCards'


function OurAdvisor() {
    const TeamList =[
        {id:1, name:"Lorem Ipsum", title:"Blockchain Advisor", image:"assets/images/team-five.png"},
        {id:2, name: "Lorem Ipsum", title:"Strategic Advisor", image:"assets/images/team-two.png"},
        {id:3, name: "Lorem Ipsum", title:"Security Attorney ", image:"assets/images/team-six.png"},
       

    ]
    return (
        <div className="container mx-auto pb-36 pt-14">
        <h2 className="text-4xl font-bold text-white text-center mb-10 mt-10">Our Advisors</h2>
        <div class="grid grid-cols-3 gap-4 mx-auto flex justify-center">
                {TeamList.map((item) => (
                    <OurTeamCards item={item} />

                ))}
                </div>
        </div>
    )
}

export default OurAdvisor
