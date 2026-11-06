import template from './act-order-invoice-number-filter.html.twig';

const { Criteria } = Shopware.Data;

// ZUGFeRD invoices draw their number from the same `document_invoice` number range
// as the classic invoice, so all three count as an invoice here.
const INVOICE_DOCUMENT_TYPES = [
    'invoice',
    'zugferd_invoice',
    'zugferd_embedded_invoice',
];

Shopware.Component.register('act-order-invoice-number-filter', {
    template,

    emits: [
        'filter-update',
        'filter-reset',
    ],

    props: {
        filter: {
            type: Object,
            required: true,
        },
        active: {
            type: Boolean,
            required: true,
        },
    },

    methods: {
        changeValue(newValue) {
            const numbers = String(newValue ?? '')
                .split(',')
                .map((number) => number.trim())
                .filter((number) => number !== '');

            if (numbers.length === 0) {
                this.resetFilter();
                return;
            }

            // One AND multi filter, so the DAL binds type and number to the same document row.
            // `documentType` is deprecated since 6.7.14 (use `typeName` once the floor allows it).
            const filterCriteria = Criteria.multi('AND', [
                Criteria.equalsAny('documents.documentType.technicalName', INVOICE_DOCUMENT_TYPES),
                Criteria.equalsAny('documents.documentNumber', numbers),
            ]);

            this.$emit('filter-update', this.filter.name, [filterCriteria], numbers.join(', '));
        },

        resetFilter() {
            this.$emit('filter-reset', this.filter.name);
        },
    },
});
