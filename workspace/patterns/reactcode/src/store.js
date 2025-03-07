const useStore = (() => {
    let storeInstance;

    const createStoreInstance = () => {
        let data = "My Store Data";
        let subscriptions = [];
        const setStore = (val) => {
            data =  val;
            subscriptions.forEach(fn => fn(data));
        }
        const getStore = () => {
            return data;
        }

        const subscribe = (fn) => {
            subscriptions.push(fn);
        }

        const unsubscribe =(fn) => {
            //
        }
        return [getStore, setStore, subscribe, unsubscribe]; // subscribe, unsubscribe
    }

    return () => {
        if (!storeInstance) {
            storeInstance = createStoreInstance();
        }
        return storeInstance;
    }
})();// IIFE

export default useStore;