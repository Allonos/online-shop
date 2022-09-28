import React, { Fragment, useState, useRef, useEffect } from 'react'

import { GoSearch } from 'react-icons/go';
import { RiArrowDropDownLine } from 'react-icons/ri'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

import classes from '../Phones.module.css';

function PhoneLeftSidebar() {
  const [showPriceRange, setShowPriceRange] = useState(true);
  const [showCategory, setShowCategory] = useState(true);
  const [showReleaseDate, setShowReleaseDate] = useState(true);
  const [showWeight, setShowWeight] = useState(false);
  const [showBuild, setShowBuild] = useState(false);
  const [showSim, setShowSim] = useState(true);
  const [showDisplay, setShowDisplay] = useState(false);
  const [showOperatingSystem, setShowOperatingSystem] = useState(false);
  const [showChipset, setShowChipset] = useState(false);
  const [showCpu, setShowCpu] = useState(false);
  const [showGpu, setShowGpu] = useState(false);
  const [showRomMemory, setShowRomMemory] = useState(true);
  const [showMemoryCard, setShowMemoryCard] = useState(false);
  const [showMainCameraType, setShowMainCameraType] = useState(true);
  const [showMainCamera, setShowMainCamera] = useState(false);
  const [showSelfieCamera, setShowSelfieCamera] = useState(false);
  const [showVideoRecording, setShowVideoRecording] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showSelfie, setShowSelfie] = useState(false);
  const [showWlan, setShowWlan] = useState(false);
  const [showBluetooth, setShowBluetooth] = useState(false);
  const [showNfc, setShowNfc] = useState(false);
  const [showRadio, setShowRadio] = useState(false);
  const [showUsbPort, setShowUsbPort] = useState(false);
  const [showJack, setShowJack] = useState(false);
  const [showWireless, setShowWireless] = useState(false);
  const [showRecognation, setShowRecognation] = useState(false);
  const [showBatteryType, setShowBatteryType] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.filterContainer}>
        <div className={classes.title}>
          <h1>Filter</h1>
        </div>
        <div className={classes.filterContent}>
          <div className={classes.selection}>
            <p>Your selection</p>
            <p className={classes.clear}>Clear</p>
          </div>
          <div className={classes.price}>
            <div className={classes.priceDropdown}>
              <p>Price</p>
              {showPriceRange && <RiArrowDropDownLine onClick={() => setShowPriceRange(false)} className={classes.drowdown} />}
              {!showPriceRange && <MdOutlineKeyboardArrowRight onClick={() => setShowPriceRange(true)} className={classes.drowdown} />}
            </div>
            {showPriceRange && (
              <Fragment>
                <div className={classes.chooseRange}></div>
                <div className={classes.chooseRangeNum}>
                  <div className={classes.range}>
                    <input type='text' placeholder='0' />
                  </div>
                  <div className={classes.rangeSecond}>
                    <input type='text' placeholder='5599' />
                  </div>
                </div>
              </Fragment>
            )}
          </div>
          <div className={classes.categories}>
            <div className={classes.priceDropdown}>
              <p>Category</p>
              {showCategory && <RiArrowDropDownLine onClick={() => setShowCategory(false)} className={classes.drowdown} />}
              {!showCategory && <MdOutlineKeyboardArrowRight onClick={() => setShowCategory(true)} className={classes.drowdown} />}
            </div>
            {showCategory && (
              <div className={classes.checklist}>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Apple</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Poco</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Asus</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Xiaomi</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Samsung</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Huawei</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Google</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>OnePlus</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Realme</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>ZTE</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Nokia</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Honor</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>FLY</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Cat</p>
                </div>
              </div>
            )}
          </div>

          <div className={classes.categories}>
            <div className={classes.priceDropdown}>
              <p>Release date</p>
              {showReleaseDate && <RiArrowDropDownLine onClick={() => setShowReleaseDate(false)} className={classes.drowdown} />}
              {!showReleaseDate && <MdOutlineKeyboardArrowRight onClick={() => setShowReleaseDate(true)} className={classes.drowdown} />}
            </div>
            {showReleaseDate && (
              <div className={classes.checklist}>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>2018</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>2019</p>
                </div>
                <div className={classes.more}>
                  <p>See more</p>
                </div>
              </div>
            )}
          </div>
          <div className={classes.categories}>
            <div className={classes.priceDropdown}>
              <p>Weight</p>
              {showWeight && <RiArrowDropDownLine onClick={() => setShowWeight(false)} className={classes.drowdown} />}
              {!showWeight && <MdOutlineKeyboardArrowRight onClick={() => setShowWeight(true)} className={classes.drowdown} />}
            </div>
            {showWeight && (
              <div className={classes.checklist}>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>122 g</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>135g</p>
                </div>
              </div>
            )}
          </div>
          <div className={classes.categories}>
            <div className={classes.priceDropdown}>
              <p>Build</p>
              {showBuild && <RiArrowDropDownLine onClick={() => setShowBuild(false)} className={classes.drowdown} />}
              {!showBuild && <MdOutlineKeyboardArrowRight onClick={() => setShowBuild(true)} className={classes.drowdown} />}
            </div>
            {showBuild && (
              <div className={classes.checklist}>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Aluminum body</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Front glass</p>
                </div>
              </div>
            )}
          </div>
          <div className={classes.categories}>
            <div className={classes.priceDropdown}>
              <p>SIM</p>
              {showSim && <RiArrowDropDownLine onClick={() => setShowSim(false)} className={classes.drowdown} />}
              {!showSim && <MdOutlineKeyboardArrowRight onClick={() => setShowSim(true)} className={classes.drowdown} />}
            </div>
            {showSim && (
              <div className={classes.checklist}>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Dual SIM</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Hybrid Dual SIM</p>
                </div>
                <div className={classes.more}>
                  <p>See more</p>
                </div>
              </div>
            )}
          </div>
          <div className={classes.categories}>
            <div className={classes.priceDropdown}>
              <p>Display Size</p>
              {showDisplay && <RiArrowDropDownLine onClick={() => setShowDisplay(false)} className={classes.drowdown} />}
              {!showDisplay && <MdOutlineKeyboardArrowRight onClick={() => setShowDisplay(true)} className={classes.drowdown} />}
            </div>
            {showDisplay && (
              <div className={classes.checklist}>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>6.67 inches</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>1.52 inches</p>
                </div>
              </div>
            )}
          </div>
          <div className={classes.categories}>
            <div className={classes.priceDropdown}>
              <p>Operating system</p>
              {showOperatingSystem && <RiArrowDropDownLine onClick={() => setShowOperatingSystem(false)} className={classes.drowdown} />}
              {!showOperatingSystem && <MdOutlineKeyboardArrowRight onClick={() => setShowOperatingSystem(true)} className={classes.drowdown} />}
            </div>
            {showOperatingSystem && (
              <div className={classes.checklist}>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Android</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Android 10</p>
                </div>
              </div>
            )}
          </div>
          <div className={classes.categories}>
            <div className={classes.priceDropdown}>
              <p>Chipset</p>
              {showChipset && <RiArrowDropDownLine onClick={() => setShowChipset(false)} className={classes.drowdown} />}
              {!showChipset && <MdOutlineKeyboardArrowRight onClick={() => setShowChipset(true)} className={classes.drowdown} />}
            </div>
            {showChipset && (
              <div className={classes.checklist}>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>MediaTek Helio G35</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Apple A10 Fusion</p>
                </div>
              </div>
            )}
          </div>
          <div className={classes.categories}>
            <div className={classes.priceDropdown}>
              <p>CPU</p>
              {showCpu && <RiArrowDropDownLine onClick={() => setShowCpu(false)} className={classes.drowdown} />}
              {!showCpu && <MdOutlineKeyboardArrowRight onClick={() => setShowCpu(true)} className={classes.drowdown} />}
            </div>
            {showCpu && (
              <div className={classes.checklist}>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder)</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>
                    Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm)
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className={classes.categories}>
            <div className={classes.priceDropdown}>
              <p>GPU</p>
              {showGpu && <RiArrowDropDownLine onClick={() => setShowGpu(false)} className={classes.drowdown} />}
              {!showGpu && <MdOutlineKeyboardArrowRight onClick={() => setShowGpu(true)} className={classes.drowdown} />}
            </div>
            {showGpu && (
              <div className={classes.checklist}>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Mali-G71 MP2</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Mali-G52 MC2</p>
                </div>
              </div>
            )}
          </div>
          <div className={classes.categories}>
            <div className={classes.priceDropdown}>
              <p>ROM memory</p>
              {showRomMemory && <RiArrowDropDownLine onClick={() => setShowRomMemory(false)} className={classes.drowdown} />}
              {!showRomMemory && <MdOutlineKeyboardArrowRight onClick={() => setShowRomMemory(true)} className={classes.drowdown} />}
            </div>
            {showRomMemory && (
              <div className={classes.checklist}>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>1 TB</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>128 MB</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>16 MB</p>
                </div>
                <div className={classes.more}>
                  <p>See more</p>
                </div>
              </div>
            )}
          </div>
          <div className={classes.categories}>
            <div className={classes.priceDropdown}>
              <p>Memory card slot</p>
              {showMemoryCard && <RiArrowDropDownLine onClick={() => setShowMemoryCard(false)} className={classes.drowdown} />}
              {!showMemoryCard && <MdOutlineKeyboardArrowRight onClick={() => setShowMemoryCard(true)} className={classes.drowdown} />}
            </div>
            {showMemoryCard && (
              <div className={classes.checklist}>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>(uses SIM 2 slot)</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>NO</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Up to 1 TB (dedicated slot)</p>
                </div>
              </div>
            )}
          </div>
          <div className={classes.categories}>
            <div className={classes.priceDropdown}>
              <p>Main camera type</p>
              {showMainCameraType && <RiArrowDropDownLine onClick={() => setShowMainCameraType(false)} className={classes.drowdown} />}
              {!showMainCameraType && <MdOutlineKeyboardArrowRight onClick={() => setShowMainCameraType(true)} className={classes.drowdown} />}
            </div>
            {showMainCameraType && (
              <div className={classes.checklist}>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Dual</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Five</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Four</p>
                </div>
                <div className={classes.more}>
                  <p>See more</p>
                </div>
              </div>
            )}
          </div>
          <div className={classes.categories}>
            <div className={classes.priceDropdown}>
              <p>Main camera</p>
              {showMainCamera && <RiArrowDropDownLine onClick={() => setShowMainCamera(false)} className={classes.drowdown} />}
              {!showMainCamera && <MdOutlineKeyboardArrowRight onClick={() => setShowMainCamera(true)} className={classes.drowdown} />}
            </div>
            {showMainCamera && (
              <div className={classes.checklist}>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>0.3 MP</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>1.3 MP</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>108+10+10+12 MP</p>
                </div>
              </div>
            )}
          </div>
          <div className={classes.categories}>
            <div className={classes.priceDropdown}>
              <p>Selfie camera type</p>
              {showSelfieCamera && <RiArrowDropDownLine onClick={() => setShowSelfieCamera(false)} className={classes.drowdown} />}
              {!showSelfieCamera && <MdOutlineKeyboardArrowRight onClick={() => setShowSelfieCamera(true)} className={classes.drowdown} />}
            </div>
            {showSelfieCamera && (
              <div className={classes.checklist}>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Single</p>
                </div>
              </div>
            )}
          </div>
          <div className={classes.categories}>
            <div className={classes.priceDropdown}>
              <p>Video recording</p>
              {showVideoRecording && <RiArrowDropDownLine onClick={() => setShowVideoRecording(false)} className={classes.drowdown} />}
              {!showVideoRecording && <MdOutlineKeyboardArrowRight onClick={() => setShowVideoRecording(true)} className={classes.drowdown} />}
            </div>
            {showVideoRecording && (
              <div className={classes.checklist}>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>1080p@30/60/120/240fps</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>1080p@30/60/240fps</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>1080p@30fps</p>
                </div>
              </div>
            )}
          </div>
          <div className={classes.categories}>
            <div className={classes.priceDropdown}>
              <p>Additional features</p>
              {showFeatures && <RiArrowDropDownLine onClick={() => setShowFeatures(false)} className={classes.drowdown} />}
              {!showFeatures && <MdOutlineKeyboardArrowRight onClick={() => setShowFeatures(true)} className={classes.drowdown} />}
            </div>
            {showFeatures && (
              <div className={classes.checklist}>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>ANT+</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Auto-HDR</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Dual-LED dual-tone flash</p>
                </div>
              </div>
            )}
          </div>
          <div className={classes.categories}>
            <div className={classes.priceDropdown}>
              <p>Selfie came</p>
              {showSelfie && <RiArrowDropDownLine onClick={() => setShowSelfie(false)} className={classes.drowdown} />}
              {!showSelfie && <MdOutlineKeyboardArrowRight onClick={() => setShowSelfie(true)} className={classes.drowdown} />}
            </div>
            {showSelfie && (
              <div className={classes.checklist}>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>8 MP, f/2.0,(wide)</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>1.2 MP</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>1.3 MP</p>
                </div>
                <div className={classes.more}>
                  <p>See more</p>
                </div>
              </div>
            )}
          </div>
          <div className={classes.categories}>
            <div className={classes.priceDropdown}>
              <p>WLAN</p>
              {showWlan && <RiArrowDropDownLine onClick={() => setShowWlan(false)} className={classes.drowdown} />}
              {!showWlan && <MdOutlineKeyboardArrowRight onClick={() => setShowWlan(true)} className={classes.drowdown} />}
            </div>
            {showWlan && (
              <div className={classes.checklist}>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>a/b/g/n</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>a/b/g/n/ac</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>b/gn</p>
                </div>
              </div>
            )}
          </div>
          <div className={classes.categories}>
            <div className={classes.priceDropdown}>
              <p>Bluetooth</p>
              {showBluetooth && <RiArrowDropDownLine onClick={() => setShowBluetooth(false)} className={classes.drowdown} />}
              {!showBluetooth && <MdOutlineKeyboardArrowRight onClick={() => setShowBluetooth(true)} className={classes.drowdown} />}
            </div>
            {showBluetooth && (
              <div className={classes.checklist}>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>3.0</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>4.0</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>4.1</p>
                </div>
              </div>
            )}
          </div>
          <div className={classes.categories}>
            <div className={classes.priceDropdown}>
              <p>NFC</p>
              {showNfc && <RiArrowDropDownLine onClick={() => setShowNfc(false)} className={classes.drowdown} />}
              {!showNfc && <MdOutlineKeyboardArrowRight onClick={() => setShowNfc(true)} className={classes.drowdown} />}
            </div>
            {showNfc && (
              <div className={classes.checklist}>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Apple pay only</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>NO</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Without NFC</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>YES</p>
                </div>
              </div>
            )}
          </div>
          <div className={classes.categories}>
            <div className={classes.priceDropdown}>
              <p>FM-Radio</p>
              {showRadio && <RiArrowDropDownLine onClick={() => setShowRadio(false)} className={classes.drowdown} />}
              {!showRadio && <MdOutlineKeyboardArrowRight onClick={() => setShowRadio(true)} className={classes.drowdown} />}
            </div>
            {showRadio && (
              <div className={classes.checklist}>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>FM-Radio</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>NO</p>
                </div>
              </div>
            )}
          </div>
          <div className={classes.categories}>
            <div className={classes.priceDropdown}>
              <p>USB Port</p>
              {showUsbPort && <RiArrowDropDownLine onClick={() => setShowUsbPort(false)} className={classes.drowdown} />}
              {!showUsbPort && <MdOutlineKeyboardArrowRight onClick={() => setShowUsbPort(true)} className={classes.drowdown} />}
            </div>
            {showUsbPort && (
              <div className={classes.checklist}>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>USB On-The-Go</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>1.0</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>2.0</p>
                </div>
              </div>
            )}
          </div>
          <div className={classes.categories}>
            <div className={classes.priceDropdown}>
              <p>3.5mm Jack</p>
              {showJack && <RiArrowDropDownLine onClick={() => setShowJack(false)} className={classes.drowdown} />}
              {!showJack && <MdOutlineKeyboardArrowRight onClick={() => setShowJack(true)} className={classes.drowdown} />}
            </div>
            {showJack && (
              <div className={classes.checklist}>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>NO</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>YES</p>
                </div>
              </div>
            )}
          </div>
          <div className={classes.categories}>
            <div className={classes.priceDropdown}>
              <p>Wireless charging</p>
              {showWireless && <RiArrowDropDownLine onClick={() => setShowWireless(false)} className={classes.drowdown} />}
              {!showWireless && <MdOutlineKeyboardArrowRight onClick={() => setShowWireless(true)} className={classes.drowdown} />}
            </div>
            {showWireless && (
              <div className={classes.checklist}>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Fast charging 40W</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Fat Qi/PMA wireless charging 15W</p>
                </div>
              </div>
            )}
          </div>
          <div className={classes.categories}>
            <div className={classes.priceDropdown}>
              <p>Face recognation</p>
              {showRecognation && <RiArrowDropDownLine onClick={() => setShowRecognation(false)} className={classes.drowdown} />}
              {!showRecognation && <MdOutlineKeyboardArrowRight onClick={() => setShowRecognation(true)} className={classes.drowdown} />}
            </div>
            {showRecognation && (
              <div className={classes.checklist}>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>NO</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>YES</p>
                </div>
              </div>
            )}
          </div>
          <div className={classes.categories}>
            <div className={classes.priceDropdown}>
              <p>Battery type</p>
              {showBatteryType && <RiArrowDropDownLine onClick={() => setShowBatteryType(false)} className={classes.drowdown} />}
              {!showBatteryType && <MdOutlineKeyboardArrowRight onClick={() => setShowBatteryType(true)} className={classes.drowdown} />}
            </div>
            {showBatteryType && (
              <div className={classes.checklist}>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Non-removable</p>
                </div>
                <div className={classes.checklistContent}>
                  <input type='checkbox' />
                  <p>Removable</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhoneLeftSidebar