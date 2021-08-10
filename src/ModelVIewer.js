import '@google/model-viewer/dist/model-viewer';

const ModelViewer = (props) => {
  return (
    <model-viewer
      {...props}
    ></model-viewer>
  );
};

export default ModelViewer;