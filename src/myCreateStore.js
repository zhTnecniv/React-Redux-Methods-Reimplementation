const myCreateStore = (reducer, preloadedState) => {
    const store = {};
    store.reducer = reducer;
    store.listeners = [];
    store.getState = () => {
        return store.state;
    }
    store.dispatch = (action) => {
        const prevState = store.state;
        store.state = store.reducer(prevState, action);
        if (Object.is(prevState, store.state) === false) {
            store.listeners.forEach(listener => listener());
        }
    }
    store.subscribe = (listener) => {
        store.listeners.push(listener);
        return () => {
            store.listeners.filter(cb => cb !== listener);
        }
    }
    store.state = preloadedState !== undefined || store.reducer(undefined, {});
    return store;
}

export { myCreateStore };