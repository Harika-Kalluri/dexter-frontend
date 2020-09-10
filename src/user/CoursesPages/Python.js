import React, { Component } from "react";
import Layout from "../../core/Layout";

class Python extends Component {
  render() {
    return (
      <div>
        <Layout title='Python' description='By Sriram'>
          <p>The programming language Python was conceived in the late 1980s,and its implementation was started in December 
              1989 by Guido van Rossum at CWI in the Netherlands as a successor to ABC capable of exception handling and 
              interfacing with the Amoeba operating system. Van Rossum is Python's principal author, and his continuing central
               role in deciding the direction of Python is reflected in the title given to him by the Python community,
                Benevolent Dictator for Life (BDFL). </p>
        </Layout>
      </div>
    );
  }
}

export default Python ;