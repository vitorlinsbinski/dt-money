import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  DivTransaction,
  PriceHightlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { dateFormater, priceFormater } from "../../utils/formater";

import { useContextSelector } from "use-context-selector";

export function Transactions() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions;
  });

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <DivTransaction>
          <TransactionsTable>
            <tbody>
              {transactions.map((transaction) => {
                return (
                  <tr key={transaction.id}>
                    <td>{transaction.description}</td>
                    <PriceHightlight variant={transaction.type}>
                      {transaction.type == "outcome" && "- "}
                      {priceFormater.format(transaction.price)}
                    </PriceHightlight>
                    <td>{transaction.category}</td>
                    <td>
                      {dateFormater.format(new Date(transaction.createdAt))}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </TransactionsTable>
        </DivTransaction>
      </TransactionsContainer>
    </div>
  );
}
