import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Display from "./Display";
import { Container, Row, Col } from "react-bootstrap";
import '../App.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <br />
          <h1 className="text-center headingtag" style={{ color: "#1d283e" }}>
            Simplify AI: Your Personal AI Assistant
          </h1>
          <br />
          <Row>
            <Col>
              <Display
                header="SQL Requests"
                title="Get SQL Commands"
                text="Generate SQL Queries button provides a user-friendly interface to quickly create complex SQL queries for your database. With support for multiple databases and simple query creation, this tool can save you time and effort."
                theLink="/sql-requests"
              />
            </Col>
            <Col>
              <Display
                header="Grammar Correction"
                title="Correct Grammar"
                text="It quickly checks and corrects grammar and punctuation errors in your writing. Simply copy and paste your text, and it will suggest corrections for any mistakes, helping improve the accuracy and professionalism of your writing."
                theLink="/grammar-correction"
              />
            </Col>
            <Col>
              <Display
                header="Time Complexity"
                title="Check Time Complexity"
                text="It helps you analyze the time complexity of your algorithms. Simply enter your code into the tool, and it will quickly determine the time complexity of your algorithm, helping you optimize your code and improve its efficiency."
                theLink="/time-complexity"
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Display
                header="Explain Code"
                title="Get Code Explanation"
                text="This tool quickly generates a detailed explanation of complex code snippets. Simply paste your code, and it will help you understand how it works line-by-line. Ideal for developers and students looking to save time and improve their understanding of unfamiliar code."
                theLink="/explain-code"
              />
            </Col>
            <Col>
              <Display
                header="Translate Programming Language"
                title="Convert One Programming Language To Other"
                text="Programming Language Converter tool quickly converts code between programming languages. Ideal for developers and students learning multiple languages, it saves time and effort in the code conversion process."
                theLink="/translate-programming-lang"
              />
            </Col>
            <Col>
              <Display
                header="Text Summarizer"
                title="Summarize your paragraph"
                text="Text summarizer is a tool designed to help you quickly and easily summarize long pieces of text into shorter, more concise versions. Simply input your text and let our algorithm do the work for you, providing you with a summarized version that captures the main points of your text."
                theLink="/text-summarizer"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Home;
