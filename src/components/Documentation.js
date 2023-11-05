import React, {useEffect, useState} from 'react';
import { useLanguage } from "./LanguageProvider";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Documentation(){
  const { translate } = useLanguage();
//  const [activeTab, setActiveTab] = useState('tab1-tab');
//  const tabs = ['tab1-tab', 'tab2-tab', 'tab3-tab'];
  // useEffect(() => {
  //   // // Add an event listener to handle tab click
  //   // const handleTabClick = (event) => {
  //   //   event.preventDefault();
  //   //   if (event.target.dataset.toggle === 'tab') {
  //   //     const targetTab = event.target.getAttribute('href');
  //   //     const tabElement = document.querySelector(targetTab);
  //   //     if (tabElement) {
  //   //       tabElement.classList.add('show', 'active');
  //   //     }
  //   //   }
  //   // };

  //   // // Attach the event listener to all ".nav-tabs a" elements
  //   // const tabLinks = document.querySelectorAll('.nav-tabs a');
  //   // tabLinks.forEach((link) => {
  //   //   link.addEventListener('click', handleTabClick);
  //   // });

  //   // // Clean up the event listeners when the component unmounts
  //   // return () => {
  //   //   tabLinks.forEach((link) => {
  //   //     link.removeEventListener('click', handleTabClick);
  //   //   });
  //   // };

  //   tabs.forEach((tab, index) => {
  //     setActiveTab(tab);
  //   });

  // }, []);


  const [activeKey, setActiveKey] = useState(null);
  //const tabs = ['tab1', 'tab2', 'tab3']; // Replace with your tab keys

  useEffect(() => {
    // // Programmatically click all the tabs one by one
    // const delay = 1000; // Adjust this value to set the delay between tab switches

    // const switchTabsAutomatically = async () => {
    //   for (let i = 0; i < tabs.length; i++) {
    //     setActiveKey(tabs[i]);
    //     await new Promise((resolve) => setTimeout(resolve, delay));
    //   }
    // };

    // switchTabsAutomatically();


      // for (let i = 0; i < tabs.length; i++) {
      //   setActiveKey(tabs[i]);
      // }

      setActiveKey('tab1');
  },[]);

  return (
    // <div>
    //   <ul className="nav nav-tabs mt-2" id="documentTab" role="tablist">
    //     <li className="nav-item ms-1" role="presentation" >
    //       <a className={`nav-link document-tab ${activeTab === 'tab1-tab' ? 'active' : ''}`} id="tab1-tab" data-bs-toggle="tab" data-bs-target="#tab1" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">{translate("documentation.introduction")}</a>
    //     </li>
    //     <li className="nav-item ms-1" role="presentation">
    //       {/* <a className="nav-link document-tab" id="tab2-tab" data-bs-toggle="tab" data-bs-target="#tab2" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">{translate("documentation.design")}</a> */}
    //       <a className={`nav-link document-tab ${activeTab === 'tab2-tab' ? 'active' : ''}`} id="tab2-tab" data-bs-toggle="tab" data-bs-target="#tab2" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">{translate("documentation.design")}</a>
    //     </li>
    //     <li className="nav-item ms-1" role="presentation">
    //       <a className={`nav-link document-tab ${activeTab === 'tab3-tab' ? 'active' : ''}`} id="tab3-tab" data-bs-toggle="tab" data-bs-target="#tab3" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">{translate("documentation.navigationBar")}</a>
    //     </li>
    //   </ul>

    //   <div className="tab-content" id="documentTabContent">

    //     {/* Introduction */}  
    //     <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
    //       <div className="card" style={{width: "auto"}}>
    //         <div className="card-header fw-bold text-white">
    //           {translate("documentation.introduction")}
    //         </div>
    //         <div className="card-body">
    //           <p>{translate("documentation.introductionContent")}</p>
    //         </div>
    //       </div>    
    //     </div>
        
    //     {/* Design */}  
    //     <div className="tab-pane fade show active" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
    //       <div className="card" style={{width: "auto"}}>
    //         <div className="card-header fw-bold text-white">
    //           {translate("documentation.design")}
    //         </div>
    //         <div className="card-body">
    //           <p>{translate("documentation.designContent")}</p>
    //         </div>
    //       </div>    
    //     </div>

    //     {/* Navigation Bar */}  
    //     <div className="tab-pane fade show active" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
    //       <div className="card" style={{width: "auto"}}>
    //         <div className="card-header fw-bold text-white">
    //           {translate("documentation.navigationBar")}
    //         </div>
    //         <div className="card-body">
    //           <p>{translate("documentation.navigationBarContent")}</p>
    //         </div>
    //       </div>    
    //     </div>

    //   </div>
    // </div>


<div className="mb-5">
<Tabs activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
  <Tab eventKey="tab1" title={translate("documentation.introduction")}>
    <p className="mt-3 ms-3 me-3 text-start text-wrap">{translate("documentation.introductionContent")}</p>
  </Tab>
  <Tab eventKey="tab2" title={translate("documentation.design")}>
    <p className="mt-3 ms-3 me-3 text-start text-wrap">{translate("documentation.designContent")}</p>
  </Tab>
  <Tab eventKey="tab3" title={translate("documentation.navigationBar")}>
    <table className="table">
      <tbody>     
        {/* Home */}
        <tr className="table-white">
          <td><p className="ms-3 me-3 text-start text-wrap">{translate("documentation.navigationBarContent.home")}</p></td>
          <td><p className="ms-3 me-3 text-start text-wrap">{translate("documentation.navigationBarContent.homeIntroduction")}</p></td>
        </tr> 
        <tr className="table-white">
          <td></td>
          <td><p className="ms-3 me-3 text-start text-wrap">{translate("documentation.navigationBarContent.homeAdvice")}</p></td>
        </tr> 
        <tr className="table-white">
          <td></td>
          <td><p className="ms-3 me-3 text-start text-wrap">{translate("documentation.navigationBarContent.homeBusStop")}</p></td>
        </tr> 

        {/* Resident */}
        <tr className="table-white">
          <td><p className="ms-3 me-3 text-start text-wrap">{translate("documentation.navigationBarContent.resident")}</p></td>
          <td><p className="ms-3 me-3 text-start text-wrap">{translate("documentation.navigationBarContent.residentIntroduction")}</p></td>
        </tr> 
        <tr className="table-white">
          <td></td>
          <td><p className="ms-3 me-3 text-start text-wrap">{translate("documentation.navigationBarContent.residentFilterFirstName")}</p></td>
        </tr> 
        <tr className="table-white">
          <td></td>
          <td><p className="ms-3 me-3 text-start text-wrap">{translate("documentation.navigationBarContent.residentFilterLastName")}</p></td>
        </tr> 
        <tr className="table-white">
          <td></td>
          <td><p className="ms-3 me-3 text-start text-wrap">{translate("documentation.navigationBarContent.residentFilterPhoneNo")}</p></td>
        </tr> 
        <tr className="table-white">
          <td></td>
          <td><p className="ms-3 me-3 text-start text-wrap">{translate("documentation.navigationBarContent.residentFilterEmail")}</p></td>
        </tr> 
        <tr className="table-white">
          <td></td>
          <td><p className="ms-3 me-3 text-start text-wrap">{translate("documentation.navigationBarContent.residentFilterClearFilter")}</p></td>
        </tr> 
        <tr className="table-white">
          <td></td>
          <td><p className="ms-3 me-3 text-start text-wrap">{translate("documentation.navigationBarContent.residentNewResident")}</p></td>
        </tr> 
        <tr className="table-white">
          <td></td>
          <td><p className="ms-3 me-3 text-start text-wrap">{translate("documentation.navigationBarContent.residentActionEdit")}</p></td>
        </tr> 
        <tr className="table-white">
          <td></td>
          <td><p className="ms-3 me-3 text-start text-wrap">{translate("documentation.navigationBarContent.residentActionView")}</p></td>
        </tr> 
        <tr className="table-white">
          <td></td>
          <td><p className="ms-3 me-3 text-start text-wrap">{translate("documentation.navigationBarContent.residentActionDelete")}</p></td>
        </tr> 

        {/* About */}
        <tr className="table-white">
          <td><p className="ms-3 me-3 text-start text-wrap">{translate("documentation.navigationBarContent.about")}</p></td>
          <td><p className="ms-3 me-3 text-start text-wrap">{translate("documentation.navigationBarContent.aboutIntroduction")}</p></td>
        </tr> 

        {/* Documentation */}
        <tr className="table-white">
          <td><p className="ms-3 me-3 text-start text-wrap">{translate("documentation.navigationBarContent.documentation")}</p></td>
          <td><p className="ms-3 me-3 text-start text-wrap">{translate("documentation.navigationBarContent.documentationIntroduction")}</p></td>
        </tr> 

        {/* Language */}
        <tr className="table-white">
          <td><p className="ms-3 me-3 text-start text-wrap">{translate("documentation.navigationBarContent.language")}</p></td>
          <td><p className="ms-3 me-3 text-start text-wrap">{translate("documentation.navigationBarContent.languageIntroduction")}</p></td>
        </tr> 

        {/* Search */}
        <tr className="table-white">
          <td><p className="ms-3 me-3 text-start text-wrap">{translate("documentation.navigationBarContent.residentSearch")}</p></td>
          <td><p className="ms-3 me-3 text-start text-wrap">{translate("documentation.navigationBarContent.residentSearchIntroduction")}</p></td>
        </tr> 
        <tr className="table-white">
          <td><p className="ms-3 me-3 text-start text-wrap">{translate("documentation.navigationBarContent.go")}</p></td>
          <td><p className="ms-3 me-3 text-start text-wrap">{translate("documentation.navigationBarContent.goIntroduction")}</p></td>
        </tr> 

 
      </tbody>
    </table>


  </Tab>
</Tabs>
</div>

  )
}

export default Documentation;