import React, { useLayoutEffect, useEffect, useState } from "react";
import STUDY_CARD from "./studyCard";
import { api } from "../../api/api.js";

const Studies = props => {
   const [studyData, setStudyData] = useState([]);

   getStudies: useEffect(() => {
      (async () => {
         let { studies } = await api("study/list", {
            sid: session,
         });
         setStudyListData(() => studies);
      })();
   }, []);

   let { activePane, session, studyListData, setStudyListData } = props;

   let cards = () => studyListData?.map(x => <STUDY_CARD study={x} />);

   let StudiesJSX = (
      <div id='study-list' className=''>
         <div className=''>placeholder{cards()}</div>
      </div>
   );

   return activePane === "studies" && StudiesJSX;
};

export default Studies;
