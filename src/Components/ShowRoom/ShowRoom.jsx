import React from "react";
import shop from "../../assets/images/shop.jpg";

const ShowRoom = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-center">Our Show Room</h2>
      <div>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={shop} className="img-fluid rounded-start" alt="" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">RD.Bikes</h5>
                <p className="card-text">
                  Address: Chittagong, Karanihat, New Market_2nd Floor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowRoom;
