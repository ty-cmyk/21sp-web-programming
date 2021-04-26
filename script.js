var vm = new Vue ({
  el: '#app',
  data: {
      searchQuery: '',
      results: []
  },
  methods: {
    searchArt: function () {
      axios
          .get('https://collectionapi.metmuseum.org/public/collection/v1/search', {params: {q: vm.searchQuery}})
          .then(response => {
            vm.results = response.data.data;
      })
    }
  },
  mounted () {
    let query = {
      geoLocation: 'France',
      q: 'flowers'
    }
    axios
        .get('https://collectionapi.metmuseum.org/public/collection/v1/search',
        {params: query})
        .then(response => {
          console.log('response', response)
    });
  }
})