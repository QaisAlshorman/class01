import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numOfVotes: 0
    };
  }

  incrementNumberOFlikes = () => {
    this.setState({
      numOfVotes: this.state.numOfVotes + 1
    });
  }

  render() {
    return (
      <div className='card'>


        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" onClick={this.incrementNumberOFlikes} alt={this.props.alt} src={this.props.imageUrl} />
          <Card.Body>
            <Card.Title> {this.props.title}</Card.Title>
            <Card.Text>   {this.props.description}   </Card.Text>
            <Card.Text>   Number of likes ❤️ {this.state.numOfVotes}  </Card.Text>

            <Button variant="primary">votes</Button>
          </Card.Body>
        </Card>


      </div>
    );
  }
}


export default HornedBeast;