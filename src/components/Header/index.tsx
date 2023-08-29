import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import logoImg from "../../assets/logo.svg";

import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";
import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionsContext";

export function Header() {
  const { isNewTransactionModalOpen, toggleNewTransactionModal } =
    useContext(TransactionContext);

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root
          open={isNewTransactionModalOpen}
          onOpenChange={toggleNewTransactionModal}
        >
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
