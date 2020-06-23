import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

import './styles.css';

import { triangleTracker } from './ping-pong';

$(document).ready(function() {
  $('#triangleTracker-form').submit(function(event) {
    event.preventDefault();
    const goal = $('#length').val();
    const output = triangle(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});