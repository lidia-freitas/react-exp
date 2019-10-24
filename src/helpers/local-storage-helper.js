const localStorageHelper = {

    setState: (stages) => {
        localStorage.setItem('GAME', JSON.stringify(stages));
    },

    getState: () => {
        return JSON.parse(localStorage.getItem('GAME'));
    }
};

export default localStorageHelper;
