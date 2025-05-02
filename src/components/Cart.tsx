import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";

import { styled } from "@mui/system";

const PopupBody = styled("div")(
  ({ theme }) => `
    width: max-content;
    padding: 12px 16px;
    margin: 8px;
    border-radius: 8px;
    border: 1px solid red;
    z-index: 1;
    `
);

interface CartProps {
  id: string | undefined;
  open: boolean | undefined;
}

function Cart({ id, open }: CartProps) {
  return (
    <BasePopup id={id} open={open}>
      <PopupBody></PopupBody>
    </BasePopup>
  );
}

export default Cart;
