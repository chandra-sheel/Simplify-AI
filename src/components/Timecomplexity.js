import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Form, Button, Card } from "react-bootstrap";
const { Configuration, OpenAIApi } = require("openai");
class Timecomplexity extends Component {
  constructor() {
    super();
    this.state = {
      heading: "The Response from the AI will be Shown here",
      response: "...waiting for the response",
    };
  }
  onFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj.timeComplexity);

    const configuration = new Configuration({
      apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);

    openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: `${formDataObj.timeComplexity} \n"""\nThe time complexity of this function is`,
        temperature: 0,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["\n"],
      })
      .then((response) => {
        console.log(response.data);
        this.setState({
          heading: `Here is your output:  `,
          response: response.data.choices[0].text.replace(/\n/g, ""),
        });
      });
  };
  render() {
    return (
      <div style={{ color: "rgb(44 49 56)" }}>
        <Container>
          <br />
          <br />
          <h1>Time Complexity</h1>
          <br />
          <h3>Find the time complexity of a function</h3>
          <br />
          <br />
          <Form onSubmit={this.onFormSubmit}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              style={{ width: "80%" }}
            >
              <Form.Label>
                <h4>Input your code</h4>
              </Form.Label>
              <Form.Control
                type="text"
                name="timeComplexity"
                placeholder="Write your code here..."
                style={{ backgroundColor: "lightgray", fontSize: "20px" }}
              />
            </Form.Group>
            <Button variant="secondary" size="lg" type="submit">
              Click here
            </Button>
          </Form>
          <br />
          <br />
          <Card
            style={{
              width: "100%",
              backgroundColor: "lightgray",
              fontSize: "20px",
              overflowWrap: "break-word",
            }}
          >
            <Card.Body>
              <Card.Title>
                <h3>{this.state.heading}</h3>
              </Card.Title>
              <hr />
              <br />
              <Form.Control
                as="textarea"
                rows={10}
                value={this.state.response}
                readOnly
              />
            </Card.Body>
          </Card>
          <br />
          <br />
        </Container>
      </div>
    );
  }
}
export default Timecomplexity;
