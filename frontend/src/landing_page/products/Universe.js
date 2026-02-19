import React from "react";
import "../../index.css";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="text-center">The Zerodha Universe</h1>
        <p className="text-center text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img
            src="/media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="universe-logo"
          />
          <p className="text-muted text-small">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks and ETFs.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="/media/images/streakLogo.png"
            alt="Streak"
            className="universe-logo"
          />
          <p className="text-muted text-small">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="/media/images/sensibullLogo.svg"
            alt="Sensibull"
            className="universe-logo"
          />
          <p className="text-muted text-small">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="/media/images/zerodhaFundhouse.png"
            alt="Zerodha Fund House"
            className="universe-logo"
          />
          <p className="text-muted text-small">
            Our asset management venture creating simple and transparent index
            funds to help you save for your goals.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="/media/images/goldenpiLogo.png"
            alt="Smallcase"
            className="universe-logo"
          />
          <p className="text-muted text-small">
            Bonds trading platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="/media/images/dittoLogo.png"
            alt="Ditto"
            className="universe-logo"
          />
          <p className="text-muted text-small">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
          
        </div>
                        <button  style={{width: '20%', margin: '0 auto'}} className='btn btn-primary p-2 fs-5 mb-5 mt-3'>Signup for free</button>

      </div>
    </div>
  );
}

export default Universe;
