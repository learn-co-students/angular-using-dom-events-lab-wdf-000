function Counter() {
  return {
    template: [
      '<div>',
      '<h3>Counter</h3>',
      '<div>Click anywhere to increment the counter!</div>',
      '<div>Current count: {{ some.count }}</div>',
      '</div>'
    ].join(''),
    controller: function ($scope) {
      this.count = 0;
    },
    controllerAs: 'some',
    link: function (scope, elem, attrs, ctrl) {
      elem.on('click', function () {
	console.log('vous avez me cliqué');
	ctrl.count += 1;
	scope.$apply();
      });

      scope.$on('$destroy', function () {
	$('div').off();
      });
    }
  }
}

angular
  .module('app')
  .directive('counter', Counter);
