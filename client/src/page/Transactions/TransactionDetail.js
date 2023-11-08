import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function TransactionDetail() {
  const { state } = useParams();
  console.log("TransactionDetail");
  console.log(state);
  return <div>TransactionDetail</div>;
}

export default TransactionDetail;
