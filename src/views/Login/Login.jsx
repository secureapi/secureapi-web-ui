import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardText,
  Row,
  Col,
  Container,
} from "reactstrap";
import queryString from "query-string";
import { v4 as uuid } from "uuid";

import api from "api";
import env from "variables/env";
import StoreProvider, { actions } from "store/StoreProvider";

import "./Login.scss";

const Login = ({ history, match: { params }, location: { search } }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const dispatch = StoreProvider.useDispatch();

  useEffect(() => {
    if (params.platform) {
      const { code, state } = queryString.parse(search);

      setIsProcessing(true);
      api.resources
        .exchangeCode({ code, state })
        .then(({ data: { access_token } }) => {
          api.resources
            .exchangeAccessToken({
              platform: params.platform,
              accessToken: access_token,
            })
            .then(({ data: { token } }) => {
              dispatch(actions.user.setToken(token));
              history.push("/");
            })
            .finally(() => {
              setIsProcessing(false);
            });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const config = {
    state: uuid(),
    scope: "user:email",
    client_id: env.GITHUB_CLIENT_ID,
  };

  return (
    <Container className="p-login">
      <Row>
        <Col md={{ size: 4, offset: 4 }}>
          <Card className="card-user">
            <CardBody>
              <CardText />
              <div className="author">
                <div className="block block-one" />
                <div className="block block-two" />
                <div className="block block-three" />
                <div className="block block-four" />
                <div>
                  <img
                    className="logo"
                    alt="SecureAPI Logo"
                    src={require("assets/img/logo/logo_default_shadow.png")}
                  />
                  <h1>SecureAPI</h1>
                </div>
                <p className="description"></p>
              </div>
              <div className="card-description">
                Developer's security toolbox.
              </div>
            </CardBody>
            <CardFooter>
              {isProcessing ? (
                <div className="button-container">
                  <Button className="btn-icon btn-round disabled" color="login">
                    <i className="fas fa-spinner" />
                  </Button>
                </div>
              ) : (
                <div className="button-container">
                  <Button
                    href={`https://github.com/login/oauth/authorize?${queryString.stringify(
                      config
                    )}`}
                    className="btn-icon btn-round"
                    color="github"
                    title="Login via Github"
                  >
                    <i className="fab fa-github" />
                  </Button>
                </div>
              )}
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
