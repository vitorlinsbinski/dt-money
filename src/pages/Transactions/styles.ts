import styled from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: calc(1120px + 1.5rem * 2);
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  tr {
    background-color: ${(props) => props.theme["gray-700"]};

    &:hover {
      background-color: ${(props) => props.theme["gray-600"]};
    }

    td {
      padding: 1.25rem 2rem;

      &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  }
`;

interface PriceHighlightProps {
  variant: "income" | "outcome";
}

export const PriceHightlight = styled.td<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === "income"
      ? props.theme["green-300"]
      : props.theme["red-300"]};
`;
