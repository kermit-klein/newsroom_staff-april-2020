import React from "react";
import { Menu, Container } from "semantic-ui-react";
import auth from "../modules/auth";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Header = (props) => {
  const logOut = async () => {
    await auth.signOut();
    props.dispatch({
      type: "LOG_OUT",
      payload: {
        authenticatedAs: "",
        uid: "",
      },
    });
  };

  const redirect = !props.authenticatedAs && (
    <Redirect to={{ pathname: "/" }} />
  );

  return (
    <Container className="header">
      {redirect}
      <Menu className="header" stackable>
        <Menu.Item>
          <h1>Daily News Sense</h1>
        </Menu.Item>
        {props.authenticatedAs && (
          <>
            <Menu.Item active>Write</Menu.Item>
            <Menu.Item position="right" id="logout" onClick={() => logOut()}>
              <h4>
                Log out <br />
                {props.uid}
              </h4>
            </Menu.Item>
          </>
        )}
      </Menu>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    authenticatedAs: state.authenticatedAs,
    uid: state.uid,
  };
};
export default connect(mapStateToProps)(Header);
