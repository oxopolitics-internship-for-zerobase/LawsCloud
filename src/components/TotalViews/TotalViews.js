import React, {useState} from "react";
import PropTypes from "prop-types";
import ViewArea from "../../style/StyledModal";
import {firebasedatabase} from "../../Firebase/firebase";
import {ref, get, child} from "firebase/database";

function TotalViews({billId, inModal}) {
  const [viewCount, setViewCount] = useState(0);

  get(child(ref(firebasedatabase), `billId/${billId}`)).then((snapshot) => {
    if (snapshot.exists()) {
      setViewCount(snapshot.val().count);
    } else if (inModal) {
      setViewCount(1);
    } else {
      setViewCount(0);
    }
  });

  return <ViewArea>{viewCount}</ViewArea>;
}

TotalViews.propType = {
  billId: PropTypes.string.isRequired,
  inModal: PropTypes.bool,
};

export default TotalViews;
