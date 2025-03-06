const useStore = (() => {
    let storeInstance;

    const createStoreInstance = () => {
        let data = "My Store Data";
        const setStore = (val) => {
            data =  val;
        }

        const getStore = () => {
            return data;
        }

        return [getStore, setStore]; // subscribe, unsubscribe
    }

    return () => {
        if (!storeInstance) {
            storeInstance = createStoreInstance();
        }
        return storeInstance;
    }
})();// IIFE

export default useStore;