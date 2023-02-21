import React from "react";
import { Button, Input } from "antd";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import "react-notifications/lib/notifications.css";
import "../../card.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const Add = async (name) => {
    const result = await axios.post("", {
      name: name
    });
  
    if (result.status == 200) {
      NotificationManager.success("Succesfully");
      setTimeout(() => {}, 20000);
      window.location = "";
    } else {
      NotificationManager.error("Unsuccesfully");
    }
  };

const NewGass = () => {
  return (
    <div className="mt-20" style={{ marginLeft: "32rem" }}>
      <NotificationContainer></NotificationContainer>
      <Card
        style={{
          width: "30rem",
          marginTop: "11rem",
          marginBottom: "11rem",
          background: "",
        }}
      >
        <Card.Body>
          <Card.Title style={{ marginLeft: "6rem" }} className="text-xl ">New Greenhouse Gas Emission</Card.Title>

          <div className="my-6 mx-9">
            <Input
              type="text"
              id="name"
              name="name"
              style={{ marginBottom: 15 }}
              placeholder=""
              class="form-control"
              required
            />

            <Input
              type="text"
              id="name"
              name="name"
              style={{ marginBottom: 15 }}
              placeholder=""
              class="form-control"
              required
            />
          </div>

          <Button
            type="primary"
            className="my-3 mx-9"
            style={{ marginLeft: "22rem" }}
            onClick={() => {
              const name = document.getElementById("").value;

              if (name == "") {
                NotificationManager.warning("");
              } else {
                //   Add();
              }
            }}
          >
            ADD
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <div>
        <div>
          <NewGass />
        </div>
      </div>
    </div>
  );
};

export default Home;
