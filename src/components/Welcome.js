import React from "react";
import Button from "react-bootstrap/Button";
import profileImage from "../assets/images/profile.webp";
export default function Welcome() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-6 col-xl-6">
          <h1>
            Discover, collect, and charity in extraordinary NFT marketplace
          </h1>
          <p>
            In aenean posuere lorem risus nec. Tempor tincidunt aenean purus
            purus vestibulum nibh mi venenatis
          </p>
          <div className="row">
            <Button className="rounded" style={{ width: "50%" }}>
              EXPLORE
            </Button>
            <Button
              style={{ width: "50%" }}
              variant="outline-dark"
              className="rounded text-dark"
            >
              CREATE
            </Button>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-6 col-xl-6">
          <div
            class="card container-fluid col-sm-12 col-md-12 col-6 col-xl-6"
            style={{ width: "18rem;" }}
          >
            <img src={profileImage} />
            <div class="card-body">
              <div className="d-flex justify-content-space-between">
                <div>
                  <img width="50px" height="50px" src={profileImage} />
                </div>
                <div className=" row d-flex justify-content-space-between">
                  <div>
                    <p>Laura</p>
                    <p>0.21 width</p>
                  </div>
                  <div>
                    <p>We are here</p>
                    <p>25</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
