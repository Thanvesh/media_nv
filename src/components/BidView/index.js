import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { BsTruckFrontFill } from "react-icons/bs";
import { BsFillBoxFill } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import "./index.css";

const BidViewDatails = () => {
    return (
        <div className="bid-view-datails">
            {/* start-container */}
            <div className="first-container">
                <div className="bid-container">
                    <p className="bid-title">
                        Bid No: <span className="bid-no">16515120650125</span>
                    </p>
                    <p className="bid-name">(Sunder Yadav)</p>
                </div>
                <div className="start-container-contents">
                    <div className="location-cotainer">
                        <div className="location-to-container">
                            <span className="green-location" />
                            <p className="location-to-details">
                                Manesar, Gurugram,{" "}
                                <span className="location-to-city">Haryana</span>
                            </p>
                        </div>
                        <div className="location-middile-container">
                            <span className="vartical-line" />
                            <div className="loading-container">
                                <p className="loading-point-title">Loading Point:</p>
                                <div className="loading-point-details">
                                    <pre>{`Ramchandra Ramniwas oil mill,
Alwar, Rajasthan`}
                                    </pre>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="unloading-container">
                                <div className="unloading-icon-title">
                                    <FaLocationDot className="location-icon-red" />
                                    <p className="location-from">
                                        Kotputli, <span className="location-from-city">Rajasthan</span>
                                    </p>
                                </div>
                                <div className="unloading-details-container">
                                    <p className="unloading-point">Unloading Point:</p>
                                    <div className="unloading-point-loaction">
                                        <pre>{`Ramchandra Ramniwas oil mill,
ALwar, Rajasthan`}</pre>
                            
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* middle-container */}
            <div className="middle-container">
                <div className="vehical-data-container vehical-date-container">
                    <FaCalendar />
                    <p>Vechicle loading data: 17/02/2024</p>
                </div>
                <div className="vehical-data-container dark-blue">
                    <BsTruckFrontFill />
                    <p>
                        Vehical Type{" "}
                        <span className="light-blue">20 ft Truck (Close Body)</span>
                    </p>
                    <p className="cng">CNG</p>
                </div>
                <div className="vehical-data-container dark-blue">
                    <BsFillBoxFill />
                    <p>
                        Material: <span className="light-blue">Agricultural Products</span>
                    </p>
                    <p>
                        Weight: <span className="light-blue">14 Tonnes</span>
                    </p>
                </div>
                <div className="requst-expiry-date-container">
                    <div className="vehical-data-container dark-blue">
                        <FaCalendar />
                        <p>
                            Request Date: <span className="light-blue">15/02/2024</span>
                        </p>
                    </div>
                    <div className="vehical-data-container dark-blue">
                        <FaCalendar />
                        <p>
                            Expiry Date: <span className="light-blue">15/02/2024</span>
                        </p>
                    </div>
                </div>
                <p className="dark-blue">
                    Remarks: <span className="light-blue">Urgent Delivery</span>
                </p>
            </div>
            {/* end container */}
            <div className="end-container">
                <div className="end-container-contents">
                    <IoPersonSharp />
                    <p>
                        Assigned Staff: <span className="light-blue">Rahul Pandey</span>
                    </p>
                </div>
                <div className="end-container-contents">
                    <IoIosCall />
                    <p>
                        Phone number: <span className="light-blue">+91 332423442442</span>
                    </p>
                </div>
                <p className="dark-blue">
                    Target Price: <span className="light-blue">Rs 5000</span>
                </p>
                <p className="dark-blue">
                    Number of Bider for this Bid: <span className="light-blue">54</span>
                </p>
                <p className="dark-blue">View Details</p>
            </div>
        </div>
    );
};

export default BidViewDatails;