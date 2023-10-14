import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./Sidebar.module.css";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            {/* <FontAwesomeIcon icon="fa-regular fa-gear" /> */}
            <h1 className={styles.sidebarHeading}>Dashboard</h1>
        </div>
    );
};

export default Sidebar;
