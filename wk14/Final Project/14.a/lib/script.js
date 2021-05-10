Vue.component('event', {
  template: `
          <div class="event">
              <div>
              <div class="date">{{item.year}}</div>
              <h3 class="title" v-if="item.link"><a class="link" target="_blank" :href="item.link">{{item.title}}</a></h3>
              <h3 class="title" v-if="!item.link">{{item.title}}</h3>
              <div class="place">{{item.place}}</div>
              <div class="summary">{{item.summary}}</div>
              </div>
              <div class="actions"> <button class="btn btn-delete" type="button" v-on:click="$emit(\'remove\')"><i class="fas fa-minus-circle"></i> Delete</button></div>
          </div>
  `,
  props: ['item'],

}) 

let link;

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
      },
  
  
  
});

