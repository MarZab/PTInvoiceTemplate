

module.exports = {
  "business": {
    "labels": {
      "CB_Estimate": "Estimate",
      "CB_Invoice": "Invoice",
      "CB_NotYetSent": "Not yet sent.",
      "CB_Date": "Date",
      "CB_Description": "Description",
      "CB_Hours": "Hours",
      "CB_Rate": "Rate",
      "CB_Quantity": "Quantity",
      "CB_UnitCost": "Cost",
      "CB_Cost": "Cost",
      "CB_NA": "n/a",
      "CB_Expenses": "Expenses",
      "CB_Totals": "Totals",
      "CB_Subtotal": "Subtotal",
      "CB_TotalCost": "Total Cost",
      "CB_TotalPaid": "Total Paid",
      "CB_TotalDue": "Total Due",
      "CB_PaymentDueOnReceipt": "Payment due on receipt.",
      "CB_PaymentDueBy": "Payment due by",
      "CB_InvoicedCustomer": "Invoiced Customer:",
      "CB_MailPaymentTo": "Mail payment to:",
      "CB_InvoiceNumber": "Invoice #"
    },
    "displayName": {"escapedForHTML": "Company Display Name"},
    "companyName": "Company Name",
    "fullName": "Full Name",
    "mailingAddressAsHTML": "Mailing Address",
    "otherContactInfoAsHTML": "Other contact"
  },

  "invoice": {
    "sentDateUsingFormatter": {"escapedForHTML": "string"},
    "business": {
      "pathToLogoCache": "string",
      "businessLogoWidth": "string",
      "businessLogoHeight": "string",
      "displayName": "displayName"
    },
    "invoiceNumber": {"escapedForHTML": "INVOICE-2017-22"},
    "message": "A sample invoice message.",
    "messageAsHTML": "string",
    "tax1Label": {"escapedForHTML": "string"},
    "tax2Label": {"escapedForHTML": "string"},
    "subtotalCostUsingFormatter": "string",
    "taxLabel1WithRate": "string",
    "tax1CostUsingFormatter": "string",
    "taxLabel2WithRate": "string",
    "tax2CostUsingFormatter": "string",
    "totalCostUsingFormatter": "string",
    "totalPaidUsingFormatter": "string",
    "totalDueUsingFormatter": "string",
    "dueDateUsingFormatter": "string",
    "client": {
      "companyName": "Client Company",
      "fullName": "string",
      "mailingAddressAsHTML": "string",
      "otherContactInfoAsHTML": "string",
      "footerTextAsHTML": "string"
    }
  },
  "lineItem": {
    "datePerformedUsingFormatter": "string",
    "lineItemDescription": {"escapedForHTML": "string"},
    "noteAsHTML": "string",
    "timeAsHoursInDecimalFormat": "string",
    "hourlyRateUsingFormatter": "string",
    "quantityOfProductUsingFormatter": "string",
    "productCostUsingFormatter": "string",
    "lineItemDescriptionExtras": {"escapedForHTML": "string"},
    "costUsingFormatter": "string"
  }
};