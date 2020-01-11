/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class Solution extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Solutions</CardTitle>
                  <p className="category">Severity: <i className="tim-icons icon-alert-circle-exc"> High</i></p>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Severity</th>
                        <th>Test Code</th>
                        <th>Name</th>
                        <th>Solution</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-danger"><i className="tim-icons icon-alert-circle-exc"></i></td>
                        <td>SEC0001</td>
                        <td>X-Content-Type-Options: no-sniff</td>
                        <td>No sniffing around!</td>
                      </tr>
                      <tr>
                        <td className="text-danger"><i className="tim-icons icon-alert-circle-exc"></i></td>
                        <td>SEC0002</td>
                        <td>X-Frame-Options: deny</td>
                        <td>Set X-Frame-Options header to deny.</td>
                      </tr>
                      <tr>
                        <td className="text-danger"><i className="tim-icons icon-alert-circle-exc"></i></td>
                        <td>SEC0003</td>
                        <td>X-XSS-Protection: 1; mode=block</td>
                        <td>Set X-Xss-Protection header to "1;mode-block"</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Solution;
