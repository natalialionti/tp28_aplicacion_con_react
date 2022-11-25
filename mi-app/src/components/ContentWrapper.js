import React from 'react';
import {TopBar} from "./components/TopBar";
import {ContentRowTop} from './components/ContentRowTop';
import {Footer} from "./components/Footer";

const ContentWrapper = () => {
    return (
    <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
        <TopBar/>
        <ContentRowTop/>
	</div>
    <Footer/>
    </div>

    );
}

export default ContentWrapper;
