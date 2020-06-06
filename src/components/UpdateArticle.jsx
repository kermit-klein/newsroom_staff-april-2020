import React from "react";
import { Link } from "react-router-dom";
import categoryList from "../modules/category";
import { Container, Grid, Form, Dropdown, Button } from "semantic-ui-react";
import Preview from "./Preview";
import { useSelector, useDispatch } from "react-redux";

const UpdateArticle = (props) => {
  const selectedArticle = useSelector((state) => state.article);
  const categories = categoryList();
  const dispatch = useDispatch()

  const resetSingleArticle = () => {
    dispatch({
      type: "RESET_ARTICLE_PREVIEW"
    })
  }

  return (
    <>
      {selectedArticle && (
        <Grid >
          <Grid.Column id="preview" width={8}>
            <Preview selectedArticle={selectedArticle} />
          </Grid.Column>
          <Grid.Column width={4}>
            <Container id="form-container">
            <Link to="/review" id="back-btn" onClick={resetSingleArticle}>
              <Button>Back to list</Button>
            </Link>
            {props.message === "Article successfully published!" ? (
              <p id="success-message">{props.message}</p>
            ) : (
              <Form
                className="publishing-form"
                onSubmit={(e) => props.onSubmitHandler(e)}
              >
                <Form.Field>
                  <label>Category</label>
                  <Dropdown
                    selection
                    id="category"
                    name="category"
                    placeholder={selectedArticle.category}
                    options={categories}
                  ></Dropdown>
                </Form.Field>
                <Form.Field>
                  <input
                    id="radio-free"
                    label="Free"
                    name="premium"
                    value={true}
                    type="radio"
                    defaultChecked
                  />
                  <label style={{ display: "inline" }}> Free </label>
                  <input
                    id="radio-premium"
                    label="Premium"
                    name="premium"
                    value={false}
                    type="radio"
                  />
                  <label style={{ display: "inline" }}> Premium</label>
                </Form.Field>
                <Form.Field>
                  <input
                    id="checkbox-sweden"
                    name="local"
                    value={false}
                    type="checkbox"
                  />
                  <label style={{ display: "inline" }}>
                    {" "}
                    Local News Sweden{" "}
                  </label>
                  <input
                    id="checkbox-International"
                    name="international"
                    value={false}
                    type="checkbox"
                  />
                  <label style={{ display: "inline" }}>
                    {" "}
                    International News{" "}
                  </label>
                </Form.Field>
                <Button
                  loading={props.loading}
                  color="teal"
                  id="publish-btn"
                  type="submit"
                >
                  Publish Article
                </Button>
                <p id="error-message">{props.message}</p>
              </Form>
            )}
            </Container>
          </Grid.Column>
        </Grid>
      )}
    </>
  );
};

export default UpdateArticle;
