import React from 'react';

export default function Tours() {
  return (
    <div>
      <section className='section-tours'>
        <div className='u-center-text u-margin-bottom-big'>
          <h2 className='heading-secondary'>Most popular tours</h2>
        </div>
        <div className='row'>
          <div className='col-1-of-3'>
            <div className='card'>
              <div className='card__side card__side--front card__side--front-1'>
                <div className='card__picture card__picture-1'></div>
                <h4 className='card__heading'>
                  <span className='card__heading-span card__heading-span-1'>
                    The Sea Explorer
                  </span>
                </h4>
                <div className='card__details'>
                  <ul>
                    <li>3 day tours</li>
                    <li>up to 30 people</li>
                    <li>2 tour guides</li>
                    <li>Sleep in cozy hotels</li>
                    <li>Difficulty: easy</li>
                  </ul>
                </div>
              </div>
              <div className='card__side card__side--back card__side--back-1'>
                <div className='card__cta'>
                  <div className='card__price-box'>
                    <p className='card__price-only'>Only</p>
                    <p className='card__price-value'>$297</p>
                    <a className='btn btn--white' href='#'>
                      Book now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-1-of-3'>
            <div className='card'>
              <div className='card__side card__side--front card__side--front-2'>
                <div className='card__picture card__picture-2'>&nbsp;</div>
                <h4 className='card__heading'>
                  <span className='card__heading-span card__heading-span-2'>
                    The Forest Hiker
                  </span>
                </h4>
                <div className='card__details'>
                  <ul>
                    <li>7 day tours</li>
                    <li>up to 40 people</li>
                    <li>6 tour guides</li>
                    <li>Sleep in provided tents</li>
                    <li>Difficulty: medium</li>
                  </ul>
                </div>
              </div>
              <div className='card__side card__side--back card__side--back-2'>
                <div className='card__cta'>
                  <div className='card__price-box'>
                    <p className='card__price-only'>Only</p>
                    <p className='card__price-value'>$497</p>
                    <a className='btn btn--white' href='#'>
                      Book now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-1-of-3'>
            <div className='card'>
              <div className='card__side card__side--front card__side--front-3'>
                <div className='card__picture card__picture-3'>&nbsp;</div>
                <h4 className='card__heading'>
                  <span className='card__heading-span card__heading-span-3'>
                    The Snow adventurer
                  </span>
                </h4>
                <div className='card__details'>
                  <ul>
                    <li>5 day tours</li>
                    <li>up to 16 people</li>
                    <li>3 tour guides</li>
                    <li>Sleep in provided tents</li>
                    <li>Difficulty: hard</li>
                  </ul>
                </div>
              </div>
              <div className='card__side card__side--back card__side--back-3'>
                <div className='card__cta'>
                  <div className='card__price-box'>
                    <p className='card__price-only'>Only</p>
                    <p className='card__price-value'>$897</p>
                    <a className='btn btn--white' href='#'>
                      Book now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='u-center-text u-margin-top-huge'>
          <a className='btn btn--green ' href='#'>
            Discover all tours
          </a>
        </div>
      </section>
    </div>
  );
}
