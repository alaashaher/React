import React, { Component } from 'react';
import logo from '../assets/bianaat.png';
import Feature from '../components/feature'
import Header from '../components/header'
import highperformance_image from '../assets/icon-02.png';
import uiUx_image from '../assets/icon-01.png';
import cuttingEdge_image from '../assets/icon-03.png';


class AboutUs extends Component {

    render() {
        return (
            <div class="container">


                <Header />
                <div class="row">

                    <div class="col-4">

                        <Feature
                            featureImage={uiUx_image}
                            headline="Powerful UI/UX"
                            featureDesc="Atrractive/ high usability UI/UX designs That Power the interface of our products."
                        />
                    </div>
                    <div class="col-4">

                        <Feature
                            featureImage={highperformance_image}
                            headline="High performance"
                            featureDesc="Acoording to our performance Metrics and standered High performance is well granteded."
                        />
                    </div>
                    <div class="col-4">

                        <Feature
                            featureImage={cuttingEdge_image}
                            headline="Cutting edge"
                            featureDesc="All the powerfull of new Technologies are here ,we always take care of Upgrading Our stack."
                        />
                    </div>

                </div>

            </div>

        );
    }

}

export default AboutUs;

const styles = {
    container: {
        textAlign: 'Center'
    },
    logoStyle: {
        margin: '40px',
        border: '5px solid pink',
        width: '150px'
    }
    ,
    text: {
        margin: '40px',
        fontSize: '15pt'
    }

}
