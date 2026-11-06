import template from './act-order-invoice-number-filter-info.html.twig';
import './act-order-invoice-number-filter-info.scss';

const { Component } = Shopware;

const HOW_TO_ITEM_COUNT = 4;

Component.register('act-order-invoice-number-filter-info', {
    template,

    computed: {
        howToItems() {
            return Array.from(
                { length: HOW_TO_ITEM_COUNT },
                (_, index) => `act-order-invoice-number-filter.settings.info.howTo.item${index + 1}`,
            );
        },
    },
});
