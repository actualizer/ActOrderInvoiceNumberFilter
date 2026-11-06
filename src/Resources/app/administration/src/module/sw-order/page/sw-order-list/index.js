const FILTER_NAME = 'act-order-invoice-number-filter';

Shopware.Component.override('sw-order-list', {
    computed: {
        listFilterOptions() {
            return {
                ...this.$super('listFilterOptions'),
                [FILTER_NAME]: {
                    // A `property` is mandatory: without it filterFactory dies on
                    // undefined.split and the whole sidebar stays empty.
                    property: 'id',
                    type: FILTER_NAME,
                    label: this.$t('act-order-invoice-number-filter.filter.label'),
                    placeholder: this.$t('act-order-invoice-number-filter.filter.placeholder'),
                },
            };
        },
    },

    methods: {
        createdComponent() {
            this.$super('createdComponent');
            this.defaultFilters.push(FILTER_NAME);
        },
    },
});
