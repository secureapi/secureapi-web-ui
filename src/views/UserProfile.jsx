import React, { useEffect } from "react";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

import { getGravatarURL } from 'utils';
import api from 'api';
import StoreProvider, { actions, selectors } from 'store/StoreProvider';

const UserProfile = ({ profile, setUserProfile }) => {
  useEffect(() => {
    api.resources.getUserProfile()
      .then(({ data }) => {
        setUserProfile(data)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit = (e) => {
    e.preventDefault();
    api.resources.updateUserProfile(new FormData(e.target))
      .then(({ data }) => {
        setUserProfile(data)
      })
  }

  
  return (
    <div className="content">
      <Row>
        <Col md="8">
          <Card className="card-user">
            <Form onSubmit={onSubmit}>
              <CardBody>
                <CardText/>
                <div className="author">
                  <div className="block block-one"/>
                  <div className="block block-two"/>
                  <div className="block block-three"/>
                  <div className="block block-four"/>
                  <div>
                    <img
                      alt="..."
                      className="avatar"
                      src={getGravatarURL(profile.email)}
                    />
                  </div>
                  <p className="description">
                  {
                    profile.first_name ? (
                      `${profile.first_name} ${profile.last_name}`
                    ) : profile.username
                  }
                  </p>
                </div>
                <div className="card-description">
                <h5 className="title">Edit Profile</h5>
                  <Row>
                    <Col className="pr-md-1" md="3">
                      <FormGroup>
                        <label>Username</label>
                        <Input
                          defaultValue={profile.username}
                          type="text"
                          name="username"
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email
                        </label>
                        <Input defaultValue={profile.email} name="email" type="email"/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Input
                          defaultValue={profile.first_name}
                          type="text"
                          name="first_name"
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          defaultValue={profile.last_name}
                          type="text"
                          name="last_name"
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="8">
                      <FormGroup>
                        <label>Access Key</label>
                        <Input
                          readOnly
                          cols="40"
                          defaultValue={profile.access_key}
                          type="textarea"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="blue" type="submit">
                  Save
                </Button>
              </CardFooter>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default StoreProvider.connect(
  state => ({
    profile: selectors.user.profile(state)
  }),
  {
    setUserProfile: actions.user.setUserProfile
  }
)(UserProfile);
