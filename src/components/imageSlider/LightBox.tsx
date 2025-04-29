// imports from MUI
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
// import assets
import nextIcon from "../../assets/images/icon-next.svg";
import previousIcon from "../../assets/images/icon-previous.svg";

interface LightBoxProps {
  image: string;
  onNext?: () => void;
  onBack?: () => void;
  isFirst: boolean;
  isLast: boolean;
  onSmallScreen: boolean;
}

function LightBox({
  image,
  onNext,
  onBack,
  isFirst,
  isLast,
  onSmallScreen,
}: LightBoxProps) {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
      }}
    >
      <img
        src={image}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: !onSmallScreen ? "10px" : 0,
        }}
        alt="Product"
      />
      {onSmallScreen && (
        <Stack
          direction={"row"}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={onBack}
            disabled={isFirst}
            sx={{
              position: "absolute",
              top: "50%",
              bottom: "50%",
              left: "10px",
              width: "40px",
              height: "40px",
              backgroundColor: "white",
              display: "grid",
              placeItems: "center",
            }}
          >
            <img src={previousIcon} alt="Previous Picture" />
          </IconButton>
          <IconButton
            onClick={onNext}
            disabled={isLast}
            sx={{
              position: "absolute",
              top: "50%",
              bottom: "50%",
              right: "10px",
              width: "40px",
              height: "40px",
              backgroundColor: "white",
              display: "grid",
              placeItems: "center",
            }}
          >
            <img src={nextIcon} alt="Next Picture" />
          </IconButton>
        </Stack>
      )}
    </Box>
  );
}

export default LightBox;
