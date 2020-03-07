import React from 'react';
import eventArr from './eventInfo.js'; 



class Banner extends React.Component {
  render() {
    return (
     <div className="banner">
	<nav className="navbar navbar-expand-sm ">
	  <div className="container-fluid">
	    <ul className="navbar-nav">
	      <li className="nav-item" > <a className="nav-link" href="#"><i className="fa fa-slack" ></i>Join us on Slack</a></li>
	      <li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-meetup" ></i>Join us on Meetup</a></li>
	      <li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-github" ></i>Contribute to this site</a></li>
	      <li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-youtube-play" ></i>Tech Talks</a></li>
	      <li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-comment" ></i>Give a Talk</a></li>


	    </ul>
	  </div>
	</nav>
	<div className="MainText">
		<div className="Text">Toronto React</div>
	</div>

</div>
 

    );
  }
}

class MainSpace extends React.Component{
  render() {
    return (
      <div className="container">
        Events
      </div>
        
    )
  }
}


class Events extends React.Component{
  render() {
    return (
      <div className="eventsContainer">
        {eventArr.map(x => (
          
          <div className="cardContainer">
            <div className="cardTitle">{x.title}</div>
            <div className="cardDate">{x.date}</div>
            <div className="cardDesc">{x.description}</div>
            <hr />
          </div>
        )
        )}

      </div>
        
    )
  }
}


export {Banner, MainSpace, Events};

