import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

import api from "api";
import StoreProvider, { actions, selectors } from "store/StoreProvider";
import { formatDate } from "utils";

import "./Tests.scss";

const Tests = () => {
  const dispatch = StoreProvider.useDispatch();
  const tests = StoreProvider.useSelector(selectors.tests.list);

  useEffect(() => {
    api.resources.getUserTests().then(({ data }) => {
      dispatch(actions.tests.setTests(data));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="tests-page content">
      <Row>
        <Col md="12">
          <Card className="card-plain">
            <CardHeader>
              <CardTitle tag="h4">Your Tests</CardTitle>
              <p className="category">We keep only failed tests.</p>
            </CardHeader>
            <CardBody>
              {tests.length > 0 ? (
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th></th>
                      <th>Suite ID</th>
                      <th>Tested URL</th>
                      <th>Timestamp</th>
                      <th className="text-center">Solution</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tests.map((testsuite) =>
                      testsuite.tests.map((test, key) => (
                        <tr key={key}>
                          <td className="text-danger">
                            <i className="tim-icons icon-alert-circle-exc" />
                          </td>
                          <td>{testsuite.id}</td>
                          <td>{testsuite.url}</td>
                          <td>{formatDate(test.created)}</td>
                          <td className="text-center">
                            <Link
                              to={{
                                pathname: "/solutions",
                                hash: `#solution__${test.code.toLowerCase()}`,
                              }}
                            >
                              {test.code}
                            </Link>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </Table>
              ) : (
                <p>
                  <h5>It's that easy to run your first test suite</h5>
                  <img src={require("assets/img/empty_demo.gif")} alt="sailor demo" width="50%"/>
                <br/><a href="https://github.com/hidalgopl/sailor" target="_blank" rel="noopener noreferrer">Try it now!</a> </p>

              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Tests;
