import { styled } from "@stitches/react";
import * as Dialog from "@radix-ui/react-dialog";

const Overlay = styled(Dialog.Overlay, {
  background: "rgba(0 0 0 / 0.5)",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "grid",
  placeItems: "center",
  overflowY: "auto"
});

const Content = styled(Dialog.Content, {
  minWidth: 300,
  background: "white",
  padding: 30,
  borderRadius: 4
});

export default () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger />
      <Dialog.Portal>
        <Overlay>
          <Content>...</Content>
        </Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
