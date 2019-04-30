import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";

/* OwlCarousel import */
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const options = {
    items: 4,
};

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const responsive = {
      0:{
        items:1,
        nav:true
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:3,
          nav:true,
          loop:false
      }
    }
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>News</h2>
        <div>
            <OwlCarousel className="owl-theme" loop margin={10} nav autoplay={true} autoplayTimeout={5000} responsiveClass={true} responsive={responsive}>
              <div className="item">
                <Card plain>
                  <GridItem xs={10} className={classes.itemGrid}>
                  <img className={classes.imgCardTop} src={team2} alt="Card-img-cap" />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    Christian Louboutin
                  </h4>
                  <CardBody>
                    <p className={classes.description}>
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                      add some for people to be able to
                      follow them outside the site.
                    </p>
                  </CardBody>
                  <CardFooter className={classes.textMuted}>
                    2 days ago
                  </CardFooter>
                </Card>
              </div>
              <div className="item">
                <img src={team1}/>
              </div>
              <div className="item">
                <img src={team1}/>
              </div>
              <div className="item">
                <img src={team1}/>
              </div>
              <div className="item">
                <img src={team1}/>
              </div>
            </OwlCarousel>
          </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
