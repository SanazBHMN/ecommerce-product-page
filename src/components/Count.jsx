import { Button, Stack, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const Count = ({ count, increaseCount, decreaseCount }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        bgcolor: "secondary.light",
        color: "secondary.darker",
        marginTop: "1rem",
        marginBottom: "1rem",
      }}
    >
      <Button
        startIcon={<RemoveIcon color="primary" />}
        onClick={decreaseCount}
      ></Button>
      <Typography>{count}</Typography>
      <Button
        endIcon={<AddIcon color="primary" />}
        onClick={increaseCount}
      ></Button>
    </Stack>
  );
};

export default Count;
