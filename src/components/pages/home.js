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

const handleChange = (value) => {
  console.log(`selected ${value}`);
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
          <Card.Title style={{ marginLeft: "11rem" }}>Add</Card.Title>

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
