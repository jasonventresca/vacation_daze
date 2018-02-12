import React from 'react';
import ReactDOM from 'react-dom';
import {
  Input,
  Form,
  List,
  Container,
  Divider,
  Header,
} from 'semantic-ui-react';
import './styles/styles.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSetInitBal(e) {
    e.preventDefault();

    // The trim() method removes whitespace from both ends of a string.
    const option = e.target.elements.option.value.trim();

    // Clear the input text box, after form submit.
    document.getElementsByName('option')[0].value = '';
  }

  render() {
    return (
      <div>
        <Container textAlign='left' className='container1'>
          <List>
            <List.Item>
              <Header as='h4'>Enter your initial balance:</Header>
              <Input
                label='days'
                labelPosition='right'
                placeholder='0'
              />
              <Divider />
              <Header as='h4'>Enter your accrual rate:</Header>
              <Input
                label='days/year'
                labelPosition='right'
                placeholder='10'
              />
              <Divider />
              <Header as='h2'>Hop in the time machine for:</Header>
              <Input
                placeholder='1.5 years'
              />
            </List.Item>
          </List>
        </Container>

        <Form onSubmit={this.handleSetInitBal}>
        </Form>

      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
