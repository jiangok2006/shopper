import type {
  FunctionError,
  FunctionRunResult,
  RunInput,
} from "../generated/api";

export function run(input: RunInput): FunctionRunResult {
  const errors: FunctionError[] = input.cart.lines
    .filter(({ quantity }) => quantity > 1)
    .map(() => ({
      localizedMessage: "Impossible to order more than one of each",
      target: "cart",
    }));

  return {
    errors
  }
};