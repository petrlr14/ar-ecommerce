import { useState } from 'react';
import ModelViewer from '../../ModelVIewer';
import style from './Image.module.css';

const Image = () => {
  const [showingAR, setShowingAR] = useState<boolean>(false);
  return (
    <div className={style.root}>
      {showingAR ? (
        <ModelViewer
          src="/models/bottle.glb"
          alt="A 3D model of an astronaut"
          ar
          ar-modes="webxr scene-viewer quick-look"
          environment-image="neutral"
          auto-rotate
          camera-controls
        />
      ) : (
        <div
          className={style.img}
          style={{
            background:
              "url('https://mk0hammertonmuln2rta.kinstacdn.com/wp-content/uploads/sites/3/2019/01/Outdoor-ODB0043-0B-AG-C-2-600x600.png') no-repeat center",
            backgroundSize: 'contain',
          }}
        ></div>
      )}
      <button
        className={style.arBtn}
        onClick={() => {
          setShowingAR((value) => !value);
        }}
      >
        AR: {showingAR ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default Image;
