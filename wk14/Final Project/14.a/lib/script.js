Vue.component('event', {
  template: `
          <div class="event">
              <div class="date">{{item.year}}</div>
              <h3 class="title">{{item.title}}</h3>
              <div class="place">{{item.place}}</div>
              <div class="summary">{{item.summary}}</div>
          </div>
  `,
  props: ['item']
}) 


var vm = new Vue({
  el: "#chronology",
  data: {

    events: []
  },
  computed: {
    numEvents: function () {
      return this.events.length
    }
  },
  mounted () {
    axios
        .get('./lib/events.json')
        .then(response => {
          console.log('response', response);
          vm.events = response.data;
          console.log(vm.events);
        });
        
  
  
      }
});

