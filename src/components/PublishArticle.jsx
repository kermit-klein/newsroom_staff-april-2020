import React, { useEffect, useState } from "react";
import axios from "axios";
import UpdateArticle from "./UpdateArticle";
import createHeaders from "../modules/headers";
import fetchArticle from "../modules/fetchArticle";
import { useDispatch } from "react-redux";

const PublishArticle = (props) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const location = ""
  const international= ""

  useEffect(() => {
    fetchArticle(dispatch, setMessage, props.match.params.id);
  }, []);

  const onSubmitHandler = async (e) => {

    if (e.target.local.value) {
      location = "sweden"
        international = e.target.international.value
    }
    else {
      international = true
}
    try {
      const response = await axios.put(
        `/admin/articles/${props.match.params.id}`,
        {
          activity: "PUBLISH",
          premium: e.target.premium.value,
          category: document
            .getElementById("category")
            .firstElementChild.innerText.toLowerCase(),
          location: location,
          international: international
        },
        {
          headers: createHeaders(),
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <>
      <div id="publish-page">
        <UpdateArticle onSubmitHandler={onSubmitHandler} message={message} />
      </div>
    </>
  );
};

export default PublishArticle;
