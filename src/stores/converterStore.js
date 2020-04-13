import { observable, computed, action } from 'mobx';

class ConverterStore {
    @observable  selectedCoin = {
        name: '',
        price: 0,
    };

    @computed
    get getSelectedCoin() {
        return this.selectedCoin;
    }

    @action
    setSelectedCoin(coin) {
        this.selectedCoin = {
            name: coin.name,
            price: coin.price,
        };
    }
}

export default ConverterStore;