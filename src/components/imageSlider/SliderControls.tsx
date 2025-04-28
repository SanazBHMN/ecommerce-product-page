// imports from MUI
import IconButton from "@mui/material/IconButton";
// import assets
import previousIcon from "../../assets/images/icon-previous.svg";
import nextIcon from "../../assets/images/icon-next.svg";

interface SliderControlsProps {
  onNext: () => void;
  onBack: () => void;
}

function SliderControls({ onNext, onBack }: SliderControlsProps) {
  return (
    <div>
      <IconButton onClick={onBack}>
        <img src={previousIcon} />
      </IconButton>
      <IconButton onClick={onNext}>
        <img src={nextIcon} />
      </IconButton>
    </div>
  );
}

export default SliderControls;
