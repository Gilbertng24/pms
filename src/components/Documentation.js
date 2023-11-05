import React, {useEffect, useState} from 'react';
import { useLanguage } from "./LanguageProvider";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Documentation(){
  const { translate } = useLanguage();
  const [activeKey, setActiveKey] = useState(null);

  useEffect(() => {
      setActiveKey('tab1');
  },[]);

  return (
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