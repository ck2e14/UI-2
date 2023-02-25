import { useState } from "react";
import STUDIES from "./components/studies/studies.jsx";
import "./app.css";

function App() {
   const [activePane, setActivePane] = useState("studies");
   const [studyListData, setStudyListData] = useState([]);
   const [session, setSession] = useState(
      "944d4da5-4f05-4207-bfe5-dad2923fdf52"
   );

   let paneClasses = {
      settings: activePane === "settings" ? "flex-item active" : "flex-item",
      studies: activePane === "studies" ? "flex-item active" : "flex-item",
      Admin: activePane === "Admin" ? "flex-item active" : "flex-item",
      patients: activePane === "patients" ? "flex-item active" : "flex-item",
   };

   const paneClick = pane => setActivePane(() => pane);

   let studies = () => {
      return (
         <>
            <div id='studies' className={paneClasses.studies}>
               <span
                  onClick={() => paneClick("studies")}
                  className='panel-header'>
                  Studies
               </span>

               <STUDIES
                  session={session}
                  activePane={activePane}
                  studyListData={studyListData}
                  setStudyListData={setStudyListData}
               />
            </div>
            <br />
         </>
      );
   };

   let patients = () => {
      return (
         <>
            <div id='patients' className={paneClasses.patients}>
               <span
                  onClick={() => paneClick("patients")}
                  className='panel-header'>
                  Patients
               </span>
            </div>
            <br />
         </>
      );
   };

   let settings = () => {
      return (
         <>
            <div id='settings' className={paneClasses.settings}>
               <span
                  onClick={() => paneClick("settings")}
                  className='panel-header'>
                  Settings
               </span>
            </div>
            <br />
         </>
      );
   };

   let admin = () => {
      return (
         <>
            <div id='admin' className={paneClasses.Admin}>
               <span
                  onClick={() => paneClick("Admin")}
                  className='panel-header'>
                  Admin
               </span>
            </div>
            <br />
         </>
      );
   };

   let appJSX = (
      <div className='App'>
         <div id='page' className='flex-col-centre-centre'>
            {studies()}
            {patients()}
            {settings()}
            {admin()}
         </div>

         {/* <div id='footer' className='flex-item'></div> */}
      </div>
   );

   return appJSX;
}

export default App;
