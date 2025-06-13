export interface PaymentInfo {
  payment_method: "credit_card" | "debit_card" | "bank_transfer" | "paypal";
  payment_status:
    | "pending"
    | "processing"
    | "completed"
    | "failed"
    | "refunded";
  total_amount: number;
  deposits_paid: number;
  balance_due: number;
  final_payment_date: string;
  payment_schedule: PaymentSchedule[];
  billing_address: BillingAddress;
}

export interface PaymentSchedule {
  id: string;
  amount: number;
  due_date: string;
  description: string;
  status: "pending" | "paid" | "overdue";
}

export interface BillingAddress {
  street: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}
