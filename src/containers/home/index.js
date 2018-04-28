import React from 'react';
import { Step, Stepper, StepButton, StepContent } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
class Home extends React.Component {
  state = {
    stepIndex: 0
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    if (stepIndex < 2) {
      this.setState({ stepIndex: stepIndex + 1 });
    }
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  renderStepActions(step) {
    return (
      <div style={{ margin: '12px 0' }}>
        <RaisedButton
          label="Next"
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext}
          style={{ marginRight: 12 }}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const { stepIndex } = this.state;
    const intro = `For each ad campaign that you create, you can control how much
    you're willing to spend on clicks and conversions, which networks
  and geographical locations you want your ads to show on, and more.`;
    return (
      <div style={{ maxWidth: '100%', maxHeight: 400, margin: 'auto' }}>
        <h2>About me</h2>
        <Card
          expanded={this.state.expanded}
          onExpandChange={this.handleExpandChange}>
          <CardHeader
            title="Guillaume Ader"
            subtitle={intro}
            avatar="img/me_thumbnail.jpg"
            subtitleStyle={{
              fontFamily: 'Lato',
              color: '#000'
            }}
          />
        </Card>

        <Card>
          <Stepper activeStep={stepIndex} linear={false} orientation="vertical">
            <Step>
              <StepButton onClick={() => this.setState({ stepIndex: 0 })}>
                Select campaign settings
              </StepButton>
              <StepContent>
                <p>
                  For each ad campaign that you create, you can control how much
                  you're willing to spend on clicks and conversions, which
                  networks and geographical locations you want your ads to show
                  on, and more.
                </p>
              </StepContent>
            </Step>
            <Step>
              <StepButton onClick={() => this.setState({ stepIndex: 1 })}>
                Create an ad group
              </StepButton>
              <StepContent>
                <p>
                  An ad group contains one or more ads which target a shared set
                  of keywords.
                </p>
              </StepContent>
            </Step>
            <Step>
              <StepButton onClick={() => this.setState({ stepIndex: 2 })}>
                Create an ad
              </StepButton>
              <StepContent>
                <p>
                  Try out different ad text to see what brings in the most
                  customers, and learn how to enhance your ads using features
                  like ad extensions. If you run into any problems with your
                  ads, find out how to tell if they're running and how to
                  resolve approval issues.
                </p>
                {this.renderStepActions(2)}
              </StepContent>
            </Step>
          </Stepper>
        </Card>
      </div>
    );
  }
}

export default Home;
