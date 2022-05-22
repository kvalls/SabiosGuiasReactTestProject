import 'aframe';
import './RoutesVR.css';
import { setVideoActive } from '../components/Video360Click.js';
import { useEffect } from 'react';
import MenuItem from '../components/MenuItem';
import InformationCanvas from '../components/InformationCanvas';
import { useParams } from 'react-router-dom';
import { infoRoutes } from '../components/infoRoutes';


function RoutesVR() {
  const { route, stop } = useParams();

  useEffect(() => {
    setVideoActive();
  }, []);

  const isVideo = (id, stop) => {
    return infoRoutes[id].stops[stop].video.includes("mp4");
  }

  const calculateSkyOpacity = (id, stop) => {
    return isVideo(id, stop) ? '0' : '1';
  }

  return (
    <div className="my-container">
      {/* <button id="play-button">Play</button> */}

      <a-scene>
        <a-assets>
          <video id="vid" loop={true} src={`/video/Route-${route}/Route-${route}-Stop-${stop}.mp4`} autoPlay={true} > </video>
          <img id="sky" src={`/video/Route-${route}/Route-${route}-Stop-${stop}.jpg`} />
        </a-assets>

        <a-entity camera="" position="0 1.6 0" look-controls="" >
          <a-entity cursor="fuse:true;fuseTimeout:2000" geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.02" position="0 0 -1.8" material="shader:flat;color:#FFFFF" animation__mouseenter="from:1 1 1;dir:reverse;dur:2000;property:scale;startEvents:mouseenter;to:4 4 4"
            raycaster="objects: .clickable">
          </a-entity>
        </a-entity>
        {
          infoRoutes[route - 1].stops.map((s, index) =>
            <MenuItem key={index} x=".8" y="1.6" pos={index - 1} route={route} stop={index} textToShow={s.name} available={s.video !== null} />
          )
        }

        {/* <InformationCanvas x="0" y="0"  route="3" stop="2" textToShow="hidj" /> */}

            <a-videosphere src="#vid" rotation="0 0 0"></a-videosphere>
            {/* <a-sky opacity={calculateSkyOpacity(route, stop)} src="#sky" radius="300"></a-sky> */}
        


      </a-scene>
    </div>
  );
}

export default RoutesVR;