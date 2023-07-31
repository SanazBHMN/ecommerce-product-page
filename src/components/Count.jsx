import { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ bgcolor: "secondary.light", color: "secondary.darker" }}
    >
      <Button startIcon={<RemoveIcon color="primary" />}></Button>
      <Typography>{count}</Typography>
      <Button endIcon={<AddIcon color="primary" />}></Button>
    </Stack>
  );
};

export default Count;
