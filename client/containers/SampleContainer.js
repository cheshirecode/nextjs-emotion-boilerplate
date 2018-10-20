import { Container } from 'unstated';
import { getSamples } from '@cnbu-services/api';

export default class SampleContainer extends Container {
  state = {
    items: []
  };

  getAll = () => this.state.items;

  async fetchAll() {
    try {
      const response = await getSamples();
      await this.setState(state => ({
        ...state,
        items: response
      }));
    } catch (error) {
      throw error;
    }
  }
}
