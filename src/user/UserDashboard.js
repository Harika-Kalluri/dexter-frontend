import React, { Component } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import 'antd/dist/antd.css';
import { Card, Row, Col } from 'antd';
import { Carousel } from 'antd';

const contentStyle = {
  height: '350px',
  width: '900px',
  color: '#fff',
  lineHeight: '350px',
  textAlign: 'center',
  margin: 'auto',
  background: '#364d79',
  marginTop: 40,
  marginBottom: 40,
};

const {
  user: { name },
} = isAuthenticated();

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <Layout
        title="Dashboard"
        description={`Welcome ${name}!`}
        className="container-fluid">
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>
              <img
                className="d-block w-100"
                src="https://i.ytimg.com/vi/QIy874Wn1kM/maxresdefault.jpg"
                alt="First slide"
                height="350px"
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img
                className="d-block w-100"
                src="https://hackernoon.com/images/z2xg2bpo.jpg"
                alt="First slide"
                height="350px"
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img
                className="d-block w-100"
                src="https://www.futuremind.com/m/cache/c8/15/c8150d863e584ed42ccfbdc3f3f1aa3a.jpg"
                alt="First slide"
                height="350px"
              />
            </h3>
          </div>
        </Carousel>

        <div className="row">
          <h1 style={{ color: 'royalblue' }}>
            <b>Courses</b>
          </h1>
          <Row gutter={16}>
            <Col>
              <Card
                bordered={false}
                hoverable
                style={{
                  width: 320,
                  marginLeft: 40,
                  marginTop: 40,
                  marginBottom: 40,
                  color: 'royalblue',
                  fontSize: 20,
                }}
                cover={
                  <img
                    alt="JavaScript"
                    src="https://i.ytimg.com/vi/QIy874Wn1kM/maxresdefault.jpg"
                    height="200px"
                  />
                }>
                <text
                  onClick={() =>
                    this.props.history.push('/user/dashboard/course/javascript')
                  }>
                  <b>JavaScript</b>
                </text>
              </Card>
            </Col>
            <Col>
              <Card
                bordered={false}
                hoverable
                style={{
                  width: 320,
                  marginLeft: 40,
                  marginTop: 40,
                  marginBottom: 40,
                  color: 'royalblue',
                  fontSize: 20,
                }}
                cover={
                  <img
                    alt="React Js"
                    src="https://hackernoon.com/images/z2xg2bpo.jpg"
                    height="200px"
                  />
                }>
                <text
                  onClick={() =>
                    this.props.history.push('/user/dashboard/course/reactjs')
                  }>
                  <b>ReactJS</b>
                </text>
              </Card>
            </Col>
            <Col>
              <Card
                bordered={false}
                hoverable
                style={{
                  width: 320,
                  marginLeft: 40,
                  marginTop: 40,
                  marginBottom: 40,
                  color: 'royalblue',
                  fontSize: 20,
                }}
                cover={
                  <img
                    alt="HTML"
                    src="https://pixelmechanics.com.sg/wp-content/uploads/2019/06/html5-logo-for-web-development.png"
                    height="200px"
                  />
                }>
                <text
                  onClick={() =>
                    this.props.history.push('/user/dashboard/course/html')
                  }>
                  <b>HTML</b>
                </text>
              </Card>
            </Col>
            <Col>
              <Card
                bordered={false}
                hoverable
                style={{
                  width: 320,
                  marginLeft: 40,
                  marginTop: 40,
                  marginBottom: 40,
                  color: 'royalblue',
                  fontSize: 20,
                }}
                cover={
                  <img
                    alt="Python"
                    src="https://ictslab.com/wp-content/uploads/2019/03/d1326ca6cca8038cd115a061b4e2b3bc.png"
                    height="200px"
                  />
                }>
                <text
                  onClick={() =>
                    this.props.history.push('/user/dashboard/course/python')
                  }>
                  <b>Python</b>
                </text>
              </Card>
            </Col>
            <Col>
              <Card
                bordered={false}
                hoverable
                style={{
                  width: 320,
                  marginLeft: 40,
                  marginTop: 40,
                  marginBottom: 40,
                  color: 'royalblue',
                  fontSize: 20,
                }}
                cover={
                  <img
                    alt="AWS"
                    src="https://analyticsindiamag.com/wp-content/uploads/2020/04/AWS-Logo-scaled.jpg"
                    height="200px"
                  />
                }>
                <text
                  onClick={() =>
                    this.props.history.push('/user/dashboard/course/aws')
                  }>
                  <b>AWS</b>
                </text>
              </Card>
            </Col>
            <Col>
              <Card
                bordered={false}
                hoverable
                style={{
                  width: 320,
                  marginLeft: 40,
                  marginTop: 40,
                  marginBottom: 40,
                  color: 'royalblue',
                  fontSize: 20,
                }}
                cover={
                  <img
                    alt="React Native"
                    src="https://www.futuremind.com/m/cache/c8/15/c8150d863e584ed42ccfbdc3f3f1aa3a.jpg"
                    height="200px"
                  />
                }>
                <text
                  onClick={() =>
                    this.props.history.push(
                      '/user/dashboard/course/reactnative'
                    )
                  }>
                  <b>React Native</b>
                </text>
              </Card>
            </Col>
          </Row>
        </div>
      </Layout>
    );
  }
}

export default Dashboard;
