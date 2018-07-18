import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        items: {
            todo: [],
            inProgress: [],
            done: [],
            cancelled: []
        },
        nextId: 1,
    },
    mutations: {
        addItem(state, item) {
            state.items.todo.push(Object.assign(item, { id: state.nextId }));
            state.nextId += 1;
        },
        updateItems(state, {items, id}) {
            state.item[id] = items;
        }
        /*updateItems(state, payload) {
            state.items[payload.id] = payload.items;
        }*/
    }
})