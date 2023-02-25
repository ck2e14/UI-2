import React, { useLayoutEffect, useState } from "react";

const StudyCard = props => {
   let {
      study: { uuid, patient_name, study_uid },
   } = props;

   let CardJSX = (
      <div id='' className='study-card study-card-wrapper'>
         <div className=''>{uuid}</div>
         <div className=''>{patient_name}</div>
         <div className=''>{study_uid}</div>
      </div>
   );

   return CardJSX;
};

export default StudyCard;
