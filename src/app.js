import React from 'react';
import ReactDOM from 'react-dom';
import {
  Input,
  Form,
  List,
  Container,
  Divider,
  Header,
  Button,
} from 'semantic-ui-react';
import './styles/styles.css';
import DropdownTimeUnits from './DropdownTimeUnits';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleDoIt = this.handleDoIt.bind(this);
    this.handleSetInitBal = this.handleSetInitBal.bind(this);
    this.state = {
      init_bal: 0, // dollars
      accrual_rate: 10, // days per year
      window: 1.5 // years
    };
  }

  handleSetInitBal(e) {
    e.preventDefault();
    this.setState({init_bal: document.getElementsByName('option')[0].value});
  }

  handleDoIt(e) {
    console.log('handleDoIt() fired!');
  }

  render() {
    return (
      <div>
        <Container textAlign='left' className='container1'>
          <List>
            <List.Item>
              <Header as='h3'>enter your initial balance</Header>
              <Input
                label='days'
                labelPosition='right'
                placeholder={this.state.init_bal}
              />
              <Divider />
              <Header as='h3'>enter your accrual rate</Header>
              <Input
                label='days/year'
                labelPosition='right'
                placeholder={this.state.accrual_rate}
              />
              <Divider />
              <Header as='h2'>hop in the time machine for</Header>
              <Input
                placeholder={this.state.window}
              />
              <DropdownTimeUnits />
              <Button
                onClick={this.handleDoIt}
              >
                let's do it!
              </Button>
            </List.Item>
          </List>
        </Container>

      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
