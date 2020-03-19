import React from 'react'
import eventArr from './eventInfo.js'

class Banner extends React.Component {
  render () {
    return (
      <div className='banner'>
        <nav className='navbar navbar-expand-sm '>
          <div className='container-fluid'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                {' '}
                <a className='nav-link' href='#'>
                  <i className='fa fa-slack' />
                  Join us on Slack
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  <i className='fa fa-meetup' />
                  Join us on Meetup
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  <i className='fa fa-github' />
                  Contribute to this site
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  <i className='fa fa-youtube-play' />
                  Tech Talks
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  <i className='fa fa-comment' />
                  Give a Talk
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className='MainText'>
          <div className='Text'>Toronto React</div>
        </div>
      </div>
    )
  }
}

class MainSpace extends React.Component {
  render () {
    return <div className='container'>Events</div>
  }
}

class Events extends React.Component {
  render () {
    return (
      <div className='eventsContainer'>
        {eventArr.map(x => (
          <div className='cardContainer'>
            <div className='cardTitle'>{x.title}</div>
            <div className='cardDate'>{x.date}</div>
            <div className='cardDesc'>{x.description}</div>
            <hr />
          </div>
        ))}
      </div>
    )
  }
}

class Footer extends React.Component {
  render () {
    return (
      <div className='footer'>
        <div className='fLinkContainer'>
          <div className='fLinks'>
            <a className='nav-link' href='https://github.com/TCE-1'>
              <i className='fa fa-rocket fa-spin' />
              Learn more
            </a>
          </div>
          <div className='fLinks rLinks'>
            <a className='nav-link' href='https://github.com/TCE-1'>
              <i className='fa fa-github' />
              Created by Tony
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export { Banner, MainSpace, Events, Footer }
