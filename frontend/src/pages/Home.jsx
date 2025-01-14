import React, { useEffect, useState } from 'react'
import Homebanner from '../components/homebanner'
import Homeabout from '../components/homeabout'
import Services from '../components/services'
import Homeproccess from '../components/homeproccess'
import Homecasestudy from '../components/homecasestudy'
import Homecomment from '../components/homecomment'
import Consult from '../components/consult'
import Homeblog from '../components/homeblog'
import Contact from '../components/contact'
import { fetchAlternativeModById } from '../services/api';
import Homealtpricing from '../components/homealtpricing'
import Homealtbanner from '../components/homealtbanner'
import Homealtabout from '../components/homealtabout'
import Homealtservices from '../components/homealtservices'
import Homealtexperience from '../components/homealtexperience'
import Homealtcasestudy from '../components/homealtcasestudy'
import Homealtinformation from '../components/homealtinformation'
import Homealtcomment from '../components/homealtcomment'
import Homealtteam from '../components/homealtteam'



function Home() {
  const [isModEnabled, setIsModEnabled] = useState(null);
  useEffect(() => {
    const getMod = async () => {
      const mod = await fetchAlternativeModById(3);
      setIsModEnabled(mod.alternativeMod); // Set the filtered active items
    };
    getMod();
  }, []);
  return (
    <div>
      {isModEnabled ? (
        <div>
          <Homealtbanner />
          <Homealtabout />
          <Homealtservices />
          <Homealtexperience />
          <Homealtcasestudy />
          <Homealtinformation />
          <Homealtcomment />
          <Homealtteam />
          <Homealtpricing />
        </div>
      ) :
        (
          <div>
            <Homebanner />
            <Homeabout />
            <Services />
            <Homeproccess />
            <Homecasestudy />
            <Homecomment />
            <Consult />
            <Homeblog />
            <Contact />
          </div>
        )}
    </div>
  )
}
export default Home
