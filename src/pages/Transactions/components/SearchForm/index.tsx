import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionContext } from "../../../../contexts/TransactionsContext";

import { useContextSelector } from "use-context-selector";

const searchFormSchema = zod.object({
  query: zod.string(),
});

type SearchFormInputs = zod.infer<typeof searchFormSchema>;

import { memo } from "react";

/**
 *
 * Por que um componente renderiza?
 * - Hooks changed
 * - Props changed
 * - Parent rerendered
 *
 * Qual o fluxo de renderização?
 * 1. O React recria o HTML da interface daquele componente
 * 2. Compara a versào do HTML recriada com a versão anterior
 * 3. Se alguma coisa mudou, ele reescreve o HTML na tela
 *
 * Memo:
 * 0. Hooks changed, Props changed (deep comparison)
 * 0.1 Comparar com a versão anterior dos hooks e props
 * 0.2 Se mudou algo, ele vai permitir a nova renderização
 */

function SearchFormComponent() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  const fetchTransactions = useContextSelector(
    TransactionContext,
    (context) => {
      return context.fetchTransactions;
    }
  );

  async function handleSearchTransaction(data: SearchFormInputs) {
    await fetchTransactions(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}

export const SearchForm = memo(SearchFormComponent);
