import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail,FaTaxi} from 'react-icons/fa';
import { RiWifiFill } from "react-icons/ri";
import { MdRestaurantMenu } from "react-icons/md";

export default class Services extends Component {
    state={
        services:[
            {
                icon:<RiWifiFill/>,
                title: "Free-Wifi",
                info: "Round the clock Free Wifi facility available for our guests upto four devices per room."
            },
            {
                icon:<FaCocktail/>,
                title: "Complimentary Cocktails",
                info: "Our hotels have free cocktail tastings, where you can sample local wines, mocktails and spirits for free!."
            },
            {
                icon:<FaTaxi/>,
                title: "Free Shuttle",
                info: "We offer free pickup service in our chauffeured vehicles for our presidential guests. "
            },
            {
                icon:<MdRestaurantMenu/>,
                title: "Discounted Dine-in",
                info: "We offer delicious cuisines of vivid varieties by our in-house exclusive chefs at 10% additional discount. "
                 
            }

        ]
    }
    render() {
        return (
            <div className="container-fluid services">
             <Title title="Services" />
                <div className="row">
                   {this.state.services.map((item, index) => {
                      return(
                        <div className="col-md-4 col-lg-3 col-12 mx-auto my-3" key={index}>
                            <div className="card shadow-lg border-0 p-4 hoverCard">

                                <article className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                                </article>              
                           </div>
                        </div>
                      )
                   })}
                </div>
            </div>
        )
    }
}