import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

class Example extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Card style={{ backgroundColor: "#00a8ff", marginTop: '1rem' }} onClick={this.toggle}>
          <CardActionArea>
            <CardMedia
              height="20"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" style={{ color: "#ffffff" }}>
                <i className="fas fa-bullhorn fa-3x" style={{ color: "white", padding: 12 }}></i>
                Announcement
          </Typography>
            </CardContent>
          </CardActionArea>
          <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardBody>
                Chinese luner new year holiday is from 4th Febrary to 6th Febrary.
            </CardBody>
            </Card>
          </Collapse>
        </Card>

        <Card style={{ backgroundColor: "#00a8ff", marginTop: '1rem' }} onClick={this.toggle}>
          <CardActionArea>
            <CardMedia
              height="20"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" style={{ color: "#ffffff" }}>
                <i className="fas fa-hands-helping fa-3x" style={{ color: "white", padding: 12 }}></i>
                Financial Aids
          </Typography>
            </CardContent>
          </CardActionArea>
          <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardBody>
                Anim pariatur cliche reprehenderit,
                 enim eiusmod high life accusamus terry richardson ad squid. Nihil
                 anim keffiyeh helvetica, craft beer labore wes anderson cred
                 nesciunt sapiente ea proident.
            </CardBody>
            </Card>
          </Collapse>
        </Card>

        <Card style={{ backgroundColor: "#00a8ff", marginTop: '1rem' }} onClick={this.toggle}>
          <CardActionArea>
            <CardMedia
              height="20"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" style={{ color: "#ffffff" }}>
                <i className="fas fa-skull-crossbones fa-3x" style={{ color: "white", padding: 12 }}></i>
                Deadline
          </Typography>
            </CardContent>
          </CardActionArea>
          <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardBody>
                Anim pariatur cliche reprehenderit,
                 enim eiusmod high life accusamus terry richardson ad squid. Nihil
                 anim keffiyeh helvetica, craft beer labore wes anderson cred
                 nesciunt sapiente ea proident.
            </CardBody>
            </Card>
          </Collapse>
        </Card>
      </div>
    );
  }
}

Collapse.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.node,
  navbar: PropTypes.bool,
  cssModule: PropTypes.object,
  innerRef: PropTypes.object,
};

export default Example;