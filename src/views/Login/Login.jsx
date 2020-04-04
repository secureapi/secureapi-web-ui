import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardText,
  Row,
  Col,
  Container
} from "reactstrap";
import queryString  from 'query-string';
import { v4 as uuid } from 'uuid';

import api from 'api';
import env from 'variables/env';
import StoreProvider, { actions } from 'store/StoreProvider'

import './Login.scss';

const { connect } = StoreProvider

const Login = ({ history, match: { params }, location: { search }, setToken }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => { 
    if(params.platform) {
      const { code, state } = queryString.parse(search);
  
      setIsProcessing(true)
      api.resources.exchangeCode({ code, state })
        .then(({ data: { access_token } }) => {
          api.resources.exchangeAccessToken({
            platform: params.platform,
            accessToken: access_token
          }).then(({ data: { token } }) => {
            setToken(token)
            history.push('/')
          }).finally(() => {
            setIsProcessing(false)
          })
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const config = {
    state: uuid(),
    scope: 'user:email',
    client_id: env.GITHUB_CLIENT_ID
  }

  return (
    <Container className="p-login">
      <Row>
        <Col md={{ size: 4, offset: 4}}>
          <Card className="card-user">
            <CardBody>
              <CardText/>
              <div className="author">
                <div className="block block-one"/>
                <div className="block block-two"/>
                <div className="block block-three"/>
                <div className="block block-four"/>
                <div>
                  <img src={require("assets/img/logo240.png")}/>
                </div>
                <p className="description"></p>
              </div>
              <div className="card-description">
                To know what you know and what you do not know, that is true knowledge.
              </div>
            </CardBody>
            <CardFooter>
              {
                isProcessing ? (
                <div className="button-container">
                  <Button
                    className="btn-icon btn-round disabled"
                    color="login"
                  >
                    <i className="fas fa-spinner"/>
                  </Button>
                </div>
                ) : (
                <div className="button-container">
                  <Button
                    href={`https://github.com/login/oauth/authorize?${queryString.stringify(config)}`}
                    className="btn-icon btn-round"
                    color="github"
                    title="Login via Github"
                  >
                    <i className="fab fa-github"/>
                  </Button>
                </div>
                )
              }
              
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default connect(null, {
  setToken: actions.user.setToken
})(Login)