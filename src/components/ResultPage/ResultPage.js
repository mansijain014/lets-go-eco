import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IssueContainer from "./IssueContainer";
import CTA from "../Homepage/CTA";
import loader from "../../assets/images/loader.gif";
import NavBar1 from "../Homepage/NavBar1";

const ResultPage = ({ image, getDiseases, onTryAnotherClick, onClose }) => {

  const [diseases, setDiseases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setDiseases(await getDiseases());
      setLoading(false);
    }
    fetchData();
  }, [getDiseases]);

  return (
    <>
    <div>
      <NavBar1 />
    </div>
      <div className="resultpage">
        <img src={image} alt="Plant" id="plant-photo" />
        {
          loading ?
            <img src={loader} alt="Loader" />
            :
            <>
              <IssueContainer diseases={diseases} />
              <CTA text="Test Another Leaf" onClick={onTryAnotherClick} />
            </>
        }
      </div>

      <FontAwesomeIcon className="close-button" icon="window-close" onClick={onClose} />
    </>
  );
};

export default ResultPage;
