import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router'
// import { Grid, Row, Col, Table } from "react-bootstrap";
import { thArray, tdArray } from "../../variables/Variables";


import {
    UncontrolledCollapse,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Table,
    Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
    Col
  } from "reactstrap";

  class BodyContent extends React.Component {

    constructor() {
        super();
        this.state = {
            users: [],
            redirect: false
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(result => {
            return result.json();
        }).then(data =>{
            this.state.users = data.map((user) => {
              console.log(user)
            });
        })
    }
      
      render() {
        const { redirect } = this.state;

        if (redirect) {
          return <Redirect to='/profile-page'/>;
        }
          return (
            <>
            <Card className="mt-5 mt-sm-3 col-md-3" style={{ backgroundColor: '#f5f5f5' }}>
                    <CardImg
                    alt="..."
                    className="img-fluid rounded-circle"
                    src={require("assets/img/theme/team-1-800x800.jpg")}
                    style={{ width: "150px" }}
                    />
                    <CardBody>
                        <CardTitle>
                        <h2 className="display-3">user 1</h2>
                        </CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button color='primary' onClick={e => this.viewProfile()}>View Profile</Button>
                    </CardBody>
            </Card>
            
            </>
          )
      }

      viewProfile = function () {
          console.log("clicked");
          this.setState({ redirect: true })
      }
  }
  export default BodyContent;
