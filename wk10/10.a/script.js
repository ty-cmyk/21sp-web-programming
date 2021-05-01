

Vue.component('film', {
  template: 
  `
    <div class="movie">
    <div class="rank">Episode {{movie.episode_id}}</div>
    <h3>{{movie.title}}</h3>
    <div class="data-head">Release Date: <span class="data">{{movie.release_date}}</span></div>
    <div class="data-head">Director: <span class="data">{{movie.director}}</span></div>
    <div class="crawl">{{movie.opening_crawl}}</div>
    </div>
  `,
  props: ['movie'],
});

var vm = new Vue ({
  el: '#app',
  data: {
      films: []
  },
  mounted () {
    axios
        .get('https://swapi.dev/api/films/')
        .then(result => {
          console.log('result', result);
          vm.films = result.data.results;
          console.log(vm.films);
        });
   
  }
})