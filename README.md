# ActOrderInvoiceNumberFilter

Adds an **Invoice number** filter to the right-hand filter sidebar of the Shopware 6
order overview. It finds orders that carry an invoice document with the entered number.

## Requirements

- Shopware `>=6.7 <6.8`, tested with 6.7.16.0
- PHP 8.4 or higher

## Installation

### Via Composer (recommended)

```bash
composer require actualizer/order-invoice-number-filter
bin/console plugin:refresh
bin/console plugin:install --activate ActOrderInvoiceNumberFilter
bin/console cache:clear
```

### Manual

1. Download or clone this plugin into your `custom/plugins/` directory
2. Install and activate the plugin via CLI:
   ```bash
   bin/console plugin:refresh
   bin/console plugin:install --activate ActOrderInvoiceNumberFilter
   bin/console cache:clear
   ```

## Usage

Open the order overview, open the filter sidebar and enter an invoice number in the
**Invoice number** field. Several numbers can be entered separated by commas; an order
matches if it has an invoice with any of them.

- The match is exact: `100` does not find `1000`.
- Counted as an invoice are the document types `invoice`, `zugferd_invoice` and
  `zugferd_embedded_invoice` (the ZUGFeRD e-invoices use the invoice number range).
  Cancellation invoices, credit notes, delivery notes and other documents are ignored,
  even if their number is identical.
- The filter is available to every user who may open the order overview; there is nothing
  to configure.
  Like every other sidebar filter, the entered value is remembered per user.

## Support

For issues and feature requests, please use the GitHub issue tracker. Please report security vulnerabilities privately instead, as described in the [security policy](https://github.com/actualizer/ActOrderInvoiceNumberFilter/security/policy).

## License

This plugin is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

Developed by Actualize

---

Made with ❤️ for the Shopware Community
