import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";

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
  const { search } = useLocation();
  const { suiteId } = queryString.parse(search);
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
              <CardTitle tag="h4">
                {suiteId ? (
                  <>
                    Test suite <b>{suiteId}</b>
                  </>
                ) : (
                  "Your Tests"
                )}
              </CardTitle>
              {suiteId ? (
                <Link to="/tests">See all</Link>
              ) : (
                <p className="category">We keep only failed tests.</p>
              )}
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
                    {tests
                      .filter((test) => (suiteId ? test.id === suiteId : true))
                      .map((testsuite) =>
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
                <div>
                  <h5>It's that easy to run your first test suite</h5>
                  <img
                    src={require("assets/img/empty_demo.gif")}
                    alt="sailor demo"
                    width="50%"
                  />
                  <br />
                  <a
                    href="https://github.com/hidalgopl/sailor"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try it now!
                  </a>{" "}
                </div>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Tests;
