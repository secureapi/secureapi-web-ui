import React, { useEffect, useRef, useState } from "react";

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
  Tooltip,
} from "reactstrap";
import NotificationAlert from "react-notification-alert";

import { getGravatarURL } from "utils";
import api from "api";
import StoreProvider, { actions, selectors } from "store/StoreProvider";

const UserProfile = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const notificationRef = useRef(null);
  const dispatch = StoreProvider.useDispatch();
  const profile = StoreProvider.useSelector(selectors.user.profile);

  useEffect(() => {
    api.resources.getUserProfile().then(({ data }) => {
      dispatch(actions.user.setUserProfile(data));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    api.resources.updateUserProfile(new FormData(e.target)).then(({ data }) => {
      dispatch(actions.user.setUserProfile(data));
    });
  };

  const copyToClipboard = () => {
    const accessKeyInput = document.createElement("textarea");
    accessKeyInput.value = profile.access_key;
    document.body.appendChild(accessKeyInput);
    accessKeyInput.select();
    accessKeyInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(accessKeyInput);

    const options = {
      place: "tr",
      message: (
        <div>
          <div>
            <b>Access key</b> has been successfully saved to the{" "}
            <b>clipboard</b>.
          </div>
        </div>
      ),
      type: "info",
      icon: "tim-icons icon-notes",
      autoDismiss: 7,
      closeButton: false,
    };

    notificationRef.current.notificationAlert(options);
  };

  return (
    <div className="content">
      <div className="react-notification-alert-container">
        <NotificationAlert ref={notificationRef} />
      </div>
      <Row>
        <Col md="8">
          <Card className="card-user">
            <Form onSubmit={onSubmit}>
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <div>
                    <img
                      alt="User avatar"
                      className="avatar"
                      src={getGravatarURL(profile.email)}
                    />
                  </div>
                  <p className="description">
                    {profile.first_name
                      ? `${profile.first_name} ${profile.last_name}`
                      : profile.username}
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
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <Input
                          defaultValue={profile.email}
                          name="email"
                          type="email"
                        />
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
                        <i
                          id="copy-to-clipboard"
                          style={{ marginLeft: "0.5rem", cursor: "pointer" }}
                          className="tim-icons icon-notes"
                          onClick={copyToClipboard}
                        />
                        <Tooltip
                          placement="top"
                          target="copy-to-clipboard"
                          isOpen={tooltipOpen}
                          toggle={() => setTooltipOpen(!tooltipOpen)}
                        >
                          Copy
                        </Tooltip>
                        <Input
                          readOnly
                          style={{ cursor: "copy" }}
                          cols="40"
                          defaultValue={profile.access_key}
                          type="textarea"
                          onClick={copyToClipboard}
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
  );
};

export default UserProfile;
