import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import logoImg from "../../assets/logo.svg";

import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

export function Header() {
  const isNewTransactionModalOpen = useContextSelector(
    TransactionContext,
    (context) => {
      return context.isNewTransactionModalOpen;
    }
  );

  const toggleNewTransactionModal = useContextSelector(
    TransactionContext,
    (context) => {
      return context.toggleNewTransactionModal;
    }
  );

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
