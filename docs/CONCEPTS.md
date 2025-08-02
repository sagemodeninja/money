# Concepts

## Accounts

An `account` represents a collection of transactions tied to real-world financial entities, such as savings accounts, credit cards, or e-wallets.

> Transactions within an account can be linked to multiple wallets.

## Wallets

A `wallet` represents an arbitrary collection of transactions within the application. For example, a wallet could be used to track expenses, savings, or budgets independent of external accounts.

> A wallet can group transactions from multiple accounts.

## Categories

A `category` represents an additional layer of classification for transactions. 

They help organize transactions into meaningful groups, such as "Expenses", "Utilities", or "Entertainment".

## Transactions

A `transaction` represents a chronological record of financial activies. Each transaction is tied to a specific `account` and `wallet`, ensuring proper tracking and categorization.

### Lines

A `line` represents the breakdown of a `transaction`. Each transaction contains at least one line. An example of a line is the actual amount and associated fees.

### Attachments

An `attachment` represents an optional file, such as an image or PDF, that provides additional context or documentation for a `transaction`. Attachments can be used to store receipts, invoices, or other supporting materials.