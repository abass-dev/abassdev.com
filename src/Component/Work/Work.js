import React, { useRef } from "react";
import { SingleSlideAnim } from '../Util/Util'

import "font-awesome/css/font-awesome.min.css";
import "./Work.css";

export default function Work() {
  
  const webRef = useRef(null)
  const designRef = useRef(null)
  const SEORef = useRef(null)
  
  SingleSlideAnim(webRef, '.workRefID')
  SingleSlideAnim(designRef, '.workRefID')
  SingleSlideAnim(SEORef, '.workRefID')
  
  return (
    <div className="container text-white mb-4 md-title">
      <div className="row">
        <div className="col-12">
          <h1 id="work" className="primary-font primary-text fw-bold">
            MY WORKS
          </h1>
          <p className="after-title"></p>
        </div>
        <div ref={webRef} className="col-md-6 mb-4">
          <div className="card workRefID slide-first text-secondary shadow border-0">
            <div className="card-body">
              <p className="card-title text-center">
                <span className="work-icon fa fa-globe"></span>{" "}
              </p>
                <h2 className='text-center'>Web development</h2>
              <p>
              I specialize in providing functional web services that include custom website development, WordPress development, e-commerce solutions, and more. 
              </p>
            </div>
          </div>
        </div>
        <div ref={SEORef} className="col-md-6 mb-4">
          <div className="card workRefID slide-second text-secondary border-0 shadow border-0">
            <div className="card-body">
              <p className="card-title text-center">
                <span className="work-icon fa fa-line-chart"></span>{" "}
              </p>
                <h2 className='text-center'>SEO and security</h2>
              <p>I offer top-notch solutions in both software security and SEO practices that can help boost the quantity and quality of traffic to your website.
              </p>
            </div>
          </div>
        </div>
        <div ref={designRef} className="col-md-6 mb-4">
          <div className="card workRefID slide-first text-secondary border-0 shadow border-0">
            <div className="card-body">
              <p className="card-title text-center">
                <span className="work-icon fa fa-paint-brush"></span>{" "}
              </p>
                <h2 className='text-center'>Web Design</h2>
              <p>
              My web design services include creating stunning, intuitive websites that effectively represent your brand and corporate identity through exceptional UI/UX design.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
