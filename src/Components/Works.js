import React, { Component } from 'react';
export default class Works extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check Out Some of My Works.</h1>
                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            {
                                resumeData.portfolio && resumeData.portfolio.map((item) => {
                                    return (
                                        <div className="columns portfolio-item">
                                            <div className="item-wrap">
                                                <a href="https://majestic-wind-cave-24280.herokuapp.com/?id=5f031ccfb8143a0017452111">
                                                    <img src={`${item.imgurl}`} className="item-img" />
                                                    <div className="overlay">
                                                        <div className="portfolio-item-meta">
                                                            <h5>{item.name}</h5>
                                                            <p>{item.description}</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>  
        );
    }
    render() {
    let resumeData = this.props.resumeData;
    return (
        <section id="portfolio">
            <div className="row">
                <div className="twelve columns collapsed">
                    <h1>Check Out Some of My Works.</h1>
                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        {
                            resumeData.portfolio && resumeData.portfolio.map((item) => {
                                return (
                                    <div className="columns portfolio-item">
                                        <div className="item-wrap">
                                            <a href="https://multicultural-canoe-21844.herokuapp.com/">
                                                <img src={`${item.imgurl}`} className="item-img" />
                                                <div className="overlay">
                                                    <div className="portfolio-item-meta">
                                                        <h5>{item.name}</h5>
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check Out Some of My Works.</h1>
                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            {
                                resumeData.portfolio && resumeData.portfolio.map((item) => {
                                    return (
                                        <div className="columns portfolio-item">
                                            <div className="item-wrap">
                                                <a href="https://calm-oasis-71297.herokuapp.com/burgers">
                                                    <img src={`${item.imgurl}`} className="item-img" />
                                                    <div className="overlay">
                                                        <div className="portfolio-item-meta">
                                                            <h5>{item.name}</h5>
                                                            <p>{item.description}</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

