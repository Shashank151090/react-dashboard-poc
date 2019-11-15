import React from "react";

import TopNav from "./pages/TopNav";
import BodyContent from "./pages/Body-content";


// reactstrap components
// import { Container, Row } from "reactstrap";

class Dashboard extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
      }
    render() {
        return (
            <>
                <TopNav />
                <BodyContent />
            </>
          );
    }
}

export default Dashboard;