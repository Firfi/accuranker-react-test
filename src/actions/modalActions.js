export const types = {
    OPEN_MODAL: 'OPEN_MODAL',
    CLOSE_MODAL: 'CLOSE_MODAL'
};

export default {
    openModal: (contentType, additionalProps = {}/*Additional props isn't good design. I'd ask backend devs to provide IDs or generate it myself*/) => ({
        additionalProps,
        type: types.OPEN_MODAL,
        contentType
    }),
    closeModal: () => ({
        type: types.CLOSE_MODAL
    })
};