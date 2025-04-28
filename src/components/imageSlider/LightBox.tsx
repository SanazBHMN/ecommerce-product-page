// imports from MUI
import IconButton from "@mui/material/IconButton";
// import assets
import nextIcon from "../../assets/images/icon-next.svg";
import previousIcon from "../../assets/images/icon-previous.svg";

interface LightBoxProps {
  image: string;
  onNext: () => void;
  onBack: () => void;
  isFirst: boolean;
  isLast: boolean;
}

function LightBox({ image, onNext, onBack, isFirst, isLast }: LightBoxProps) {
  return (
    <div>
      <img
        src={image}
        width={400}
        height={400}
        style={{ borderRadius: "10px" }}
        alt="Product"
      />
      <div>
        <IconButton onClick={onBack} disabled={isFirst}>
          <img src={previousIcon} alt="" />
        </IconButton>
        <IconButton onClick={onNext} disabled={isLast}>
          <img src={nextIcon} alt="" />
        </IconButton>
      </div>
    </div>
  );
}

export default LightBox;
