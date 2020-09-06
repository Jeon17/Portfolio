import React, { Component } from 'react';
 
export default class Contact extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="contact">
                <div className="row section-head">
                    <div className="ten columns">
                        <p className="lead">
                            Please contact any of my social accounts!
              </p>
                    </div>
                </div>
                <div className="row">
                    <aside className="eigth columns footer-widgets">
                        <div className="widget">
                            <h4>LinkedIn:
                                {resumeData.linkedIn}
                            </h4>
                        </div>
                    </aside>
                </div>
            </section>
        );
    }
}