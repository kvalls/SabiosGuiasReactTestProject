import 'aframe';
import './RoutesVR.css';
import { setVideoActive } from '../components/Video360Click.js';
import { useEffect } from 'react';
import MenuItem from '../components/MenuItem';
import { useParams } from 'react-router-dom';
import { infoRoutes } from '../components/infoRoutes';


function RoutesVR() {
  const { route, stop } = useParams();

  useEffect(() => {
    setVideoActive();
  }, []);

  return (
    <div className="my-container">
      {/* <button id="play-button">Play</button> */}

      <a-scene>
        <a-assets>
          <video id="vid" loop={true} src={`/video/Route-${route}/Route-${route}-Stop-${stop}.mp4`} autoPlay={true} > </video>
        </a-assets>

        <a-entity camera="" position="0 1.6 0" look-controls="" >
          <a-entity cursor="fuse:true;fuseTimeout:2000" geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.02" position="0 0 -1.8" material="shader:flat;color:#FFFFF" animation__mouseenter="from:1 1 1;dir:reverse;dur:2000;property:scale;startEvents:mouseenter;to:4 4 4"
            raycaster="objects: .clickable">
          </a-entity>
        </a-entity>
        {
          infoRoutes[route - 1].stops.map((s, index) =>
            <MenuItem key={index} x=".8" y="1.6" pos={index - 1} route={route} stop={index} textToShow={s.name} available={s.video !== ""} />
            
          )
        }
        

        <a-videosphere src="#vid" rotation ="20 0 0"></a-videosphere>
      </a-scene>
    </div>
  );
}

export default RoutesVR;