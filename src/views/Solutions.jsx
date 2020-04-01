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
                        <td>The server should send an X-Content-Type-Options: nosniff to make sure the browser does not try to detect a different Content-Type than what is actually sent (as this can lead to XSS)
                        <br/><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options">Learn more</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-danger"><i className="tim-icons icon-alert-circle-exc"></i></td>
                        <td>SEC0002</td>
                        <td>X-Frame-Options: deny or sameorigin</td>
                        <td>The server should send the X-Frame-Options security header with deny or sameorigin value, to protect against drag'n drop clickjacking attacks in older browsers. Sites can use this to avoid clickjacking attacks, by ensuring that their content is not embedded into other sites.
                        <br/><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options">Learn more</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-danger"><i className="tim-icons icon-alert-circle-exc"></i></td>
                        <td>SEC0003</td>
                        <td>X-XSS-Protection: 1; mode=block</td>
                        <td>This header enables the Cross-site scripting (XSS) filter in your browser. 1; mode=block Filter enabled. Rather than sanitize the page, when a XSS attack is detected, the browser will prevent rendering of the page.
                        <br/><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection">Learn more</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-danger"><i className="tim-icons icon-alert-circle-exc"></i></td>
                        <td>SEC0004</td>
                        <td>Content-Security-Policy: policy</td>
                        <td>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement to distribution of malware.
                          <br/><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP">Learn more</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-danger"><i className="tim-icons icon-alert-circle-exc"></i></td>
                        <td>SEC0005</td>
                        <td>Fingerprint headers</td>
                        <td>Looks like your API returns some fingerprint headers, such as "X-Powered-By", "X-Generator", "Server", "X-ASPNet-Version", "X-ASPNETMVC-version". As each web framework has it's own Common Vulnerabilities and Exposures (e.g. <a href="https://www.cvedetails.com/vulnerability-list/vendor_id-12043/product_id-22568/Rubyonrails-Ruby-On-Rails.html">Ruby on Rails</a>), you shouldn't expose such information. Remove those headers and this tests would be green.
                        <br/><a href="https://github.com/OWASP/wstg/blob/master/document/4-Web_Application_Security_Testing/01-Information_Gathering/02-Fingerprint_Web_Server.md">Learn more</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-danger"><i className="tim-icons icon-alert-circle-exc"></i></td>
                        <td>SEC0006</td>
                        <td>Access-Control-Allow-Origin</td>
                        <td>This test is failing if your API returns Access-Control-Allow-Origin: "*" which tells the browser to allow code from any origin to access a resource. In most cases (if your API isn't public facing one) it's way too broad clause.
                        <br/><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin">Learn more</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-danger"><i className="tim-icons icon-alert-circle-exc"></i></td>
                        <td>SEC0007</td>
                        <td>Strict-Transport-Security: max-age=(age in seconds); (other options)</td>
                        <td>This header lets a web site tell browsers that it should only be accessed using HTTPS, instead of using HTTP.
                        <br/><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security">Learn more</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-danger"><i className="tim-icons icon-alert-circle-exc"></i></td>
                        <td>SEC0008</td>
                        <td>Set-Cookie header should contain Secure and HttpOnly options</td>
                        <td>Setting Secure option ensures cookie is only sent to the server when a request is made with the https: scheme. HttpOnly option forbids JavaScript from accessing the cookie. This mitigates attacks against cross-site scripting (XSS).
                        <br/><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie">Learn more</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-danger"><i className="tim-icons icon-alert-circle-exc"></i></td>
                        <td>SEC0009</td>
                        <td>Set Cache-Control or Expires header</td>
                        <td>The Expires header contains the date/time after which the response is considered stale. If there is a Cache-Control header with the max-age or s-maxage directive in the response, the Expires header is ignored.
                        <br/><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expires">Learn more</a>
                        </td>
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
