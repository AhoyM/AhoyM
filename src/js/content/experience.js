import '../../sass/experience.scss';

import React from 'react';


export default class Experience extends React.Component {
  render() {
    return (
      <section className='experience'>
        <div className='experience__companies'>
          <div>
            <h3>Experience</h3>
            <h4 className='experience__company'>Yola.com</h4>
            <div className='experience__info clearfix'>
              <div className='experience__title'>
                Web Application Developer
              </div>
              <div className='experience__duration'>
                June 2014 - September 2015
              </div>
            </div>
            <ul className='experience__duties'>
              <li>
                Converted confusing, legacy javascript IIFEs into modern,
                 well tested modules. Object-oriented models saved state where
                 appropriate.
              </li>
              <li>
                Engineer and develop client-side javascript libraries,
                 designed to request for and consume JSON APIs.
                 This reduced code duplication across applications.
              </li>
              <li>
                Made blocking, synchronous rendering asynchronous with
                 javascript promises and functional programming, which made
                 user experience better by displaying HTML elements faster.
              </li>
              <li>
                Led the integration of Segment, a customer data hub,
                 across all web applications. Allowed Yola to conglomerate data
                 collection and making integration of other
                 analytics tools easier.
              </li>
              <li>
                Developed automated dev and build tasks, making development
                 for other engineers simpler.
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
