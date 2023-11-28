//https://medium.com/nerd-for-tech/typescript-generic-with-some-validation-17a54cb3d6a9
namespace ss {
  type TransactionParams = {
    currency: string;
    amount: number;
    transactionDate?: Date;
    note?: string;
  };
  type ExpenseParams = TransactionParams & { type: "expense" };
  type IncomeParams = TransactionParams & { type: "income" };

  type TransactionData = TransactionParams & {
    id: number;
    createdAt: Date;
    updatedAt: Date;
  };

  type ExpenseData = TransactionData & { type: "expense" };
  type IncomeData = TransactionData & { type: "income" };

  interface CreateUpdateTransaction<P = ExpenseParams | IncomeParams, D = ExpenseData | IncomeData> {
    createTransaction(params: P): Promise<D>;
    updateTransaction(transactionId: number, params: P): Promise<D>;
  }

  type Params = { name: string; password: string };
  type Data = Params & { id: number };

  class NotTransaction implements CreateUpdateTransaction<Params, Data> {
    public async createTransaction(params: Params): Promise<Data> {
      return null;
    }

    public async updateTransaction(transactionId: number, params: Params): Promise<Data> {
      return null;
    }
  }
}

namespace ss {
  type TransactionParams = {
    currency: string;
    amount: number;
    transactionDate?: Date;
    note?: string;
  };
  type ExpenseParams = TransactionParams & { type: "expense" };
  type IncomeParams = TransactionParams & { type: "income" };
  type TransactionData = TransactionParams & {
    id: number;
    createdAt: Date;
    updatedAt: Date;
  };
  type ExpenseData = TransactionData & { type: "expense" };
  type IncomeData = TransactionData & { type: "income" };

  interface CreateUpdateTransaction<P extends TransactionParams, D extends TransactionData> {
    createTransaction(params: P): Promise<D>;
    updateTransaction(transactionId: number, params: P): Promise<D>;
  }

  class ExpenseTransaction implements CreateUpdateTransaction<ExpenseParams, ExpenseData> {
    public async createTransaction(params: ExpenseParams): Promise<ExpenseData> {
      return null;
    }

    public async updateTransaction(transactionId: number, params: ExpenseParams): Promise<ExpenseData> {
      return null;
    }
  }
}
