# Security Policy

## Supported versions

Security fixes are released for the latest version only. Please check that the issue still occurs on the latest release before reporting it.

## Reporting a vulnerability

Please do **not** open a public issue for security problems.

Report it privately via GitHub instead: [Report a vulnerability](https://github.com/actualizer/ActOrderInvoiceNumberFilter/security/advisories/new). Only you and the maintainers can see the report. If you cannot use GitHub, send an email to plugin@actualize.de.

Please include:

- the plugin version and Shopware version
- the steps to reproduce
- what an attacker gains

## What to expect

- An acknowledgement within 7 days.
- Once confirmed, a fix is released as a new version. The advisory is published after that release, crediting you unless you prefer otherwise.

## Scope

In scope:

- Orders or documents becoming visible to an Administration user who lacks the permission to read them.
- Input in the invoice number field being executed as code in the Administration.

Out of scope:

- Anything that already requires full administrator rights.
- Vulnerabilities in Shopware itself. Please report those to Shopware: <https://github.com/shopware/shopware/security/policy>.
