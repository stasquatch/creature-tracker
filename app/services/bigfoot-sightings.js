import Service from '@ember/service';
import axios from 'axios';
import config from 'creature-tracker/config/environment';

export default Service.extend({
  async getSightings() {
    return await axios({
      method: 'get',
      url: 'https://api.data.world/v0/file_download/timothyrenner/bfro-sightings-data/bfro_report_locations.csv',
      headers: {
        'Authorization': `Bearer ${config.dataWorldApiKey}`,
        'Content-Type': 'application/json'
      }
    });
  }
});